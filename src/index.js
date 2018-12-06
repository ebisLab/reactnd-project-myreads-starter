import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//This will allow to use react router to be used
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
	<HashRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById('root')
	)
