import { CHANGE_AUTH } from '../actions';

export default function(state = null, action) {
	switch (action.type) {
    	case CHANGE_AUTH:
      	return action.payload;
  	}

  	return state;

}