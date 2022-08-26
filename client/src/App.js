import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
	return(
<BrowserRouter>
		<Container maxwidth='lg'>
	  	<Navbar />
	  		<Switch>
	  			<Route path='/' exact component={Home} />
	  			<Route path='/auth' exact component={Auth} />
	  		</Switch>
	  </Container>
</BrowserRouter>
	// <GoogleOAuthProvider clientId='858538264989-9smqm9ei0hsj6gokadg03vmm2qavs50c.apps.googleusercontent.com'>
	// </GoogleOAuthProvider>
	);
}

export default App;
