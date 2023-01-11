
import instagramLogo from "assets/images/instagram_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaperPlane, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const InstagramHeader = () => {

	return (
		<div className="instagram-header">
			<img src={ instagramLogo } className="instagram-header__logo" alt="instagram-logo"/>
			<div className="instagram-header__icons-wrapper">
				<div className="cursor-pointer">
					<FontAwesomeIcon
						icon={ faSquarePlus }
						color="white"
					/>
				</div>
				<div className="cursor-pointer">
					<FontAwesomeIcon
						icon={ faHeart }
						color="white"
					/>
				</div>
				<div className="cursor-pointer">
					<FontAwesomeIcon
						icon={ faPaperPlane }
						color="white"
					/>
				</div>
			</div>
		</div>
	)
}

export default InstagramHeader;