
/**
//TODO: Add book cover to My First Life
//TODO: DELETE console.log messages
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
  //called by React when the component is created 1:03:37 to fetch books
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }/*
    changeShelf = (book, shelf) => {
      book.shelf = shelf
      BooksAPI.update(book, shelf);

      BooksAPI.getAll()

      .then((books) => {
        this.setState(

        { books })
      })
    }
    */
    changeShelf = (book, shelf) => {
      book.shelf = shelf
      BooksAPI.update(book, shelf);
      BooksAPI.getAll()
      .then((books) => {
        this.setState(
          state => ({books: state.books
        .filter(book => book.id === book )
      .concat(book)})

    )
      })
    }

  render() {
      //console.log(this.state.books)
    return (
      <div className="app">

      <Route exact path="/" render={() => (
      <HomePage
        books={this.state.books}
        changeShelf={this.changeShelf}/>
      )}/>

      <Route path="/" render={() => (
        <SearchPage
        changeShelf={this.changeShelf}
        books={this.state.books}/>
      )}/>

      </div>
    )
  }
}

export default BooksApp
