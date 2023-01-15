import InstagramStoryScreenLine from "app/components/Instagram/Story/InstagramStoryScreenLine.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { InstagramStoryType } from "app/types/instagram.types";
import { useNavigate } from "react-router-dom";

type Props = {
	stories: InstagramStoryType,
	nestedStoryIndex: number
	onPrevStory: () => void
	onNextStory: () => void
}

const InstagramStoryContent = (props: Props) => {
	
	const {
		stories,
		nestedStoryIndex,
		onPrevStory,
		onNextStory,
	} = props;

	const navigate = useNavigate();

	return (
		<div className="instagram-story-screen">
			<div
				className="instagram-story-screen__content"
				style={ { backgroundImage: `url(${ stories.images[ nestedStoryIndex ] })` } }
			>
				<div className="instagram-story-screen__left-click" onClick={ onPrevStory }></div>
				<div className="instagram-story-screen__right-click" onClick={ onNextStory }></div>
				<div className="instagram-story-screen__header">
					<div
						className="instagram-story-screen__time-lines-wrapper"
						style={ { gridTemplateColumns: stories.images.map(_ => `1fr`).join(" ") } }
					>
						{
							Array(stories.images.length)
								.fill(0)
								.map((_, index) =>
									<InstagramStoryScreenLine
										key={ index }
										index={ index }
										nestedStoryIndex={ nestedStoryIndex }
									/>
								)
						}
					</div>
					<div className="instagram-story-screen__header-body">
						<div className="instagram-story-screen__header-user-data">
							<div
								className="instagram-story-screen__user-image"
								style={ { backgroundImage: `url(${ stories.backgroundImageURL })` } }
							></div>
							<div className="instagram-story-screen__user-name">
								{ stories.name }
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
	)
}

export default InstagramStoryContent;