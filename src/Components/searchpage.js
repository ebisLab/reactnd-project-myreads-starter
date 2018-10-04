
/**
 * Search Page Component (JavaScript)
 */

 /**
  *NOTE: escaping characters
  *npm install --save escape-string-regexp
 https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
 **/

import React from 'react'
import Books from './books'
import * as BooksAPI from '../BooksAPI'
import HomeLink from './home-link'

/**
/* start with empty query (search bar) and
/* array that results will push into
**/

class SearchPage extends React.Component {
  state = {
    query: '',
    results: []
  }
/* From Udactiy Contacts Project */
  updateQuery = (query) => {
    this.setState({
      query
    })
    this.updateResults(query);
  }
  updateResults = (query) => {
    if (query) {
      BooksAPI.search(query).then((results) => {
        if (results.error){
          this.setState({ results: [] }); /* empty array if query error */
        }
        /* help from https://www.youtube.com/channel/UCqKeTmQIyIXxSSKfFdfbnIg */
        else {
        this.setState({ results }) /* add to results array if no error */
      }
    })
  } else {
    this.setState({ results: [] }); /* if none of the two above, empty array (if query doesn't match) */
  }
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          /* Component Link to Home Page */
          <HomeLink/>


          <div className="search-books-input-wrapper">
        {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
            value={this.state.query}
            /* get values of input into search bar */
            onChange={(event) =>
            this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            /* map over results of query, books with no shelf as none */
            this.state.results.map(results => {
              let shelf ="none";
              this.props.books.map(book => (
                /* if book array id is equal to search results book id, then label
                book with proper shelf, if not, do nothing and book will be labed as none
                 help from https://www.youtube.com/channel/UCqKeTmQIyIXxSSKfFdfbnIg */
                book.id === results.id ?
                shelf = book.shelf : ""

              ))

              return (
              <li key ={results.id }>
              <Books
              book={results}
              /* put book on appropriate shelf */
              /* give book its proper shelf label */
              currentShelf={shelf}
              changeShelf={this.props.changeShelf}
              //shelf={this.props.changeShelf}
              />
              </li>);
            })
          }
          </ol>
        </div>
      </div>
    )
  }

}
export default SearchPage
