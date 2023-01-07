import Iphone from "app/components/Iphone.component";
import { Route, Routes } from "react-router-dom";
import LockedScreen from "app/components/LockedScreen.component";
import LockedScreenPassword from "app/components/LockedScreen/LockedScreenPassword.component";

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
			{/*<Route element={ <Iphone urlTo={ "/home" }/> }>*/}
			<Route element={ <Iphone urlTo={ "/" }/> }>
				<Route path="/home" element={ <div style={{ color: "white" }}>HOME</div> }/>
				<Route path="*" element={ <div>404</div> }/>
			</Route>
		</Routes>
	);
}

export default App;
