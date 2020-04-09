import React from 'react';
import { MovieList} from './movieList';
import { shallow } from 'enzyme';
import MovieItem from '../movieItem/movieItem';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

describe('App component', () => {

 it('renders MovieItem component', () => {
    const wrapper = shallow(<MovieList store={store}/>);
         expect(wrapper.contains(<MovieItem />)).toEqual(true);
  })

});