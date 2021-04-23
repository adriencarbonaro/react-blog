/* CSS */
import '../css/Split.css'

export const Split = (props) => {
	return (
		<div className="split_screen">
			<div className="left_pane">
				{props.left}
			</div>
			<div className="right_pane">
				{props.right}
			</div>
		</div>
	)
}