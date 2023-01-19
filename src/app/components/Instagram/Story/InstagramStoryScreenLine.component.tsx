import classNames from "classnames";

type Props = {
	index: number
	nestedStoryIndex: number
	storyAnimationDuration: number
}

const InstagramStoryScreenLine = (props: Props) => {

	const {
		index,
		nestedStoryIndex,
		storyAnimationDuration,
	} = props;

	return (
		<div className={ classNames("instagram-story-screen__time-line", { "instagram-story-screen__time-line--active": index < nestedStoryIndex }) }>
			<div
				className={ classNames("instagram-story-screen__time-line-inner", { "instagram-story-screen__time-line-inner--active": index === nestedStoryIndex }) }
				style={ { animationDuration: `${ storyAnimationDuration }s` } }
			></div>
		</div>
	);
}

export default InstagramStoryScreenLine;