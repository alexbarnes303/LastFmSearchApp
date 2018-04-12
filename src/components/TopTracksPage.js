import React, { Component } from 'react'
import * as actions from '../actions/Actions'
import * as thunk from '../actions/Thunk'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import TopTracksPanel from './TopTracksPanel'
import PropTypes from 'prop-types'

class TopTracksPage extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.page = 1
  }

  // increment page count by by 1 and call thunk search action with existing query
  nextPage(ev) {
    ev.preventDefault()
    this.page += 1;
    this.props.thunk.getTopTracks(this.props.match.params.artist, this.page)
  }

  // decrement page count by by 1 and call thunk search action with existing query
  prevPage(ev) {
    ev.preventDefault()
    this.page === 1 ? this.page = 1 : this.page -= 1
    this.props.thunk.getTopTracks(this.props.match.params.artist, this.page)
  }

  componentDidMount() {
    this.props.thunk.getTopTracks(this.props.match.params.artist, 1)
  }

  // state and props to be passed to child components
  render() {
    const {
      tracks,
      total,
    } = this.props.topTracks

    const searchState = this.props.searchState
    const page = this.page
    const nextPage = this.nextPage
    const prevPage = this.prevPage

    return (
      <div className="App">
        <span><b>Top Tracks for {this.props.match.params.artist}</b></span><span style={{color:'red'}}> {searchState} </span>
        <TopTracksPanel tracks={tracks} total={total} page={page} nextPage={nextPage} prevPage={prevPage}  />
      </div>
    )
  }
}

// bind thunk and actions and map to props
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  thunk: bindActionCreators(thunk, dispatch)
})

// map reducer state to props
const mapStateToProps = (state) => ({
  topTracks: state.topTracks,
  searchState: state.searchState.searchState
});

// connect component to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTracksPage);

//prop checking
TopTracksPage.propTypes = {
  results: PropTypes.shape({
    tracks: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
  }),
  searchState: PropTypes.string.isRequired
}
