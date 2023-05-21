import React from 'react';
import { Link }               from 'react-router-dom';

/* CSS */
import '../css/Home.css';
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

function Cards({ title, color, background, list }) {
    return (
        <>
        <div
          class="cards-frame"
          style={{ color: color, background: background }}>
            <div class="cards-title">{title}</div>
            <div className='cards'>
                <CardGallery list={list}/>
            </div>
        </div>
        </>
    );
}

export default Cards;
