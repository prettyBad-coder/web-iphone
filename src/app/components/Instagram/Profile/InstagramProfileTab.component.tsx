import classNames from "classnames";
import { Link } from "react-router-dom";

type Props = {
	urlTo: string
	icon: JSX.Element
	isActive: boolean
}

const InstagramProfileTab = ({ urlTo, icon, isActive }: Props) =>
	<Link to={ urlTo } className={ classNames("instagram-profile__tab", { "instagram-profile__tab--active": isActive }) }>
		{ icon }
	</Link>

export default InstagramProfileTab;