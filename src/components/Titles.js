/* CSS */
import '../css/Text.css'

export const Title = (props) => {
	return (
		<div className="title">{props.text}</div>
	)
}

export const Subtitle = (props) => {
	return (
		<div className={"subtitle subtitle-" + props.accent}>{props.text}</div>
	)
}
