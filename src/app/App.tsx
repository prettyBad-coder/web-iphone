import Iphone from "app/components/Iphone.component";
import { Route, Routes } from "react-router-dom";
import LockedScreen from "app/components/LockedScreen.component";

function App() {
	return (
		<Routes>
			<Route element={ <Iphone isLockedScreen urlTo="/home"/> }>
				<Route path="/" element={ <LockedScreen/> }/>
			</Route>
			<Route element={ <Iphone urlTo={ "/" }/> }>
				<Route path="/home" element={ <div style={{ color: "white" }}>HOME</div> }/>
				<Route path="*" element={ <div>404</div> }/>
			</Route>
		</Routes>
	);
}

export default App;
