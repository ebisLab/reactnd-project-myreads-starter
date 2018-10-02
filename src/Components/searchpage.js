import React from 'react'
import Books from './books'
import * as BooksAPI from '../BooksAPI' //* = all
import { Link } from 'react-router-dom'
//import { Route } from 'react-router-dom'


class SearchPage extends React.Component {
  state = {
    query: '',
    results: []
  }
/*from contacts project */
  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateResults(query);
  }
  updateResults = (query) => {
    if (query) {
      BooksAPI.search(query).then((results) => {
        if (results.error){
          this.setState({ results: [] });
        }/*attributed to youtube*/
        else {
        this.setState({ results: results })
      }
    })
  } else {
    this.setState({ results: [] }); /*empty array if query doesn't match*/
  }
  }
  /*handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }*/

  render() {


    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
          to="/"
          className="close-search"
          >
          Close</Link>

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

            onChange={(event) =>
            this.updateQuery(event.target.value)}

            /*ref={input => this.search = input}
            onChange={this.handleInputChange}*/
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {

              this.state.results.map(results => {
                let shelf = "none"
                  return(
                    <li key={results.id}>

                    <Books
                    book={ results }
                    changeShelf={this.props.changeShelf}
                      />
                    </li>
                  )
              }


              )
          }

          {/*this.state.query*/}</ol>
          {/*npm install --save escape-string-regexp*/}
        </div>
      </div>
    )
  }

}
export default SearchPage
