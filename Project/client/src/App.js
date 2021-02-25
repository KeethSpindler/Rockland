import { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Orders from './components/Orders';
import OrderComplete from './components/OrderComplete';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Redirect to='/orders/purchase-orders' />
					</Route>
					<Route exact path='/orders/purchase-orders' component={Orders} />
					<Route
						exact
						path='/orders/order-complete'
						component={OrderComplete}
					/>
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
