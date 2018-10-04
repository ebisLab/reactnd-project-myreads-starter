import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI'

import Shelf from '../Shelf';



class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		}

	}


	componentDidMount(){
		BooksAPI.getAll()
			.then(resp =>{
				console.log(resp);
				this.setState({books: resp});
			});
	}


	render(){
		return(

			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
               <Shelf />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
            </div>
			




			);
	}
}

export default MainPage;