/* CSS */
import '../css/Gallery.css'
import '../css/LocationCard.css'
import '../css/Photos.css'

export const Gallery = (props) => {
    const createLi = (list) => {
        const elem = [];
        for (let item of list) {
            elem.push(
                <a className="location-card" target="_blank" rel="noreferrer" href={item.link}>
                    <div className="location-card-elem location-card-overlay"></div>
                    <div className="location-card-elem location-card-desc">{item.text}</div>
                    <img className="location-card-elem location-card-img" src={item.img} alt='alt' />
                </a>
            )
        }
        return <>{elem}</>;
    }

    const createUl = (rows) => {
        const uls = [];

        const newUl = (list) => {
            return (
              <>
              <ul className="location-card-items">
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
          <div className="location-card-gallery">
              {createUl(rows)}
          </div>
          </>
        )
    }

    return (<>{createDiv(props.list)}</>);
}

export const LocationCardGallery = (props) => {
    return (<Gallery list={props.list} />);
}
