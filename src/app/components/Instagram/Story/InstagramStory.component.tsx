import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { InstagramStoryType } from "app/types";
import InstagramStoryWrapper from "app/components/Instagram/Story/InstagramStoryWrapper.component";

type Props = {
	story: InstagramStoryType
};

const InstagramStory = (props: Props) => {

	const {
		story: {
			id,
			backgroundImageURL,
			name,
			plusIcon = false,
			images,
		}
	} = props;

	const isActive = images.length !== 0;

	return (
		<InstagramStoryWrapper
			isActive={ isActive }
			storyId={ id }
			className={ classNames("instagram-story", { "cursor-pointer": isActive || plusIcon }) }
		>
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
		</InstagramStoryWrapper>
	)
}

export default InstagramStory;