import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root/Root';
import './index.scss';


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

registerServiceWorker();
