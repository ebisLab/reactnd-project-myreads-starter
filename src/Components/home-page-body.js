
import React from 'react'
import Books from './books'
//import { Link } from 'react-router-dom'
//import Title from './title'

//import BooksApp from '../App'

class HomePageBody extends React.Component {
  render() {
    return(
      // START BOOK PAGE
      <div className="list-books">

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
                      currentShelf='currentlyReading'
                      />

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
                      currentShelf='wantToRead'
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
                    currentShelf='read'
                    />
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
          </div>
        </div></div>

    )
  }}

  export default HomePageBody
