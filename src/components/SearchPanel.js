import React from 'react'
import Button from './Button'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SearchPanel = (props) => {

  const {
		 selectedOption,
		 handleSelect,
		 handleSubmit,
		 dropDownList,
		 errors,
		 searchState
	 } = props

	return (
		<div>
	    <h3>Search Last.fm for the top artists in a country</h3>
			<Select
			  clearable={false}
        name="SearchPanel"
        value={selectedOption}
        onChange={handleSelect}
        options={dropDownList}
      />
			<br/>
			<Button onClick={handleSubmit}>
				Search
			</Button>
      {/*display search status and errors*/}
      <span style={{color:'red'}}> {errors}</span>
      <span style={{color:'red'}}> {searchState}</span>
      <br/>
    </div>
  )
}

export default SearchPanel

//prop checking
SearchPanel.propTypes = {
  errors: PropTypes.string.isRequired,
	searchState: PropTypes.string.isRequired,
	selectedOption: PropTypes.string.isRequired,
	dropDownList: PropTypes.array.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleSelect: PropTypes.func.isRequired
}
