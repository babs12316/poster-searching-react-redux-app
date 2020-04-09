import configureMockStore from 'redux-mock-store';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from '../../constants/actionTypes';
import fetchMovies from './fetchMovies';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('fetchMovies action', () => {

  let store;
  let httpMock;

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  it('fetches movies', async () => {
    // given
    httpMock.onGet('http://localhost:3000/movies.json').reply(200, {
        id: '1',
        title: 'Avtaar',
        star: '0'
    });
    // when
    fetchMovies()(store.dispatch);
    await flushAllPromises();
    // then
    expect(store.getActions()).toEqual(
      [
        { type: FETCH_MOVIES_REQUEST },
        { payload: { id:'1', title: 'Avtaar', star: '0'}, type: FETCH_MOVIES_SUCCESS }
      ]);
  })
});