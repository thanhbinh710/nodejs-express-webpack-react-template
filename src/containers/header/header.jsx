import React from "react";
import { Component } from "react";

// require('./header.scss');

export default class Header extends Component {
  render() {
    return (
      <header className="header">

        <div className="page_title">
            DESIGN SYSTEM
            <span className="emphasis">UI KIT</span>
        </div>
      </header>
    );
  }
}
