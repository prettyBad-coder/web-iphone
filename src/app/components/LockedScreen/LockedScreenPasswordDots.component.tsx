import classNames from "classnames";

type Props = {
	password: number[]
	passwordError: boolean
}

const LockedScreenPasswordDots = (props: Props) => {

	const {
		password,
		passwordError,
	} = props

	const dotClassName = (dotIndex: number) =>
		classNames(
			"locked-screen-password__single-dot",
			{ "locked-screen-password__single-dot--active": (password.length > dotIndex) }
		)


	return (
		<div className={ classNames("locked-screen-password__passcode-dots", { "locked-screen-password__passcode-dots--shake": passwordError }) }>
			<div className={ dotClassName(0) }></div>
			<div className={ dotClassName(1) }></div>
			<div className={ dotClassName(2) }></div>
			<div className={ dotClassName(3) }></div>
		</div>
	)
}

export default LockedScreenPasswordDots;