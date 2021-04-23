/* CSS */
import '../css/Story.css'

export const Story = (props) => {
	return (
		<div className="story_bloc text">
			{props.text}
		</div>
	)
}
