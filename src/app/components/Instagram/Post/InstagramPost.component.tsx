import InstagramPostComment from "app/components/Instagram/Post/InstagramPostComment.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { faBookmark as RegularBookmark } from "@fortawesome/free-regular-svg-icons";
import users from "app/data/instagram-users.json"
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { MouseEvent } from "react";
import { InstagramPostType } from "app/types/instagram.types";

type Props = {
	post: InstagramPostType
};

const InstagramPost = (props: Props) => {

	const {
		post: {
			id: postId,
			profileImageURL,
			userName,
			localization,
			imageURL,
			likesCount,
			title,
			comments,
			// isVerified = false,
		}
	} = props;

	const navigate = useNavigate();

	const user = users.find(user => user.postsIds.includes(postId)) ?? null;

	const hasStories = user?.storyId !== null;

	const onAvatarClick = (e: MouseEvent<HTMLDivElement>) => {
		if (user === null || user?.storyId === null) return;
		e.stopPropagation();
		navigate(`/instagram/story/${ user.storyId }/single`);
	}

	return (
		<div className="instagram-post">
			<div
				className="instagram-post__header cursor-pointer"
				onClick={ () => navigate(`/instagram/profile/${ user?.id ?? 0 }`) }
			>
				<div
					className={ classNames("instagram-post__profile-image-wrapper", { "instagram-post__profile-image-wrapper--active": hasStories }) }
					onClick={ onAvatarClick }
				>
					<div
						className="instagram-post__profile-image"
						style={ { backgroundImage: `url(${ profileImageURL })` } }
					></div>
				</div>
				<div className="instagram-post__name-and-localization">
					<div className="instagram-post__name">
						{ userName }
					</div>
					<div className="instagram-post__localization">
						{ localization }
					</div>
				</div>
			</div>
			<div
				className="instagram-post__post-image"
				style={ { backgroundImage: `url(${ imageURL })` } }
			></div>
			<div className="instagram-post__footer">
				<div className="instagram-post__footer-top">
					<div className="instagram-post__footer-icons-wrapper">
						<FontAwesomeIcon icon={ faHeart } color="white"/>
						<FontAwesomeIcon icon={ faComment } color="white"/>
						<FontAwesomeIcon icon={ faPaperPlane } color="white"/>
					</div>
					<div className="instagram-post__footer-save-post">
						<FontAwesomeIcon icon={ faBookmark } color="white"/>
					</div>
				</div>
				<div className="instagram-post__footer-bottom">
					<div className="instagram-post__likes">
						{ `${ likesCount } likes` }
					</div>
					<div className="instagram-post__title-wrapper">
						<div className="instagram-post__title-name">
							{ userName }
						</div>
						<div className="instagram-post__title">
							{ title }
						</div>
					</div>
					<div className="instagram-post__comments">
						{
							comments.length > 2
								&&
								<div className="instagram-post__all-comments">
									{ `View all ${ comments.length } comments` }
								</div>
						}
						{
							comments.map((comment, index) => index < 2 && <InstagramPostComment comment={ comment } key={ comment.id }/>)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default InstagramPost;