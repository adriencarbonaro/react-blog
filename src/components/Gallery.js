/* CSS */
import '../css/Gallery.css'

export const Gallery = (props) => {
	const createLi = (list) => {
		const arr = [];
		for (const elem of list) {
			arr.push(
				<li className="gallery-item">
					{elem}
				</li>
			)
		}
		return (<>{arr}</>);
	}

	const createUl = (rows) => {
		const uls = [];

		const newUl = (list) => {
			return (
				<>
				<ul className="gallery-items">
					{createLi(list)}
				</ul>
				</>
			)
		}
		for (const row of rows) {
			uls.push(newUl(row));
		}
		return (<>{uls}</>);
	}

	const createDiv = (rows) => {
		return (
			<>
			<div className="gallery">
				{createUl(rows)}
			</div>
			</>
		)
	}

	return (<>{createDiv(props.list)}</>);
}

