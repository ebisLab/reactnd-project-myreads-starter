

import React from 'react'

//import BooksApp from '../App'

class BookSelection extends React.Component {
  render(){
    let bookImage = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail :
    "";
    return (
    <select
      onChange={(event) => this.props.changeShelf(
        this.props.book, event.target.value
      )}
      value={this.props.currentShelf}> /*so value matches current shelf*/

      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  )
  }

  }

  export default BookSelection
