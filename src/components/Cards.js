import React from 'react';
import { Link }               from 'react-router-dom';

/* CSS */
import '../css/Cards.css';

export const CardGallery = ({ list }) => {
	const createLi = (list) => {
		const elem = [];
		for (let { name, title } of list) {
			elem.push(
				<Link to={name} className="trip-card-gallery-item">
					<div className="trip-card-elem trip-card-title">{title}</div>
					<div className="trip-card-elem trip-card-overlay"></div>
					<img className="trip-card-elem trip-card-img" alt="Travel" src={`https://nid-de-poule.s3.eu-west-3.amazonaws.com/photos/cards/img-${name}.jpg`}/>
				</Link>
			)
		}
		return (<>{elem}</>)
	}

	const createRows = (rows) => {
		const uls = [];

		const newUl = (list) => {
			return (
				<>
				<ul className="trip-card-gallery-row">
					{createLi(list)}
				</ul>
				</>
			)
		}
		for (const row of rows) {
			uls.push(newUl(row));
		}
		return (<>{uls}</>)
	}

	const createGallery = (rows) => {
		return (
			<>
			<div className="trip-card-gallery">
				{createRows(rows)}
			</div>
			</>
		)
	}

	return (<>{createGallery(list)}</>)
}

function Cards() {
	return (
		<div className='cards'>
			<CardGallery list={[[
			  { name: "auvergne", title: "Auvergne" },
			  { name: "bourgogne", title: "Bourgogne" },
			], [
			  { name: "bourges", title: "Bourges" },
			  { name: "bretagne", title: "Bretagne" },
			], [
			  { name: "corse", title: "Corse" },
			  { name: "etretat", title: "Etretat" },
			], [
			  { name: "gacilly", title: "Gacilly" },
			  { name: "honfleur", title: "Honfleur" },
			], [
			  { name: "perche", title: "Perche" },
			  { name: "trouville", title: "Trouville" },
			], [
			  { name: "amsterdam", title: "Amsterdam" },
			  { name: "berlin", title: "Berlin" },
			], [
			  { name: "crete", title: "Greece" },
			  { name: "malta", title: "Malte" },
			]]}/>
		</div>
	);
}

export default Cards;
