import classNames from "classnames";

type Props = {
	index: number
	nestedStoryIndex: number
	storyAnimationDuration: number
	animationPlayState: AnimationPlayState
}

const InstagramStoryScreenLine = (props: Props) => {

	const {
		index,
		nestedStoryIndex,
		storyAnimationDuration,
		animationPlayState,
	} = props;

	return (
		<div className={ classNames("instagram-story-screen__time-line", { "instagram-story-screen__time-line--active": index < nestedStoryIndex }) }>
			<div
				className={ classNames("instagram-story-screen__time-line-inner", { "instagram-story-screen__time-line-inner--active": index === nestedStoryIndex }) }
				style={ { animationDuration: `${ storyAnimationDuration }s`, animationPlayState: animationPlayState } }
			></div>
		</div>
	);
}

export default InstagramStoryScreenLine;