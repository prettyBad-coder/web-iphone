
type Props = {
	isActive: boolean
}

const InstagramStoryScreenLine = ({ isActive }: Props) => {
	const baseCssClass = "instagram-story-screen__time-line";
	return isActive ? <div className={ `${ baseCssClass } ${ baseCssClass }--active` }></div> : <div className={ baseCssClass }></div>;
}

export default InstagramStoryScreenLine;