import InstagramStoryScreenLine from "app/components/Instagram/Story/InstagramStoryScreenLine.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { InstagramStoryType } from "app/types/instagram.types";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

type Props = {
	story: InstagramStoryType,
	nestedStoryIndex: number
	onPrevStory: () => void
	onNextStory: () => void
}

export enum AnimationPlayState {
	running = "running",
	paused = "paused",
}

const InstagramStoryContent = (props: Props) => {
	
	const {
		story,
		nestedStoryIndex,
		onPrevStory,
		onNextStory,
	} = props;

	const [ animationPlayState, setAnimationPlayState ] = useState(AnimationPlayState.running);

	const [ storyAnimationStartMS, setStoryAnimationStartMS ] = useState(+new Date());

	const [ remainingStoryAnimationMS, setRemainingStoryAnimationMS ] = useState(4000);

	const [ prevURL, setPrevURL ] = useState<string | null>(null);

	const navigate = useNavigate();

	const location = useLocation();

	const nextStoryTimeout = useMemo(() => {
		if (animationPlayState === AnimationPlayState.paused) return;

		console.log("prevURL", prevURL);
		console.log("location.pathname", location.pathname);

		//if url doesn't change timeout duration is set to remainingStoryAnimationMS state
		if (prevURL === location.pathname || prevURL === null) {
			console.log("path DOEST change");
			return setTimeout(() => onNextStory(), remainingStoryAnimationMS);
		}

		// if only url changes then timeout duration is 4000ms;
		console.log("path change");
		return setTimeout(() => onNextStory(), 4000);
	}, [ animationPlayState, prevURL ])

	const onStoryPause = () => {
		setAnimationPlayState(AnimationPlayState.paused);
		setRemainingStoryAnimationMS(prevState => prevState - (+new Date() - storyAnimationStartMS));
		clearTimeout(nextStoryTimeout);
	};

	const onStoryPlay = () => {
		setAnimationPlayState(AnimationPlayState.running);
		setStoryAnimationStartMS(+new Date());
	}

	const onPrevStoryClick = () => {
		onPrevStory();
		clearTimeout(nextStoryTimeout);
	}

	const onNextStoryClick = () => {
		onNextStory();
		clearTimeout(nextStoryTimeout);
	}

	const onStoryExit = () => {
		navigate("/instagram");
		clearTimeout(nextStoryTimeout);
	}


	useEffect(() => {
		setRemainingStoryAnimationMS(4000);
		return () => {
			setPrevURL(location.pathname);
			clearTimeout(nextStoryTimeout);
		};
	}, [ location ]);

	console.log("--------------");

	return (
		<div className="instagram-story-screen application">
			<div
				className="instagram-story-screen__content"
				style={ { backgroundImage: `url(${ story.images[ nestedStoryIndex ] })` } }
			>
				<div className="instagram-story-screen__left-click" onClick={ onPrevStoryClick }></div>
				<div className="instagram-story-screen__right-click" onClick={ onNextStoryClick }></div>
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
										storyAnimationDuration={ remainingStoryAnimationMS }
										animationPlayState={ animationPlayState }
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
						<div className="instagram-story-screen__header-icons-wrapper">
							{
								animationPlayState === AnimationPlayState.running
									?
									<FontAwesomeIcon
										icon={ faPause }
										onClick={ onStoryPause }
										color="white"
										className="cursor-pointer"
									/>
									:
									<FontAwesomeIcon
										icon={ faPlay }
										onClick={ onStoryPlay }
										color="white"
										className="cursor-pointer"
									/>
							}
							<FontAwesomeIcon
								icon={ faXmark }
								color="white"
								onClick={ onStoryExit }
								className="cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InstagramStoryContent;