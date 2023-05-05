/* CSS */
import '../css/Text.css'

export const TitleBloc = (props) => {
	return (
		<div className="title_bloc">
			<div className="title">{props.title}</div>
			<div className={"subtitle subtitle-" + props.accent}>{props.subtitle}</div>
		</div>
	)
}
