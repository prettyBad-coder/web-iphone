import { useNavigate, useParams } from "react-router-dom";
import stories from "app/data/intagram-stories.json";
import InstagramStoryContent from "app/components/Instagram/Story/InstagramStoryContent.component";
import { InstagramStoryType } from "app/types/instagram.types";

const InstagramSingleStoryScreen = () => {

	const { storyId = 0, userStoryIndex = 0 } = useParams();

	const navigate = useNavigate();

	const currentUserStory = stories.find(story => +story.id === +storyId) ?? null;

	const onNextStory = () => {
		if (currentUserStory === null) return;
		if ((+userStoryIndex + 1) === currentUserStory.images.length) {
			navigate("/instagram");
			return;
		}
		navigate(`/instagram/single-story/${ storyId }/${ +userStoryIndex + 1 }`);
	};

	const onPrevStory = () => {
		if (currentUserStory === null || +userStoryIndex === 0) return;
		navigate(`/instagram/single-story/${ storyId }/${ +userStoryIndex - 1 }`);
	};

	return (
		<>
			{
				currentUserStory !== null
					&&
					<InstagramStoryContent
						story={ currentUserStory as unknown as InstagramStoryType }
						nestedStoryIndex={ +userStoryIndex }
						onPrevStory={ onPrevStory }
						onNextStory={ onNextStory }
					/>
			}
		</>
	)
}

export default InstagramSingleStoryScreen