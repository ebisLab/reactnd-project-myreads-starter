
import React from 'react'
//import BookSelection from './book-selection'
//import BooksApp from '../App'

class Books extends React.Component {
  render() {
    let bookImage = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail :
    "";
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookImage}")` /*`url("${this.props.book.imageLinks.thumbnail}")`*/ }}></div>
          <div className="book-shelf-changer">
          {/*pass shelf value to book 1:32*/}
            <select
              onChange={(event) => this.props.changeShelf(
                this.props.book, event.target.value
              )}
              value={this.props.currentShelf} /*so value matches current shelf*/
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Books
