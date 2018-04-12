import React from 'react'
import PropTypes from 'prop-types'

const TrackItem = (props) => {

	return (
  	<div>
      <span><b>Track: </b></span> <span>{props.name}</span><br/>
      <br/>
    </div>
	)
}

//prop checking
TrackItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default TrackItem
