import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainPage from './components/MainPage';
import SadPage from './components/SadPage';
import HappyPage from './components/HappyPage';

export defualt (
	<Route path='/' component={MainPage}>
		<Route path='sad' component={SadPage}/>
		<Route path='happy' component={HappyPage}/>
	</Route>
);