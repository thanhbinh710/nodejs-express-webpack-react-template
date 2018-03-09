import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authenticate } from '../../actions/index';

require('./header.scss');

class Header extends Component {
  	render() {
    	return (
      		<header className="header">

		        <div className="page_title">
		            Sample <span className="emphasis"> Header</span>
		        </div>
		        <div className="logout" onClick={() => this.props.authenticate('')}>Logout</div>
      		</header>
    	);
  	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ authenticate }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);