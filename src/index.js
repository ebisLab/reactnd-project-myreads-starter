import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//This will allow to use react router to be used
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById('root')
	)
