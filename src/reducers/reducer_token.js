import { CHANGE_AUTH } from '../actions';

export default function(state, action) {
	// get token from local storage, if dont' have, initiate as null
	state = localStorage.getItem('token') ? localStorage.getItem('token') : null

	switch (action.type) {
    	case CHANGE_AUTH:
      	return action.payload;
  	}

  	return state;

}