import InstagramHeader from "app/components/Instagram/InstagramHeader.component";
import InstagramFooter from "app/components/Instagram/InstagramFooter.component";
import "swiper/scss";
import { Outlet } from "react-router-dom";

const Instagram = () =>
	<div className="instagram">
		<div>
			<InstagramHeader/>
		</div>
		<div className="instagram__page-wrapper">
			<Outlet/>
		</div>
		<InstagramFooter/>
	</div>

export default Instagram;