export const DefaultDocument = {
    color                     : "#ffffff",
    overlay                   : "#00000050",
}

export const TripDocument = {
    /* Home page */
    home: {
        color                 : "#dbc7ae",
        overlay               : "#5a422a33",
    },
    /* Trips */
    amsterdam: {
        color                 : "#f9ceff",
    },
    auvergne: {
        color                 : "#dbc7ae",
    },
    berlin: {
        color                 : "#e1b885",
    },
    bretagne: {
        color                 : "#ccdbae",
    },
    bourges: {
        color                 : "#dbb9ae",
    },
    bourgogne: {
        color                 : "#abe0ff",
    },
    corse: {
        color                 : "#aed2db",
    },
    crete: {
        color                 : "#a0e7e1",
    },
    etretat: {
        color                 : "#d4ffe8",
    },
    gacilly: {
        color                 : "#d8dbae",
    },
    honfleur: {
        color                 : "#a9d9e5",
    },
    malta: {
        color                 : "#ffbc9d",
    },
    perche: {
        color                 : "#bdcbff",
    },
    trouville: {
        color                 : "#ffad9a",
    }
}

function getElem (elem, class_name) {
    const trip = TripDocument[class_name];
    if (trip) {
        const res = trip[elem];
        if (res) return res;
    }
    return DefaultDocument[elem];
}

export function getTitleColor (class_name) {
    return getElem("color", class_name);
}

export function getOverlayColor (class_name) {
    return getElem("overlay", class_name);
}

