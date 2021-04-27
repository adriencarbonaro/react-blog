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

export const PhotoGallery = (props) => {
	const elem = (src) => {
		if (src != "") {
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