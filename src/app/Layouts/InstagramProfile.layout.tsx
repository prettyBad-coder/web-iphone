import { Outlet, useParams } from "react-router-dom";
import users from "app/data/instagram-users.json";
import InstagramProfileUserDataItem from "app/components/Instagram/Profile/InstagramProfileUserDataItem.component";
import InstagramProfileTab from "app/components/Instagram/Profile/InstagramProfileTab.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTableCells, faChevronLeft, faBell, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";

const InstagramProfileLayout = () => {

	const { userId = 0 } = useParams();

	const currentUser = users.find(user => +userId === user.id) ?? null;

	return (
		<>
			{
				currentUser !== null
					&&
					<div className="instagram-profile-layout">
						<div className="instagram-profile-layout__page-header">
                            <FontAwesomeIcon icon={ faChevronLeft } color="white" className="cursor-pointer"/>
							<div className="instagram-profile-layout__user-name">
								{ currentUser.userName }
							</div>
							<div className="instagram-profile-layout__page-header-right">
                                <FontAwesomeIcon icon={ faBell } color="white"/>
                                <FontAwesomeIcon icon={ faEllipsis } color="white"/>
							</div>
						</div>
						<div className="instagram-profile-layout__profile-header">
							<div className="instagram-profile-layout__header-top">
								<div className="instagram-profile-layout__profile-picture-wrapper">
                                    <div
                                        className="instagram-profile-layout__profile-picture"
                                        style={ { backgroundImage: `url(${ currentUser.profilePicture })` } }
                                    ></div>
								</div>
								<div className="instagram-profile-layout__user-data">
									<InstagramProfileUserDataItem value={ currentUser.postsIds.length } title="Posts"/>
									<InstagramProfileUserDataItem value={ currentUser.followers } title="Followers"/>
									<InstagramProfileUserDataItem value={ currentUser.following } title="Following"/>
								</div>
							</div>
							<div className="instagram-profile-layout__profile-description">
								{ currentUser.description }
							</div>
							<div className="instagram-profile-layout__buttons">
								<div className="instagram-profile-layout__button">
									Follow
								</div>
							</div>
						</div>
						<div className="instagram-profile-layout__content">
							<div className="instagram-profile-layout__tabs">
								<InstagramProfileTab
									isActive={ true }
									urlTo={ `/instagram/profile/${ userId }` }
									icon={ <FontAwesomeIcon icon={ faTableCells } color="white"/> }
								/>
								<InstagramProfileTab
									isActive={ false }
									urlTo={ `/instagram/profile/${ userId }/reels` }
									icon={ <FontAwesomeIcon icon={ faFilm } color="white"/> }
								/>
								<InstagramProfileTab
									isActive={ true }
									urlTo={ `/instagram/profile/${ userId }/mentions` }
									icon={ <FontAwesomeIcon icon={ faIdBadge } color="white"/> }
								/>
							</div>
							<Outlet/>
						</div>
					</div>
			}
		</>
	);
};

export default InstagramProfileLayout;