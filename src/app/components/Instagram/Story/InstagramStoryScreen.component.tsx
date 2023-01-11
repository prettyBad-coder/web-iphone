import { useNavigate, useParams } from "react-router-dom";
import stories from "app/data/intagram-stories.json";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	single?: boolean
}

const InstagramStoryScreen = ({ single = false }: Props) => {

	const { storyId = 0 } = useParams();

	const activeStories = stories.filter(story => story.images.length !== 0).sort((a, b) => +a.id - +b.id);
	const currentStory = activeStories.find(story => +story.id === +storyId) ?? null;

	const lastStoryId = activeStories[ activeStories.length - 1 ].id;
	const firstStoryId = activeStories[ 0 ].id;

	const navigate = useNavigate();

	const onNextStory = () => {
		if (currentStory === null) return;
		if (single) navigate(-1);
		if (+storyId + 1 > lastStoryId) {
			navigate("/instagram");
			return;
		}
		const currentStoryIndexInActiveStories = activeStories.findIndex(story => +story.id === +currentStory.id);
		navigate(`/instagram/story/${ activeStories[ currentStoryIndexInActiveStories + 1 ].id }`);
	};

	const onPrevStory = () => {
		if (currentStory === null || single) return;
		if (+storyId - 1 < firstStoryId) {
			navigate("/instagram");
			return;
		}
		const currentStoryIndexInActiveStories = activeStories.findIndex(story => +story.id === +currentStory.id);
		navigate(`/instagram/story/${ activeStories[ currentStoryIndexInActiveStories - 1 ].id }`);
	};

	return (
		<>
			{
				currentStory !== null
					&&
					<div className="instagram-story-screen">
						<div
							className="instagram-story-screen__content"
							style={ { backgroundImage: `url(${ currentStory.images[ 0 ] })` } }
						>
							<div className="instagram-story-screen__left-click" onClick={ onPrevStory }></div>
							<div className="instagram-story-screen__right-click" onClick={ onNextStory }></div>
							<div className="instagram-story-screen__header">
								<div className="instagram-story-screen__time-line"></div>
								<div className="instagram-story-screen__header-body">
									<div className="instagram-story-screen__header-user-data">
										<div
											className="instagram-story-screen__user-image"
											style={ { backgroundImage: `url(${ currentStory.backgroundImageURL })` } }
										></div>
										<div className="instagram-story-screen__user-name">
											{ currentStory.name }
										</div>
									</div>
									<FontAwesomeIcon
										icon={ faXmark }
										color="white"
										onClick={ () => navigate("/instagram") }
										className="cursor-pointer"
									/>
								</div>
							</div>
						</div>
					</div>
			}
		</>
	);
};

export default InstagramStoryScreen;