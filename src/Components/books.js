
/**
 * Books Component (JavaScript)
 */

import React from 'react'

class Books extends React.Component {
  render() {
    /* If link to bookImage exists, get bookImage, if link does not exist, return no image.
    Must return empty string ""in order to prevent errors
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    */
    let bookImage = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail :
    "";

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookImage}")`}}></div>
          <div className="book-shelf-changer">
          {/* pass shelf value to book */}
          {/* Select Tag creates a dropdown list  */}
          {/* https://reactjs.org/docs/forms.html */}
            <select
              
              value={this.props.book.shelf}
              onChange={(event) => this.props.changeShelf (
              this.props.book, event.target.value

              )}

              /* allows value to match current shelf */
              //value={this.props.currentShelf}
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
