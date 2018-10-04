
/**
 * home-link.js --> Button that links to Home Page
 */

import React from 'react'
import { Link } from 'react-router-dom'
//import BookSelection from './book-selection'
//import BooksApp from '../App'

class HomeLink extends React.Component {
render(){
  return(
    <Link to="/" className="close-search"> { /* link to home page */ }
    Close
    </Link>
  )}
}

export default HomeLink
