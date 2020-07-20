import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import carReducer from './carReducer';

// This is for only one reducer file and allowing us ton connect to it.
// export default createStore(userReducer); 

//This allows us to access both of our reducers and pass it into our redux store.
const rootReducer = combineReducers({
  userReducer,
  carReducer
});

// we are creating our store and passing in our rootreducer which contains all of our reducer files.
// we are making axios calls from redux so we are applying our promiseMiddleware.
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));