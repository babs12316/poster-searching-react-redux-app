import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//import App from './components/movieList/movieList';
//import App from './components/PosterList/PosterList';
//import PosterDetail from './components/PosterDetail/PosterDetail';
import Root from './components/Root/Root';
import './index.scss';


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
