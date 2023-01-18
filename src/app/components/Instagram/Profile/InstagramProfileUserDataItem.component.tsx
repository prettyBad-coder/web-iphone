type Props = {
	value: number
	title: string
}

const InstagramProfileUserDataItem = ({ value, title }: Props) =>
	<div className="instagram-profile-layout__user-data-item">
		<div className="instagram-profile-layout__user-data-value">
			{ value }
		</div>
		<div className="instagram-profile-layout__user-data-title">
			{ title }
		</div>
	</div>

export default InstagramProfileUserDataItem;