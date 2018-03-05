import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { authenticate } from '../../actions';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Auth extends Component {
        
        componentWillMount() {
            if (!this.props.token) {
                this.props.history.push('/')
                this.props.authenticate(null)
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.token) {
                this.props.history.push('/')
                this.props.authenticate(null)
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { token: state.token };
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({ authenticate }, dispatch);
    }

    return connect(mapStateToProps, mapDispatchToProps)(Auth);
}
