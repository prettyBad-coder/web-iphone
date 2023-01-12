import IphoneLayout from "app/Layouts/Iphone.layout";
import { Route, Routes } from "react-router-dom";
import LockedScreen from "app/components/LockedScreen/LockedScreen.component";
import LockedScreenPassword from "app/components/LockedScreen/LockedScreenPassword.component";
import HomeScreen from "app/components/HomeScreen/HomeScreen.component";
import InstagramLayout from "app/Layouts/Instagram.layout";
import InstagramPosts from "app/components/Instagram/Post/InstagramPosts.component";
import InstagramReels from "app/components/Instagram/Pages/InstagramReels.component";
import InstagramShop from "app/components/Instagram/Pages/InstagramShop.component";
import InstagramMyProfilePage from "app/components/Instagram/Pages/InstagramMyProfilePage.component";
import InstagramSearch from "app/components/Instagram/Pages/InstagramSearch.component";
import InstagramStoryScreen from "app/components/Instagram/Story/InstagramStoryScreen.component";
import SettingsLayout from "app/Layouts/Settings.layout";
import InstagramProfile from "app/components/Instagram/Profile/InstagramProfile.component";
import InstagramSingleStoryScreen from "app/components/Instagram/Story/InstagramSingleStoryScreen.component";

function App() {
	return (
		<Routes>
			{/* Locked screen */}
			<Route element={ <IphoneLayout isLockedScreen urlTo="/password"/> }>
				<Route path="/" element={ <LockedScreen/> }/>
			</Route>
			<Route element={ <IphoneLayout isLockedScreen urlTo="/password"/> }>
				<Route path="/password" element={ <LockedScreenPassword/> }/>
			</Route>

			{/* Home screen */}
			<Route element={ <IphoneLayout urlTo={ "/home" }/> }>
				<Route path="/home" element={ <HomeScreen/> }/>
				<Route path="/instagram">
					<Route element={ <InstagramLayout/> }>
						<Route index element={ <InstagramPosts/> }/>
						<Route path="search" element={ <InstagramSearch/> }/>
						<Route path="reels" element={ <InstagramReels/> }/>
						<Route path="shop" element={ <InstagramShop/> }/>
						<Route path="profile" element={ <InstagramMyProfilePage/> }/>
						<Route path="profile/:userId" element={ <InstagramProfile/> }/>
					</Route>
					<Route path="story/:storyId/:userStoryIndex" element={ <InstagramStoryScreen/> }/>
					<Route path="single-story/:storyId/:userStoryIndex" element={ <InstagramSingleStoryScreen/> }/>
				</Route>
				<Route path="settings" element={ <SettingsLayout/> }/>
				<Route path="*" element={ <div>404</div> }/>
			</Route>
		</Routes>
	);
}

export default App;
