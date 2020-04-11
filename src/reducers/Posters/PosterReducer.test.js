import postersReducer from './PosterReducer';
import { FETCH_POSTERS_SUCCESS } from '../../constants/actionTypes';

describe('posters reducer', () => {

  it('returns initial state', () => {
    expect(postersReducer(undefined, [])).toEqual({ postersInfo: [],
        searchTerm: "",
        posterDetail: [],
        loadingPosters:"",
        error:''});
  });

  it('sets up fetched posters data', () => {
    // given
    const beforeState = {postersInfo: {}};
    const action = {type: FETCH_POSTERS_SUCCESS,searchTerm:'dddd',  payload: {"id":1}};
    // when
    const afterState = postersReducer(beforeState, action);
    // then
    expect(afterState).toEqual( {"error": "", "loadingPosters": false, "posterDetail": [], "postersInfo": {"id": 1}, "searchTerm": 'dddd'});
  });
  
});
