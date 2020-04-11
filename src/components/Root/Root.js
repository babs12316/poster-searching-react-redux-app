import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PosterDetail from '../PosterDetail/PosterDetail';
import App from '../PosterList/PosterList';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <Route path="/" component={App} /> 
        <Route path="/poster/:id" component={PosterDetail} />
    </Router>
  </Provider>
)


export default Root;