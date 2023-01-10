import Iphone from "app/Layouts/Iphone.layout";
import { Route, Routes } from "react-router-dom";
import LockedScreen from "app/components/LockedScreen/LockedScreen.component";
import LockedScreenPassword from "app/components/LockedScreen/LockedScreenPassword.component";
import HomeScreen from "app/components/HomeScreen/HomeScreen.component";
import Instagram from "app/Layouts/Instagram.layout";
import InstagramPosts from "app/components/Instagram/InstagramPosts.component";
import InstagramReels from "app/components/Instagram/InstagramReels.component";
import InstagramShop from "app/components/Instagram/InstagramShop.component";
import InstagramProfile from "app/components/Instagram/InstagramProfile.component";
import InstagramSearch from "app/components/Instagram/InstagramSearch.component";

function App() {
	return (
		<Routes>
			{/* Locked screen */}
			<Route element={ <Iphone isLockedScreen urlTo="/password"/> }>
				<Route path="/" element={ <LockedScreen/> }/>
			</Route>
			<Route element={ <Iphone isLockedScreen urlTo="/password"/> }>
				<Route path="/password" element={ <LockedScreenPassword/> }/>
			</Route>

			{/* Home screen */}
			<Route element={ <Iphone urlTo={ "/home" }/> }>
				<Route path="/home" element={ <HomeScreen/> }/>
				<Route path="/instagram" element={ <Instagram/> }>
					<Route index element={ <InstagramPosts/> }/>
					<Route path="search" element={ <InstagramSearch/> }/>
					<Route path="reels" element={ <InstagramReels/> }/>
					<Route path="shop" element={ <InstagramShop/> }/>
					<Route path="profile" element={ <InstagramProfile/> }/>
				</Route>
				<Route path="*" element={ <div>404</div> }/>
			</Route>
		</Routes>
	);
}

export default App;
