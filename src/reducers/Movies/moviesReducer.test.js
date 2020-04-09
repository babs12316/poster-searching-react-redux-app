import moviesReducer from './moviesReducer';
import { FETCH_MOVIES_SUCCESS } from '../../constants/actionTypes';

describe('movies reducer', () => {

  it('returns initial state', () => {
    expect(moviesReducer(undefined, [])).toEqual({moviesInfo: []});
  });

  it('sets up fetched movies data', () => {
    // given
    const beforeState = {moviesInfo: {}};
    const action = {type: FETCH_MOVIES_SUCCESS, payload: {id:'1', title: 'Avtaar', star: '0'}};
    // when
    const afterState = moviesReducer(beforeState, action);
    // then
    expect(afterState).toEqual({ moviesInfo: { id:'1', title: 'Avtaar', star: '0'}});
  });
  
});
