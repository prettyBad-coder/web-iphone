import LockedScreenPasswordNumberButton from "app/components/LockedScreen/LockedScreenPasswordNumberButton.component";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import LockedScreenPasswordDots from "app/components/LockedScreen/LockedScreenPasswordDots.component";
import classNames from "classnames";

const LockedScreenPassword = () => {

	const hardPassword = [ 1, 1, 1, 1 ];

	const [ password, setPassword ] = useState<number[]>([]);

	const [ passwordError, setPasswordError ] = useState(false);

	const navigate = useNavigate();

	const onPasswordChange = (number: number) => {
		setPassword(prevState => [ ...prevState, number ]);
	}

	const arePasswordsEqual = (): boolean => {
		const hardPasswordString = hardPassword.join("");
		const passwordString = password.join("");
		return hardPasswordString === passwordString;
	}

	useEffect(() => {
		if (password.length === 4) {
			if (arePasswordsEqual()) {
				navigate("/home");
			} else {
				setPassword([]);
				setPasswordError(true);
			}
		} else if (password.length === 3) {
			setPasswordError(false);
		}
	}, [password]);

	return (
		<div className="locked-screen-password">
			<div className="locked-screen-password__heading">
				<FontAwesomeIcon
					className={ classNames({ "locked-screen-password__padlock-shake": passwordError }) }
					icon={ faLock }
					color="white"
					size="xs"
				/>
				<div className="locked-screen-password__heading-text">
					Enter Passcode
				</div>
				<LockedScreenPasswordDots password={ password } passwordError={ passwordError }/>
			</div>
			<div className="locked-screen-password__buttons-wrapper">
				<LockedScreenPasswordNumberButton number={ 0 } onPasswordChange={ onPasswordChange }/>
				<LockedScreenPasswordNumberButton number={ 1 } onPasswordChange={ onPasswordChange }/>
				<LockedScreenPasswordNumberButton number={ 2 } onPasswordChange={ onPasswordChange }/>
				<LockedScreenPasswordNumberButton number={ 3 } onPasswordChange={ onPasswordChange }/>
				<LockedScreenPasswordNumberButton number={ 4 } onPasswordChange={ onPasswordChange }/>
				<LockedScreenPasswordNumberButton number={ 5 } onPasswordChange={ onPasswordChange }/>
				<LockedScreenPasswordNumberButton number={ 6 } onPasswordChange={ onPasswordChange }/>
				<LockedScreenPasswordNumberButton number={ 7 } onPasswordChange={ onPasswordChange }/>
				<LockedScreenPasswordNumberButton number={ 8 } onPasswordChange={ onPasswordChange }/>
				<LockedScreenPasswordNumberButton number={ 9 } onPasswordChange={ onPasswordChange }/>
			</div>
			<div className="locked-screen-password__footer">
				<Link
					to="/emergency"
					className="locked-screen-password__footer-item"
				>
					Emergency
				</Link>
				<Link
					to="/"
					className="locked-screen-password__footer-item"
				>
					Cancel
				</Link>
			</div>
		</div>
	)
}

export default LockedScreenPassword;