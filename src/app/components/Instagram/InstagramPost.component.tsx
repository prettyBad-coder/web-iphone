import InstagramPostComment from "app/components/Instagram/InstagramPostComment.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Comment } from "app/types";
// import { faBookmark as RegularBookmark } from "@fortawesome/free-regular-svg-icons";

type Props = {
	profileImageURL: string
	name: string
	localization?: string
	imageURL: string
	likesCount: number | string
	title: string
	comments: Comment[]
	isVerified?: boolean
};

const InstagramPost = (props: Props) => {

	const {
		profileImageURL,
		name,
		localization,
		imageURL,
		likesCount,
		title,
		comments,
		isVerified = false,
	} = props;

	return (
		<div className="instagram-post">
			<div className="instagram-post__header">
				<div
					className="instagram-post__profile-image"
					style={ { backgroundImage: `url(${ profileImageURL })` } }
				></div>
				<div className="instagram-post__name-and-localization">
					<div className="instagram-post__name">
						{ name }
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
							{ name }
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