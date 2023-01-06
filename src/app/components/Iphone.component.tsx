import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBattery, faSignal, faWifi } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

type Props = {
	isLockedScreen?: boolean
	url?: string
}

const Iphone = ({ url, isLockedScreen = false }: Props) => {
	return (
		<>
			<div className="iphone"></div>
			<div
				className="iphone__screen"
				style={ {
					backgroundImage:
						isLockedScreen
							?
							"url(http://papers.co/wallpaper/papers.co-bg37-apple-iphonexs-max-official-art-41-iphone-wallpaper.jpg)"
							:
							"url(https://w0.peakpx.com/wallpaper/1018/724/HD-wallpaper-apple-iphone-xs-world-cosmos-earth-7itech-iphone-x-iphone-xs.jpg)"
				} }
			>
				<div className="iphone__notch-items">
					<div className="iphone__notch-items-left">
						PLAY
					</div>
					<div className="iphone__notch-items-right">
						<FontAwesomeIcon
							icon={ faSignal }
							color="white"
							size="xs"
						/>
						<FontAwesomeIcon
							icon={ faWifi }
							color="white"
							size="xs"
						/>
						<FontAwesomeIcon
							icon={ faBattery }
							color="white"
						/>
					</div>
				</div>
				<Outlet/>
				{
					url === undefined
						?
						<div className="iphone__bottom-line cursor-pointer"></div>
						:
						<Link className="iphone__bottom-line cursor-pointer" to={ url }></Link>
				}
			</div>
		</>
	)
}

export default Iphone;