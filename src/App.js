
/**
 * App.js
 */

/**
//TODO: Add book cover to My First Life
//TODO: Make page faster
//TODO: Add new books
//TODO: Change Search Page to "Search" and Home Page to "Main"
//      When I tried to do this, even though I thought I updated all of the paths,
        the app would not link to the search page properly
*/

import React from 'react'
import * as BooksAPI from './BooksAPI' //* = all
import './App.css'
import SearchPage from './Components/searchpage'
import HomePage from './Components/homepage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
    }
  //called by React when the component is created to fetch books
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState({books})
    })
  }
// Thanks to Gina Corsiglia for help!
    changeShelf = (book, shelf) => {
      book.shelf = shelf
      BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll()
      .then((books) => {
        this.setState({books})
      })
    )

    }

  render() {
      //console.log(this.state.books)
    return (
      <div className="app">
      { /*Implements Browser Router */}
      <Route exact path="/" render={() => (
      <HomePage
        changeShelf={this.changeShelf}
        currentShelf={this.shelf}
        books={this.state.books}
        />
      )}/>

      <Route path="/searchpage" render={() => (
        <SearchPage
        changeShelf={this.changeShelf}
        books={this.state.books}
        currentShelf={this.shelf}
        />
      )}/>

      </div>
    )
  }
}

export default BooksApp
