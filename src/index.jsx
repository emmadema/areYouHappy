import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './components/MainPage';
import HappyPage from './components/HappyPage';
import SadPage from './components/SadPage';

import './styles/app.scss';

ReactDOM.render(
	<MainPage />,
	document.getElementById('app')
);