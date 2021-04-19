/* CSS */
import '../css/Split.css'

export const Split = ({left, right}) => {
	return (
		<div className="split_screen">
			<div className="left_pane">{left}</div>
			<div className="right_pane">{right}</div>
		</div>
	)
}