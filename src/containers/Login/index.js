import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from 'redux-form';
import { authenticate } from '../../actions/index';
import axios from 'axios';

require('./login.scss');

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loginError : ''
		}
	}

	renderInputField(field) {
		const {meta : {touched, error} } = field;
		const className =`form-group ${touched && error ? 'has-danger' : ''}`;
		
		return (
			<div className={className}>
				<input
					type={field.type}
					className="form-control"
					{...field.input}
				/>
				<small className="form-text text-error">
					{touched ? error : ''}
				</small>
			</div>
		);
	}

	onSubmit(values) {
		console.log("submitted values", values)

		axios.post("http://localhost:7000/api/users/login", values)
		// axios.post("/api/users/login", values)
			.then(response => {
			    if(response.status === 200) {
					this.props.authenticate(response.data.token)
			    	this.props.history.push('/home')
			    }
		  	})
		  	.catch(error => {
		  		console.log("Unexpected error", error);
		  		this.props.authenticate(null)
		    	this.setState({loginError: 'Invalid username/password'})
		  	});
	}
  	
  	render() {

  		const { handleSubmit } = this.props;


    	return (
      		<div className="login-page container">

      			<div className="row justify-content-center align-items-center">
					<div className="col-10 col-md-7 col-lg-5">
      					<h3 className="text-center">Login</h3>

						<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
							<p>What is your username?</p>
							<Field 
								type="text"
								placeholder="Username"
								name="username"
								component={this.renderInputField}
							/>

							<p>What is your password?</p>
							<Field 
								type="password"
								placeholder="Password"
								name="password"
								component={this.renderInputField}
							/>

							
							<button action="submit" className="btn btn-primary btn-block">Submit</button>
							<div className="form-text text-error">
								{this.state.loginError}
							</div>
						</form>
					</div>
				</div>

      		</div>
    	);
  	}
}

function validate(values) {
	const errors = {};

	if(!values.username) {
		errors.username = "Please enter your username.";
	} else {
		if (/[\[\]\\/{}|\\<>]/.test(values.username) == true) {
			errors.username = "Please obmit any special character from your username.";
		}   
	}

	if(!values.password) {
		errors.password = "Please enter your password.";
	} else {
		if (/[\[\]\\/{}|\\<>]/.test(values.password) == true) {
			errors.password = "Please obmit any special character from your password.";
		}
	}

	return errors;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ authenticate }, dispatch);
}


export default reduxForm({
	validate,
	form: 'LoginForm'
})(connect(null, mapDispatchToProps)(Login));