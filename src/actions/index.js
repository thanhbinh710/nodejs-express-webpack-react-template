export const CHANGE_AUTH = 'change_auth';
export const BOOK_SELECTED = 'book_selected';


export function authenticate(token) {
    // set token to local storage
    token ? localStorage.setItem('token', token) : localStorage.removeItem('token')

  	return {
    	type: CHANGE_AUTH,
    	payload: token
  	};
}

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}