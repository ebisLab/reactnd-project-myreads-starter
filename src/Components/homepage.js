

import React from 'react'
import Books from './books'


class HomePage extends React.Component {
render(){
  console.log(this.props.books)
  return(

    // START BOOK PAGE
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      { /* START OF BOOKCASE */ }
      <div className="list-books-content">
        <div>

        { /* START SINGLE SHELF CURRENTLY READING */ }
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                this.props.books
                .filter(book => book.shelf === 'currentlyReading')
                .map(book => (
                  <li key={book.id}>
                  <Books book = {book}
                    changeShelf={this.props.changeShelf}
                    shelf='currentlyReading'
                    />
                  {/*
                  prop of book with the value of book
                  filter
                  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                  map
                  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                  */}
                  </li>
                ))
              }
              </ol>
            </div>
          </div>
          { /* END OF SINGLE SHELF CURRENTLY READING */ }
          { /* START SINGLE SHELF WANT TO READ */ }
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  this.props.books
                  .filter(book => book.shelf === 'wantToRead')
                  .map(book => (
                    <li key={book.id}>
                    <Books book = {book}
                    changeShelf={this.props.changeShelf}
                    shelf='wantToRead'
                    />
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>
          { /* END SINGLE SHELF WANT TO READ */ }
          { /* START OF SINGLE SHELF READ */ }
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {/*filter through books create array*/ }
              {
                this.props.books
                .filter(book => book.shelf === 'read')
                .map(book => (
                  <li key={book.id}>
                  <Books book = {book}
                  changeShelf={this.props.changeShelf}
                  shelf='read'
                  />
                  </li>
                ))
              }
              </ol>
            </div>
          </div>
          { /* END OF SINGLE SHELF READ */ }
        </div>
      </div>
      { /* END OF BOOKCASE */ }

      { /* START SEARCH */ }
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
      { /* END SEARCH */ }

    </div>

  )
}}
export default HomePage
