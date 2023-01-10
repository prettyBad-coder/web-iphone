import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type Props = {
	isActive: boolean
	storyId: number
	className?: string
}

const InstagramStoryWrapper = ({ isActive, storyId, children, className = "" }: PropsWithChildren<Props>) =>
	isActive
		?
		<Link
			to={ `/instagram/story/${ storyId }` }
			className={ className }
		>
			{ children }
		</Link>
		:
		<div className={ className }>
			{ children }
		</div>


export default InstagramStoryWrapper;