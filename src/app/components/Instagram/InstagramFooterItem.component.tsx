import { PropsWithChildren } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { instagramTabIndexUrlDictionary } from "app/dictionaries";
import { Link } from "react-router-dom";
import { InstagramTab } from "app/enums";

type Props = {
	index: InstagramTab
	onClick: () => void
	activeTab: InstagramTab
}

const InstagramFooterItem = (props: PropsWithChildren<Props>) => {

	const {
		index,
		onClick,
		activeTab,
		children,
	} = props;

	return (
		<Link
			to={ instagramTabIndexUrlDictionary[ index ] }
			className={
				classNames(
					"instagram-footer__icon cursor-pointer",
					{ "instagram-footer__icon--active": activeTab === index }
				)
			}
			onClick={ onClick }
		>
			{ children }
		</Link>
	)
}

export default InstagramFooterItem;