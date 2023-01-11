import { useParams } from "react-router-dom";
import users from "app/data/instagram-users.json";

const InstagramProfile = () => {

	const { userId = 0 } = useParams();

	const currentUser = users.find(user => +userId === user.id) ?? null;

	return (
		<div>
			{
				currentUser !== null
					&&
					<div className="instagram-profile">
						{ currentUser.userName }
					</div>
			}
		</div>
	)
}

export default InstagramProfile;