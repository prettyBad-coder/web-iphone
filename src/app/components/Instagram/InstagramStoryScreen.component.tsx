import { useNavigate, useParams } from "react-router-dom";
import stories from "app/data/intagram-stories.json";
import { InstagramStoryType } from "app/types";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InstagramStoryScreen = () => {

	const { storyId = 0 } = useParams();

	const story = stories.find(story => story.id === +storyId) ?? null;

	const {
		name,
		images,
		backgroundImageURL,
	} = story as unknown as InstagramStoryType;

	const navigate = useNavigate();

	return (
		<>
			{
				story !== undefined
					&&
					<div className="instagram-story-screen">
                        <div
                            className="instagram-story-screen__content"
                            style={ { backgroundImage: `url(${ images[ 0 ] })` } }
                        >
                            <div className="instagram-story-screen__header">
                                <div className="instagram-story-screen__time-line"></div>
                                <div className="instagram-story-screen__header-body">
                                    <div className="instagram-story-screen__header-user-data">
                                        <div
											className="instagram-story-screen__user-image"
											style={ { backgroundImage: `url(${ backgroundImageURL })` } }
										></div>
                                        <div className="instagram-story-screen__user-name">
											{  name }
                                        </div>
                                    </div>
                                    <FontAwesomeIcon
                                        icon={ faXmark }
                                        color="white"
										onClick={ () => navigate(-1) }
										className="cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
					</div>
			}
		</>
	)
}

export default InstagramStoryScreen;