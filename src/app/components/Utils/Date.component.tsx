import { useEffect, useState } from "react";
import moment from "moment";

type Props = {
	isTime?: boolean
}

const Date = (props: Props) => {

	const {
		isTime = false,
	} = props;

	const momentFormat = isTime ? "H:mm" : "dddd, D MMMM";

	const getDate = () => moment().format(momentFormat);

	const [ clockState, setClockState ] = useState<string>(getDate());


	useEffect(() => {
		setInterval(() => {
			const time = getDate();
			setClockState(time);
		}, 1000);
	}, [])

	return <div>{ clockState }</div>
}

export default Date;