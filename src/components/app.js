import React from "react";
import { Component } from "react";

require('./app.scss');

import Header from "../containers/header/header.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
