import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers,applyMiddleware(thunk));

ReactDom.render(

	<Provider store={store}>
		<App />
	</ Provider>,
	document.querySelector('#root')
);