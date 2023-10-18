import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { Store } from 'redux';
import store from "./redux/store";

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
		//자신이 가지고 있는 값을 자식에게 흘려주는 아이
	</HashRouter>,
	document.getElementById('root')
);
