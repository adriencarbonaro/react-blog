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

function App ({ db, analytics }) {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path={Paths.auvergne}    element={<Auvergne db={db} analytics={analytics} />} />
            <Route path={Paths.amsterdam}   element={<Amsterdam db={db} analytics={analytics}/>} />
            <Route path={Paths.berlin}      element={<Berlin db={db} analytics={analytics}/>} />
            <Route path={Paths.bourges}     element={<Bourges db={db} analytics={analytics}/>} />
            <Route path={Paths.bourgogne}   element={<Bourgogne db={db} analytics={analytics}/>} />
            <Route path={Paths.bretagne}    element={<Bretagne db={db} analytics={analytics}/>} />
            <Route path={Paths.crete}       element={<Crete db={db} analytics={analytics}/>} />
            <Route path={Paths.corse}       element={<Corse db={db} analytics={analytics}/>} />
            <Route path={Paths.etretat}     element={<Etretat db={db} analytics={analytics}/>} />
            <Route path={Paths.gacilly}     element={<Gacilly db={db} analytics={analytics}/>} />
            <Route path={Paths.honfleur}    element={<Honfleur db={db} analytics={analytics}/>} />
            <Route path={Paths.mans}        element={<Gacilly db={db} analytics={analytics}/>} />
            <Route path={Paths.malta}       element={<Malta db={db} analytics={analytics}/>} />
            <Route path={Paths.perche}      element={<Perche db={db} analytics={analytics}/>} />
            <Route path={Paths.trouville}   element={<Trouville db={db} analytics={analytics}/>} />
            <Route path={Paths.home}        element={<Home db={db} analytics={analytics}/>} />
        </Routes>
        <Footer />
        </>
    );
}

export default App;
