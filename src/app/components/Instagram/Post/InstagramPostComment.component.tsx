import { InstagramCommentType } from "app/types/instagram.types";

type Props = {
	comment: InstagramCommentType
}

const InstagramPostComment = ({ comment: { userName, content } }: Props) =>
	<div className="instagram-post__comment">
		<div className="instagram-post__comment-user-name">{ userName }</div>
		<div className="instagram-post__comment-content">{ content }</div>
	</div>

export default InstagramPostComment;