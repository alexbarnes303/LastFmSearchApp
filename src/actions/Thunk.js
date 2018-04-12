import axios from 'axios';
import * as actions from './Actions';

const requestUrl = 'http://ws.audioscrobbler.com/2.0/'
const geoSearchMethod = '?method=geo.gettopartists&country='
const getTopTracksMethod = '?method=artist.gettoptracks&artist='
const api_key = '268b9ae62e614773b3e4344a239213b6'
const limit = '5'

export function geoSearch(query, page) {
  return function(dispatch) {
    dispatch(actions.searchPending());
  	axios.get(requestUrl + geoSearchMethod +  query + '&api_key=' + api_key + '&limit=' + limit + '&page=' + page + '&format=json')
  	.then(res => {
      const results = res.data.topartists
      console.log('topArtists', results)
      dispatch(actions.searchComplete())
      dispatch(actions.loadSearchResults(results))
    })
    .catch(res => {
      dispatch(actions.searchError())
    })
  }
}

export function getTopTracks(artist, page) {
  return function(dispatch) {
    dispatch(actions.searchPending())
  	axios.get(requestUrl + getTopTracksMethod + artist + '&api_key=' + api_key + '&limit=' + limit + '&page=' + page + '&format=json')
  	.then(res => {
      const results = res.data.toptracks
      console.log('topTracks', results)
      dispatch(actions.searchComplete())
      dispatch(actions.loadTopTracks(results))
    })
    .catch(res => {
      dispatch(actions.searchError())
    })
  }
}
