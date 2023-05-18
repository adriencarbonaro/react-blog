import React                 from 'react';
import ComponentScrollTop    from '../ComponentScrollTop';
import Cards                 from '../Cards';
import BannerHome            from '../BannerHome';

/* CSS */
import '../../css/App.css';

export default class Home extends ComponentScrollTop {
    render () {
        return (
        <>
            <BannerHome title="Auvergne" video="banner_auvergne_3" />
            <Cards />
        </>
        );
    }
}
