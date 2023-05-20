import React                  from 'react';
import {
    getTitleColor,
    getOverlayColor,
}                             from "../Colors";

export function Banner(props) {
    return (
        <div className={"banner"}>
            <div className="banner-elem banner-content">
                <div
                  style={{ color: getTitleColor(props.tripKey) }}
                  className="banner-elem banner-title">
                    {props.title}
                </div>
                { props.extra }
            </div>
            <div
              style={{ background: getOverlayColor(props.tripKey) }}
              className="banner-elem banner-overlay"></div>
            { props.back }
        </div>
    );
}
