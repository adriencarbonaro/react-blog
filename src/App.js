import React                 from 'react';
import { Component }         from 'react';
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

class App extends Component {
	render () {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={Paths.auvergne}    element={<Auvergne/>} />
				<Route path={Paths.amsterdam}   element={<Amsterdam/>} />
				<Route path={Paths.berlin}      element={<Berlin/>} />
				<Route path={Paths.bourges}     element={<Bourges/>} />
				<Route path={Paths.bourgogne}   element={<Bourgogne/>} />
				<Route path={Paths.bretagne}    element={<Bretagne/>} />
				<Route path={Paths.crete}       element={<Crete/>} />
				<Route path={Paths.corse}       element={<Corse/>} />
				<Route path={Paths.etretat}     element={<Etretat/>} />
				<Route path={Paths.gacilly}     element={<Gacilly/>} />
				<Route path={Paths.honfleur}    element={<Honfleur/>} />
				<Route path={Paths.mans}        element={<Gacilly/>} />
				<Route path={Paths.malta}       element={<Malta/>} />
				<Route path={Paths.perche}      element={<Perche/>} />
				<Route path={Paths.trouville}   element={<Trouville/>} />
				<Route path={Paths.home}        element={<Home/>} />
			</Routes>
			<Footer />
		</>
	);
	}
}

export default App;
