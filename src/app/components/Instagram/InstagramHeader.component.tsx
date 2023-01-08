
// @ts-ignore
// import instagramLogo from "assets/images/Instagram_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaperPlane, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const InstagramHeader = () => {

	return (
		<div className="instagram-header">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" className="instagram-header__logo"/>
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