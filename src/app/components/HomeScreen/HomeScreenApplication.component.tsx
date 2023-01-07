import { Link } from "react-router-dom";

type Props = {
	name: string
	urlTo: string
	backgroundImageURL: string
}

const HomeScreenApplication = (props: Props) => {

	const {
		name,
		urlTo,
		backgroundImageURL,
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