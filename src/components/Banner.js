import React                  from 'react';
import {
    Colors,
    DefaultColors
}                             from "../Colors";

function getElemColor (elem, class_name) {
    const trip = Colors[class_name];
    if (trip) {
        const color = trip[elem];
        if (color) return color;
    }
    return DefaultColors[elem];
}

function getTitleColor (class_name) {
    return getElemColor("title", class_name);
}

function getOverlayColor (class_name) {
    return getElemColor("overlay", class_name);
}

export function Banner(props) {
    return (
        <div className={"banner"}>
            <div className="banner-elem banner-content">
                <div
                  style={{ color: getTitleColor(props.colorKey) }}
                  className="banner-elem banner-title">
                    {props.title}
                </div>
                { props.extra }
            </div>
            <div
              style={{ background: getOverlayColor(props.colorKey) }}
              className="banner-elem banner-overlay"></div>
            { props.back }
        </div>
    );
}
