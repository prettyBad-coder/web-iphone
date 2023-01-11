import { Link } from "react-router-dom";
import { AppType } from "app/types/util.types";

type Props = {
	app: AppType
}

const HomeScreenApplication = (props: Props) => {

	const {
		app: {
			name,
			urlTo,
			backgroundImageURL,
		}
	} = props;

	return (
		<div className="home-screen__application">
			<Link to={ urlTo }>
				<div className="home-screen__application-image" style={ { backgroundImage: `url(${ backgroundImageURL })` } }></div>
			</Link>
			<div className="home-screen__application-name">
				{ name }
			</div>
		</div>
	)
}

export default HomeScreenApplication;