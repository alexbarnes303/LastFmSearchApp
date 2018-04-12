export function searchResults(state = {total: 0, totalPages:0,  artists: []}, action) {
  switch (action.type) {
    case 'LOAD_SEARCH_RESULTS':
    // load results count and and results items array to state
      const results = action.payload
      return state = Object.assign({}, {artists: results.artist}, {total: Number(results['@attr'].total)})
    default:
      return state
  }
}

export function topTracks(state = {artist:'', total: 0, totalPages:0,  tracks: []}, action) {
  switch (action.type) {
    case 'LOAD_TOP_TRACKS':
    // load results count and and results items array to state
      const results = action.payload
      return state = Object.assign({}, {tracks: results.track}, {total: Number(results['@attr'].total)})
    default:
      return state
  }
}

export function searchState(state = {searchState:''}, action) {
	// handle actions relating to search status
  switch (action.type) {
  	case 'SEARCH_PENDING':
      return state = Object.assign({}, state, {searchState: action.payload})
     case 'SEARCH_COMPLETE':
      return state = Object.assign({}, state, {searchState: action.payload})
    case 'SEARCH_ERROR':
      return state = Object.assign({}, state, {searchState: action.payload})
    default:
      return state;
  }
}
