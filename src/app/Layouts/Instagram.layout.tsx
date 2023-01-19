import InstagramHeader from "app/components/Instagram/Layout/InstagramHeader.component";
import InstagramFooter from "app/components/Instagram/Layout/InstagramFooter.component";
import "swiper/scss";
import { Outlet } from "react-router-dom";

const InstagramLayout = () =>
	<div className="instagram application">
		<div>
			<InstagramHeader/>
		</div>
		<div className="instagram__page-wrapper">
			<Outlet/>
		</div>
		<InstagramFooter/>
	</div>

export default InstagramLayout;