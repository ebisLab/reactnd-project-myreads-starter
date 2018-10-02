
import React from 'react'
import { Link } from 'react-router-dom'
//import BookSelection from './book-selection'
//import BooksApp from '../App'

class SearchLink extends React.Component {
render(){
return(
  <div className="open-search">
    <Link
    to="/searchpage">
    Add a book</Link>
  </div>

)}
}

export default SearchLink
