type Props = {
	number: number
	onPasswordChange: (number: number) => void
}

const LockedScreenPasswordNumberButton = (props: Props) => {

	const {
		number,
		onPasswordChange
	} = props;
	return (
		<div
			className="locked-screen-password__number-button cursor-pointer"
			onClick={ () => onPasswordChange(number) }
		>
			{ number }
		</div>
	)
}

export default LockedScreenPasswordNumberButton;