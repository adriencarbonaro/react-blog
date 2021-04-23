/* CSS */
import '../css/Pane.css'
import '../css/Text.css'

export const Pane = (props) => {
	return (
		<div className="pane_container">
			<div className={`pane_item ${props.type}`}>{props.text}</div>
		</div>
	)
}