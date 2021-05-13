/* CSS */
import '../css/Photos.css'

export const PhotoSingle = (props) => {
	return (
		<div className="photo_single">
			<img
			  className="photo_single_img"
			  src={props.src}
			  alt="alt"
			/>
		</div>
	)
}

export const PhotoDuo = (props) => {
	return (
		<div className="photo-duo">
			<img
				className="photo-duo-img"
				src={props.src_1}
				alt="alt"
			/>
			<img
				className="photo-duo-img"
				src={props.src_2}
				alt="alt"
			/>
		</div>
	)
}

export const PhotoGallery = (props) => {
	const elem = (src) => {
		if (src !== "") {
			return (
				<>
					<li className="photo_gallery_item">
						<img
							className="photo_gallery_img"
							src={src}
							alt="alt1"
						/>
					</li>
				</>
			)
		}
	};

	return (
		<div className="photo_gallery">
			<ul className="photo_gallery_items">
				{elem(props.src_1)}
				{elem(props.src_2)}
				{elem(props.src_3)}
			</ul>
		</div>
	)
}

export const PhotoDoubleGallery = (props) => {
	return (
		<div className="photo_gallery">
			<ul className="photo_gallery_items">
				<li className="photo_gallery_item">
					<img
					  className="photo_gallery_img"
					  src={props.src_1}
					  alt="alt1"
					/>
				</li>
				<li className="photo_gallery_item">
					<img
					  className="photo_gallery_img"
					  src={props.src_2}
					  alt="alt"
					/>
				</li>
				<li className="photo_gallery_item">
					<img
					  className="photo_gallery_img"
					  src={props.src_3}
					  alt="alt"
					/>
				</li>
			</ul>
			<ul className="photo_gallery_items">
				<li className="photo_gallery_item">
					<img
					  className="photo_gallery_img"
					  src={props.src_4}
					  alt="alt1"
					/>
				</li>
				<li className="photo_gallery_item">
					<img
					  className="photo_gallery_img"
					  src={props.src_5}
					  alt="alt"
					/>
				</li>
				<li className="photo_gallery_item">
					<img
					  className="photo_gallery_img"
					  src={props.src_6}
					  alt="alt"
					/>
				</li>
			</ul>
		</div>
	)
}

export const PhotoTSide = (props) => {
	const t_side = (src_side) => {
		return (
			<>
				<img
					className="photo-gallery-item-side"
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
						className="photo-gallery-item-col"
						src={src_col_1}
						alt="alt"
					/>
					<img
						className="photo-gallery-item-col"
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
		<div className="photo-gallery-t-side">
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
						className="photo-gallery-item-row"
						src={src_row_1}
						alt="alt"
					/>
					<img
						className="photo-gallery-item-row"
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
		<div className="photo-gallery-t">
			{elem}
		</div>
	)
}
