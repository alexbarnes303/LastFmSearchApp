import React from 'react'
import PropTypes from 'prop-types'

const ResultItem = (props) => {

	 const openInNewTab = () => {
     const win = window.open('/TopTracksPage/' + props.name, '_blank')
     win.focus()
   }

	 const {
		 name,
		 image
	 } = props

	 return (
    	<div>
				<br/>
        <span><b>Artist: </b></span> <span>{name}</span><br/>
        <img style={{marginTop:'0.2rem', cursor:'pointer'}} alt='artist' src={image} onClick={openInNewTab} />
        <br/>
      </div>
	 )
}

export default ResultItem

//prop checking here
ResultItem.propTypes = {
  name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}
