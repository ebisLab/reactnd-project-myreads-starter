
/**
 * Home Page Component
 */

//TODO: Create Shelf Component

/*
*References:
filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

import React from 'react'
import Books from './books'
import Title from './title'
import SearchLink from './search-link'

function HomePage (props) {
  return(
    /* START BOOK PAGE */
    <div className="list-books">
    <Title/>

      <div className="list-books-content">

        <div>
        { /* START SINGLE SHELF CURRENTLY READING */ }
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">

              <ol className="books-grid">
              {/* Filter through books array, create list item in shelf*/}
                {
                props.books
                .filter(book => book.shelf === 'currentlyReading')
                .map(book => (

                  <li key={book.id}>
                  <Books book = {book}
                  changeShelf={props.changeShelf}
                  currentShelf='currentlyReading'/>
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
              {/* Filter through books array, create list item in shelf*/}
                {
                  props.books
                  .filter(book => book.shelf === 'wantToRead')
                  .map(book => (
                    <li key={book.id}>
                    <Books book = {book}
                    changeShelf={props.changeShelf}
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
                  props.books
                  .filter(book => book.shelf === 'read')
                  .map(book => (
                    <li key={book.id}>
                    <Books book = {book}
                    changeShelf={props.changeShelf}
                    currentShelf='read'
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
      <SearchLink/>
    </div>

  )
}
export default HomePage
