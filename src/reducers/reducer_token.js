import { CHANGE_AUTH } from '../actions';

export default function(state = null, action) {
	// get token from local storage, if dont' have, initiate as null

	switch (action.type) {
    	case CHANGE_AUTH:
      	return action.payload;
  	}

  	return state;

}