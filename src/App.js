import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Components/searchpage'
import HomePage from './Components/homepage'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <SearchPage/>
      {/*  {this.state.showSearchPage ? (
        <SearchPage/>
        ) : (

        <HomePage/>
      )}*/}
      </div>
    )
  }
}

export default BooksApp
