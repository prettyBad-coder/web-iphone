import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faFilm, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InstagramFooterItem from "app/components/Instagram/Layout/InstagramFooterItem.component";
import { InstagramTab } from "app/enums";

const InstagramFooter = () => {

	const [ activeTab, setActiveTab ] = useState(InstagramTab.POSTS);

	return (
		<div className="instagram-footer">
			<InstagramFooterItem
				activeTab={ activeTab }
				onClick={ () => setActiveTab(InstagramTab.POSTS) }
				index={ InstagramTab.POSTS }
			>
				<FontAwesomeIcon icon={ faHouse } color="white"/>
			</InstagramFooterItem>
			<InstagramFooterItem
				activeTab={ activeTab }
				onClick={ () => setActiveTab(InstagramTab.SEARCH) }
				index={ InstagramTab.SEARCH }
			>
				<FontAwesomeIcon icon={ faMagnifyingGlass } color="white"/>
			</InstagramFooterItem>
			<InstagramFooterItem
				activeTab={ activeTab }
				onClick={ () => setActiveTab(InstagramTab.REELS) }
				index={ InstagramTab.REELS }
			>
				<FontAwesomeIcon icon={ faFilm } color="white"/>
			</InstagramFooterItem>
			<InstagramFooterItem
				activeTab={ activeTab }
				onClick={ () => setActiveTab(InstagramTab.SHOP) }
				index={ InstagramTab.SHOP }
			>
				<FontAwesomeIcon icon={ faBagShopping } color="white"/>
			</InstagramFooterItem>
			<InstagramFooterItem
				activeTab={ activeTab }
				onClick={ () => setActiveTab(InstagramTab.PROFILE) }
				index={ InstagramTab.PROFILE }
			>
				<div className="instagram-footer__profile-image"></div>
			</InstagramFooterItem>
		</div>
	)
}

export default InstagramFooter