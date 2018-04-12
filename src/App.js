import React from 'react';
import SearchPage from './components/SearchPage'
import TopTracksPage from './components/TopTracksPage'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

const Panel = styled.div`
	padding-left: 20rem;
  padding-right: 20rem;
  padding-top: 3rem;
	margin:auto
`
 const App = () => {
  return (
    <Panel>
      <Route path="/" exact component={SearchPage} />
      <Route path="/TopTracksPage/:artist" component={TopTracksPage} />
   </Panel>
  )
}

export default App
