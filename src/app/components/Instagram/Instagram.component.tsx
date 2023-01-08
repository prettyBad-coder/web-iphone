import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSquarePlus, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Instagram = () =>
	<div className="instagram">
		<div className="instagram__header">
			<div className="instagram__header-logo">
			</div>
			<div className="instagram__header-plus">
				<FontAwesomeIcon
					icon={ faSquarePlus }
					color="white"
					size="xs"
				/>
			</div>
			<div className="instagram__header-liked">
				<FontAwesomeIcon
					icon={ faHeart }
					color="white"
					size="xs"
				/>
			</div>
			<div className="instagram__header-dm">
				<FontAwesomeIcon
					icon={ faPaperPlane }
					color="white"
					size="xs"
				/>
			</div>
		</div>
		<div className="instagram__stories-wrapper">

		</div>
		<div className="instagram__content">

		</div>
		<div className="instagram__footer">
			<div className="instagram__footer-home">

			</div>
			<div className="instagram__footer-search">

			</div>
			<div className="instagram__footer-reels">

			</div>
			<div className="instagram__footer-shop">

			</div>
			<div className="instagram__footer-profile">

			</div>
		</div>
	</div>

export default Instagram;