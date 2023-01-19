import InstagramStoryScreenLine from "app/components/Instagram/Story/InstagramStoryScreenLine.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { InstagramStoryType } from "app/types/instagram.types";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = {
	story: InstagramStoryType,
	nestedStoryIndex: number
	onPrevStory: () => void
	onNextStory: () => void
}

const InstagramStoryContent = (props: Props) => {
	
	const {
		story,
		nestedStoryIndex,
		onPrevStory,
		onNextStory,
	} = props;

	const storyAnimationDuration = 4;

	const navigate = useNavigate();

	const location = useLocation();

	const nextStoryTimeout = setTimeout(() => onNextStory(), storyAnimationDuration * 1000);

	useEffect(() => {
		return () => clearTimeout(nextStoryTimeout);
	}, [ location ]);

	return (
		<div className="instagram-story-screen application">
			<div
				className="instagram-story-screen__content"
				style={ { backgroundImage: `url(${ story.images[ nestedStoryIndex ] })` } }
			>
				<div className="instagram-story-screen__left-click" onClick={ onPrevStory }></div>
				<div className="instagram-story-screen__right-click" onClick={ onNextStory }></div>
				<div className="instagram-story-screen__header">
					<div
						className="instagram-story-screen__time-lines-wrapper"
						style={ { gridTemplateColumns: story.images.map(_ => `1fr`).join(" ") } }
					>
						{
							Array(story.images.length)
								.fill(0)
								.map((_, index) =>
									<InstagramStoryScreenLine
										key={ index }
										index={ index }
										nestedStoryIndex={ nestedStoryIndex }
										storyAnimationDuration={ storyAnimationDuration }
									/>
								)
						}
					</div>
					<div className="instagram-story-screen__header-body">
						<div className="instagram-story-screen__header-user-data">
							<div
								className="instagram-story-screen__user-image"
								style={ { backgroundImage: `url(${ story.backgroundImageURL })` } }
							></div>
							<div className="instagram-story-screen__user-name">
								{ story.name }
							</div>
						</div>
						<FontAwesomeIcon
							icon={ faXmark }
							color="white"
							onClick={ () => navigate("/instagram") }
							className="instagram-story-screen__x-icon cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InstagramStoryContent;