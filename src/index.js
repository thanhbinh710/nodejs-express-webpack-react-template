import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from "./reducers";

import '../public/style/css/main.css';
import '../public/style/css/bootstrap.min.css';

import requireAuth from './containers/Auth';
import Login from "./containers/Login";
import Home from "./containers/Home";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>	
			<Switch>
				<Route path="/home" component={requireAuth(Home)} />
				<Route path="/" component={Login} />
			</Switch>
		</BrowserRouter>
	</Provider>
  	, document.querySelector(".placeholderContainer")
);
