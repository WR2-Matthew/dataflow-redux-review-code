const initialState = {
  username: 'Matthew Ostraszewski',
  hometown: 'Freehold'
};

const GET_USER = 'GET_USER',
  CLEAR_USER = 'CLEAR_USER'

export function getUser(userObj) {
  //returns an action object.
  return {
    type: GET_USER,
    payload: userObj
    //wherever the function is invoked we will send in an argument that is an object that
    //contains user information.
  }
};

export function clearUser() {
  return {
    type: CLEAR_USER,
    payload: { username: '', hometown: '' }
  }
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action; //this allows me to use the type and payload separately.
  switch (type) {
    case GET_USER:
      return Object.assign({}, state, payload)  // can also be written like {...state, username: payload.username, hometown: payload.hometown}
    case CLEAR_USER:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};