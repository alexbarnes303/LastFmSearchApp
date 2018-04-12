import React from 'react'
import ResultItem from './ResultItem'
import PropTypes from 'prop-types'
import WideButton from './WideButton'

 const ResultPanel = (props) => {

  let itemsArray
  const {
    artists,
    total,
    nextPage,
    prevPage,
    page
  } = props

  // build array of results items if array is filled
  if (artists.length > 0){
    itemsArray = artists.map((artist, i) => <ResultItem key={i}  name={artist.name} image={artist.image[1]['#text']}/>)
  }

  return (
    <div>
      {/* conditionally render results and pagination buttons */}
      { artists.length > 0 &&
        <div>
          <br/>
          <span><b>total results:</b> {total}</span>
          <br/><br/>
          <WideButton disabled={page <2} onClick={prevPage}>
            Previous
          </WideButton>
          <span> Page {page} </span>
          <WideButton onClick={nextPage}>
            Next
          </WideButton>
          <br/><br/>
          {itemsArray}
        </div>
      }
    </div>
  )
}

export default ResultPanel

//prop checking
ResultPanel.propTypes = {
  artists: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
}
