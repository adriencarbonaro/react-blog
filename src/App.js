import React                 from 'react';
import { Component }         from 'react';
import { Switch, Route }     from 'react-router-dom'

import Navbar                from './components/Navbar';
import Footer                from './components/Footer'
import Home                  from './components/pages/Home'

/* Trips */
import Amsterdam             from './components/pages/trips/Amsterdam'
import Berlin                from './components/pages/trips/Berlin'
import Bourges               from './components/pages/trips/Bourges'
import Bourgogne             from './components/pages/trips/Bourgogne'
import Bretagne              from './components/pages/trips/Bretagne'
import Crete                 from './components/pages/trips/Crete'
import Corse                 from './components/pages/trips/Corse'
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
				<Route path="/amsterdam" component={Amsterdam} />
				<Route path="/berlin"    component={Berlin} />
				<Route path="/bourges"   component={Bourges} />
				<Route path="/bourgogne" component={Bourgogne} />
				<Route path="/bretagne"  component={Bretagne} />
				<Route path="/crete"     component={Crete} />
				<Route path="/corse"     component={Corse} />
				<Route path="/perche"    component={Perche} />
				<Route path="/trouville" component={Trouville} />
				<Route path="/"          component={Home} />
			</Switch>
			<Footer />
		</>
	);
	}
}

export default App;
