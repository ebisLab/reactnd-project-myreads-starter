import React from 'react'
import * as BooksAPI from './BooksAPI' //* = all
import './App.css'
//import SearchPage from './Components/searchpage'
import HomePage from './Components/homepage'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  //called by React when the component is created 1:03:37 to fetch books
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

    changeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf);

  }
  render() {
      console.log(this.state.books)
    return (
      <div className="app">
      <HomePage
        books={this.state.books}
        changeShelf={this.changeShelf}
        />
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
