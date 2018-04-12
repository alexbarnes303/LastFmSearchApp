import React, { Component } from 'react'
import * as actions from '../actions/Actions'
import * as thunk from '../actions/Thunk'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SearchPanel from './SearchPanel'
import ResultsPanel from './ResultsPanel'
import PropTypes from 'prop-types'
import {CountryList} from '../Constants/CountryList'


class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
      errors: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.page = 1
  }

  handleSubmit(ev) {
   if (this.state.selectedOption.length > 0) {
     this.page = 1
     this.props.thunk.geoSearch(this.state.selectedOption, this.page)
   } else {
     this.setState({errors:'Please select a country'})
   }
 }

  handleSelect(option) {
    this.setState({errors:''})
    this.setState({ selectedOption: option.value })
  }

  // increment page count by by 1 and call thunk search action with existing query
  nextPage(ev) {
    this.page += 1;
    this.props.thunk.geoSearch(this.state.selectedOption, this.page)
  }

  // decrement page count by by 1 and call thunk search action with existing query
  prevPage(ev) {
    this.page === 1 ? this.page = 1 : this.page -= 1;
    this.props.thunk.geoSearch(this.state.selectedOption, this.page)
  }

  render() {
   const dropDownList = CountryList.map((item, i)  => {
     return {value: item.Name, label: item.Name}
   })

    //state, methods and props to be passed to child components
    const {
      artists,
      total
    } = this.props.results

    const searchState = this.props.searchState

    const handleSelect = this.handleSelect
    const handleSubmit = this.handleSubmit
    const selectedOption = this.state.selectedOption
    const errors = this.state.errors
    const page = this.page
    const nextPage = this.nextPage
    const prevPage = this.prevPage

    return (
      <div className="App">
        <SearchPanel dropDownList={dropDownList} selectedOption={selectedOption} handleSubmit={handleSubmit} handleSelect={handleSelect}  errors={errors} searchState={searchState} />
        <ResultsPanel artists={artists} total={total} page={page} nextPage={nextPage} prevPage={prevPage}  />
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
  results: state.searchResults,
  searchState: state.searchState.searchState
});

// connect component to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

//prop checking
SearchPage.propTypes = {
  results: PropTypes.shape({
    artists: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
  }),
  searchState: PropTypes.string.isRequired
}
