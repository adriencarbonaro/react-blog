import React                 from 'react';
import { Route, Routes }     from 'react-router-dom'
import { Paths }             from './assets/Paths';

import Navbar                from './components/Navbar';
import Footer                from './components/Footer'
import Home                  from './components/pages/Home'

/* Trips */
import Amsterdam             from './components/pages/trips/Amsterdam'
import Auvergne              from './components/pages/trips/Auvergne'
import Berlin                from './components/pages/trips/Berlin'
import Bourges               from './components/pages/trips/Bourges'
import Bourgogne             from './components/pages/trips/Bourgogne'
import Bretagne              from './components/pages/trips/Bretagne'
import Crete                 from './components/pages/trips/Crete'
import Corse                 from './components/pages/trips/Corse'
import Etretat               from './components/pages/trips/Etretat'
import Gacilly               from './components/pages/trips/Gacilly';
import Honfleur              from './components/pages/trips/Honfleur';
import Malta                 from './components/pages/trips/Malta';
import Perche                from './components/pages/trips/Perche'
import Trouville             from './components/pages/trips/Trouville'

/* CSS */
import './css/App.css';

function App ({ analytics }) {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path={Paths.auvergne}    element={<Auvergne analytics={analytics} />} />
            <Route path={Paths.amsterdam}   element={<Amsterdam analytics={analytics}/>} />
            <Route path={Paths.berlin}      element={<Berlin analytics={analytics}/>} />
            <Route path={Paths.bourges}     element={<Bourges analytics={analytics}/>} />
            <Route path={Paths.bourgogne}   element={<Bourgogne analytics={analytics}/>} />
            <Route path={Paths.bretagne}    element={<Bretagne analytics={analytics}/>} />
            <Route path={Paths.crete}       element={<Crete analytics={analytics}/>} />
            <Route path={Paths.corse}       element={<Corse analytics={analytics}/>} />
            <Route path={Paths.etretat}     element={<Etretat analytics={analytics}/>} />
            <Route path={Paths.gacilly}     element={<Gacilly analytics={analytics}/>} />
            <Route path={Paths.honfleur}    element={<Honfleur analytics={analytics}/>} />
            <Route path={Paths.mans}        element={<Gacilly analytics={analytics}/>} />
            <Route path={Paths.malta}       element={<Malta analytics={analytics}/>} />
            <Route path={Paths.perche}      element={<Perche analytics={analytics}/>} />
            <Route path={Paths.trouville}   element={<Trouville analytics={analytics}/>} />
            <Route path={Paths.home}        element={<Home analytics={analytics}/>} />
        </Routes>
        <Footer />
        </>
    );
}

export default App;
