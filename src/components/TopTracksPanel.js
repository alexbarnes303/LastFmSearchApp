import React from 'react'
import PropTypes from 'prop-types'
import TrackItem from './TrackItem'
import WideButton from './WideButton'


const TopTracksPanel = (props) => {
  let itemsArray
  const {
    tracks,
    total,
    nextPage,
    prevPage,
    page
  } = props

  // build array of results items if array is filled
  if (tracks.length > 0){
    itemsArray = tracks.map((track, i) => <TrackItem key={i} name={track.name} />)
  }

  return (
    <div>
      {/* conditionally render results and pagination buttons */}
      {tracks.length > 0 &&
        <div>
          <br/>
          <span><b>total results:</b> {total}</span>
          <br/><br/>
          <WideButton disabled={page <2} onClick={prevPage}>
            Previous
          </WideButton>
          <span> Page {page} </span>
          <WideButton bsStyle='primary' onClick={nextPage}>
            Next
          </WideButton>
          <br/><br/>
          {itemsArray}
        </div>
      }
    </div>
  )
}

export default TopTracksPanel

//prop checking
TopTracksPanel.propTypes = {
  tracks: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
}
