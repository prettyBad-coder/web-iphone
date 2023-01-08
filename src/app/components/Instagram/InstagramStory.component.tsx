import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type Props = {
	backgroundImageURL: string
	name: string
	plusIcon?: boolean
	isActive?: boolean
};

const InstagramStory = (props: Props) => {

	const {
		backgroundImageURL,
		name,
		plusIcon = false,
		isActive = true,
	} = props;

	return (
		<div className="instagram-story cursor-pointer">
			<div className={ classNames("instagram-story__image-wrapper", { "instagram-story__image-wrapper--active": isActive }) }>
				<div
					className="instagram-story__image"
					style={ { backgroundImage: `url(${ backgroundImageURL })` } }
				>
					{
						plusIcon
						&&
                        <div className="instagram-story__image-plus-icon">
                            <FontAwesomeIcon
                                icon={ faPlus }
                                color="white"
                                size="2xs"
                            />
                        </div>
					}
				</div>
			</div>
			<div className="instagram-story__name">
				{ name }
			</div>
		</div>
	)
}

export default InstagramStory;