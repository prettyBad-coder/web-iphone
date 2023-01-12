import { useNavigate, useParams } from "react-router-dom";
import stories from "app/data/intagram-stories.json";
import InstagramStoryContent from "app/components/Instagram/Story/InstagramStoryContent.component";
import { InstagramStoryType } from "app/types/instagram.types";

const InstagramStoryScreen = () => {

	const { storyId = 0, userStoryIndex = 0 } = useParams();

	const activeGlobalStories = stories.filter(story => story.images.length !== 0).sort((a, b) => +a.id - +b.id);
	const currentUserStories = activeGlobalStories.find(story => +story.id === +storyId) ?? null;


	const lastGlobalStoryId = activeGlobalStories[ activeGlobalStories.length - 1 ].id;
	const firstGlobalStoryId = activeGlobalStories[ 0 ].id;

	const navigate = useNavigate();

	const onNextStory = () => {
		if (currentUserStories === null) return;

		//Current story has nested stories
		if (currentUserStories.images.length > 1) {
			if ((+userStoryIndex + 1) < currentUserStories.images.length) {
				navigate(`/instagram/story/${ currentUserStories.id }/${ +userStoryIndex + 1 }`);
				return;
			}
		}
		if (+storyId + 1 > lastGlobalStoryId) {
			navigate("/instagram");
			return;
		}
		const currentStoryIndexInGlobalActiveStories = activeGlobalStories.findIndex(story => +story.id === +currentUserStories.id);
		navigate(`/instagram/story/${ activeGlobalStories[ currentStoryIndexInGlobalActiveStories + 1 ].id }`);
	};

	const onPrevStory = () => {
		if (currentUserStories === null) return;
		if (+storyId - 1 < firstGlobalStoryId) {
			navigate("/instagram");
			return;
		}

		const currentStoryIndexInGlobalActiveStories = activeGlobalStories.findIndex(story => +story.id === +currentUserStories.id);

		//Check if user is on first of his stories
		if (+userStoryIndex === 0) {
			//Check if next story has nested stories
			if (activeGlobalStories[ currentStoryIndexInGlobalActiveStories - 1 ].images.length > 0) {
				const nextStoryPage = activeGlobalStories[ currentStoryIndexInGlobalActiveStories - 1 ];
				navigate(`/instagram/story/${ nextStoryPage.id }/${ nextStoryPage.images.length - 1 }`);
				return;
			}
		}

		//Check if user has any previous nested stories
		if (+userStoryIndex > 0) {
			navigate(`/instagram/story/${ currentUserStories.id }/${ +userStoryIndex - 1 }`);
			return;
		}
		navigate(`/instagram/story/${ activeGlobalStories[ currentStoryIndexInGlobalActiveStories - 1 ].id }`);
	};

	return (
		<>
			{
				currentUserStories !== null
					&&
					<InstagramStoryContent
						stories={ currentUserStories as unknown as InstagramStoryType }
						nestedStoryIndex={ +userStoryIndex }
						onPrevStory={ onPrevStory }
						onNextStory={ onNextStory }
					/>
			}
		</>
	);
};

export default InstagramStoryScreen;