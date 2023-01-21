import classNames from "classnames";
import { useMemo } from "react";

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

	const animationDuration = useMemo(() => storyAnimationDuration, []);

	return (
		<div className={ classNames("instagram-story-screen__time-line", { "instagram-story-screen__time-line--active": index < nestedStoryIndex }) }>
			<div
				className={ classNames("instagram-story-screen__time-line-inner", { "instagram-story-screen__time-line-inner--active": index === nestedStoryIndex }) }
				style={ { animationDuration: `${ 4 }s`, animationPlayState: animationPlayState } }
			></div>
		</div>
	);
}

export default InstagramStoryScreenLine;