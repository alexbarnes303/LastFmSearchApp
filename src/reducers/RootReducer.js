import { combineReducers } from 'redux'
import * as reducers from './Reducers'

const RootReducer = combineReducers({
  searchResults: reducers.searchResults,
  topTracks: reducers.topTracks,
  searchState: reducers.searchState
});

export default RootReducer
