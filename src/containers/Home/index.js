import React from "react";
import { Component } from "react";

require('./home.scss');

import Header from "../../components/header";
import BookDetail from "../../components/bookdetail";
import BookList from "../../components/booklist";

export default class App extends Component {
  render() {
    	return (
      		<div>
        		<Header />
        		<div className="container">
	        		<div className= "row">
						<BookList />
				        <BookDetail />
	      			</div>
      			</div>
  			</div>
    	);
  	}
}
