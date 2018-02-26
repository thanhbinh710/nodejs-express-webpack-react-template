import React from "react";
import { Component } from "react";

require('./app.scss');

import Header from "../containers/header";
import BookDetail from "../containers/bookdetail";
import BookList from "../containers/booklist";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
		<BookList />
        <BookDetail />
      </div>
    );
  }
}
