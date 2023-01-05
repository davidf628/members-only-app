import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignInPage } from './auth';
import {
	CreateGroupPage,
	GroupPage,
	GroupsListPage,
} from './groups';
import { NavBar } from './navigation';

const routes = [{
	path: '/',
	Component: GroupsListPage,
	exact: true,
}, {
	path: '/groups/:id',
	Component: GroupPage,
}, {
	path: '/sign-in',
	Component: SignInPage,
}, {
	path: '/create-group',
	Component: CreateGroupPage,
}];

export const WebRoutes = () => (
	<Router>
		<NavBar />
		<Routes>
			{routes.map((route, index) => (
				<Route 
					key={index} 
					path={route.path} 
					exact={route.exact} 
					element={<route.Component />}
                />
			))}
		</Routes>
	</Router>
)