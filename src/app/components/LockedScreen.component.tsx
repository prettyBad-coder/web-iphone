import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faLock, faCamera } from "@fortawesome/free-solid-svg-icons";

const LockedScreen = () => {
	return (
		<div className="locked-screen">
			<div className="locked-screen__heading">
				<div className="locked-screen__padlock">
					<FontAwesomeIcon
						icon={ faLock }
						color="white"
						size="xs"
					/>
				</div>
				<div className="locked-screen__time">
					18:20
				</div>
				<div className="locked-screen__date">
					Friday, 6 January
				</div>
			</div>
			<div className="locked-screen__footer">
				<div className="locked-screen__side-item cursor-pointer">
					<FontAwesomeIcon icon={ faLightbulb } color="white"/>
				</div>
				<div className="locked-screen__middle-text">
					Swipe up to unlock
				</div>
				<div className="locked-screen__side-item cursor-pointer">
					<FontAwesomeIcon icon={ faCamera } color="white"/>
				</div>
			</div>
		</div>
	)
}

export default LockedScreen;