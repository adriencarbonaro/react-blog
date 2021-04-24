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
		</div>
	)
}
