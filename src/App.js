import React                 from 'react';
import { Component }         from 'react';
import { Switch, Route }     from 'react-router-dom'
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
			<Switch>
				<Route path={Paths.auvergne}    component={Auvergne} />
				<Route path={Paths.netherlands} component={Amsterdam} />
				<Route path={Paths.germany}     component={Berlin} />
				<Route path={Paths.bourges}     component={Bourges} />
				<Route path={Paths.bourgogne}   component={Bourgogne} />
				<Route path={Paths.bretagne}    component={Bretagne} />
				<Route path={Paths.greece}      component={Crete} />
				<Route path={Paths.corse}       component={Corse} />
				<Route path={Paths.etretat}     component={Etretat} />
				<Route path={Paths.gacilly}     component={Gacilly} />
				<Route path={Paths.honfleur}    component={Honfleur} />
				<Route path={Paths.mans}        component={Gacilly} />
				<Route path={Paths.malta}       component={Malta} />
				<Route path={Paths.perche}      component={Perche} />
				<Route path={Paths.trouville}   component={Trouville} />
				<Route path={Paths.home}        component={Home} />
			</Switch>
			<Footer />
		</>
	);
	}
}

export default App;
