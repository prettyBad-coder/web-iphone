import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBattery, faSignal, faWifi } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import Date from "app/components/Utils/Date.component";

type Props = {
	isLockedScreen?: boolean
	urlTo?: string
}

const IphoneLayout = ({ urlTo, isLockedScreen = false }: Props) => {
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
						<Date isTime/>
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
					urlTo === undefined
						?
						<div className="iphone__bottom-line cursor-pointer"></div>
						:
						<Link className="iphone__bottom-line cursor-pointer" to={ urlTo }></Link>
				}
			</div>
		</>
	)
}

export default IphoneLayout;