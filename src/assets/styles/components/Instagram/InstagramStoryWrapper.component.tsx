import { PropsWithChildren } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

type Props = {
	isActive: boolean
	storyId: number
}

const InstagramStoryWrapper = ({ isActive, storyId, children }: PropsWithChildren<Props>) =>
	isActive
		?
		<Link
			to={ `/instagram/story/${ storyId }` }
			className={ classNames("instagram-story", { "cursor-pointer": isActive }) }
		>
			{ children }
		</Link>
		:
		<div className="instagram-story">
			{ children }
		</div>


export default InstagramStoryWrapper;