import React                 from 'react';
import { BrowserRouter as
         Router }            from 'react-router-dom'
import { Switch, Route }     from 'react-router-dom'

import Navbar                from './components/Navbar';
import Footer                from './components/Footer'
import Home                  from './components/pages/Home'

/* Trips */
import Berlin                from './components/pages/trips/Berlin'
import Bourgogne             from './components/pages/trips/Bourgogne'
import Bretagne              from './components/pages/trips/Bretagne'
import Crete                 from './components/pages/trips/Crete'
import Corse                 from './components/pages/trips/Corse'
import Perche                from './components/pages/trips/Perche'

/* CSS */
import './css/App.css';

function App() {
	return (
		<>
		<Router>
				<Navbar />
				<Switch>
						<Route path="/berlin"    component={Berlin} />
						<Route path="/bourgogne" component={Bourgogne} />
						<Route path="/bretagne"  component={Bretagne} />
						<Route path="/crete"     component={Crete} />
						<Route path="/corse"     component={Corse} />
						<Route path="/perche"    component={Perche} />
						<Route path="/"          component={Home} />
				</Switch>
				<Footer />
		</Router>
		</>
	);
}

export default App;
