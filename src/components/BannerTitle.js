import React                  from 'react';
import { Banner }             from "./Banner";

/* CSS */
import '../css/Banner.css';
import '../css/BannerTitle.css';

export function BannerTitle(props) {
    return (
        <Banner
          colorKey={props.class}
          title={props.title}
          back={
            <>
                <img
                  className="banner-elem banner-title-img"
                  alt="banner_title"
                  src={`https://nid-de-poule.s3.eu-west-3.amazonaws.com/photos/cards/img-${props.class}.jpg`}
                />
            </>
          }
        />
    );
}
