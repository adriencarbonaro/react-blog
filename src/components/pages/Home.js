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
            <Cards
              title="France"
              background="#ffffff"
              color="#61829b"
              list={[[
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
              ]]}
            />
            <Cards
              title="Monde"
              background="#f5f9f5"
              color="#5f765f"
              list={[[
                ], [
                  { name: "amsterdam", title: "Amsterdam" },
                  { name: "berlin", title: "Berlin" },
                ], [
                  { name: "crete", title: "Greece" },
                  { name: "malta", title: "Malte" },
              ]]}
            />
        </>
        );
    }
}
