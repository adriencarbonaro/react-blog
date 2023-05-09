/* CSS */
import '../css/Gallery.css'
import '../css/Photos.css'

export const PhotoSingle = (props) => {
	return (
		<div className="photos photo-single">
			<img
			  className="photo photo-single-img"
			  src={props.src}
			  alt="alt"
			/>
		</div>
	)
}

export const PhotoDuo = (props) => {
	return (
		<div className="photos photo-duo">
			<img
				className="photo photo-duo-img"
				src={props.src_1}
				alt="alt"
			/>
			<img
				className="photo photo-duo-img"
				src={props.src_2}
				alt="alt"
			/>
		</div>
	)
}

export const PhotoGallery = (props) => {
	const createLi = (list) => {
		const elem = [];
		for (let img of list) {
			elem.push(
				<li className="gallery-item">
					<img className="photo photo-gallery-img" src={img} alt='alt' />
				</li>
			)
		}
		return (
			<>
			{elem}
			</>
		)
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
		return (
			<>
			{uls}
			</>
		)
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

	return (
		<>
		{createDiv(props.list)}
		</>
	)
}

export const PhotoTSide = (props) => {
	const t_side = (src_side) => {
		return (
			<>
				<img
					className="photo photo-gallery-item-side"
					src={src_side}
					alt="alt"
				/>
			</>
		)
	}
	const t_col = (src_col_1, src_col_2) => {
		return (
			<>
				<div className="photo-gallery-items-col">
					<img
						className="photo photo-gallery-item-col"
						src={src_col_1}
						alt="alt"
					/>
					<img
						className="photo photo-gallery-item-col"
						src={src_col_2}
						alt="alt"
					/>
				</div>
			</>
		)
	}
	if (props.inverted) {
		var elem = (
			<>
				{t_side(props.src_side)}
				{t_col(props.src_col_1, props.src_col_2)}
			</>
		)
	} else {
		elem = (
			<>
				{t_col(props.src_col_1, props.src_col_2)}
				{t_side(props.src_side)}
			</>
		)
	}
	return (
		<div className="photos photo-gallery-t-side">
			{elem}
		</div>
	)
}

export const PhotoT = (props) => {
	const t_large = (src_large) => {
		return (
			<>
				<img
					className="photo-gallery-item-top"
					src={src_large}
					alt="alt"
				/>
			</>
		)
	}
	const t_row = (src_row_1, src_row_2) => {
		return (
			<>
				<div className="photo-gallery-items-row">
					<img
						className="photo photo-gallery-item-row"
						src={src_row_1}
						alt="alt"
					/>
					<img
						className="photo photo-gallery-item-row"
						src={src_row_2}
						alt="alt"
					/>
				</div>
			</>
		)
	}
	if (props.inverted) {
		var elem = (
			<>
				{t_row(props.src_row_1, props.src_row_2)}
				{t_large(props.src_large)}
			</>
		)
	} else {
		elem = (
			<>
				{t_large(props.src_large)}
				{t_row(props.src_row_1, props.src_row_2)}
			</>
		)
	}
	return (
		<div className="photos photo-gallery-t">
			{elem}
		</div>
	)
}
