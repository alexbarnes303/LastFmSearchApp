// send search results to reducer
export function loadSearchResults(results) {
  return {
    type: 'LOAD_SEARCH_RESULTS',
    payload: results
  };
}

export function loadTopTracks(results) {
  return {
    type: 'LOAD_TOP_TRACKS',
    payload: results
  };
}

// handle search errors
export function searchError() {
  return {
    type: 'SEARCH_ERROR',
    payload: 'Search failed, check the name of the country and try again'
  };
}

// action for search in progress
export function searchPending() {
  return {
    type: 'SEARCH_PENDING',
    payload: 'searching....'
  };
}

// action for search complete
export function searchComplete() {
  return {
    type: 'SEARCH_COMPLETE',
    payload: ''
  };
}
