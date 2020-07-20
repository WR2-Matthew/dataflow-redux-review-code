import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getUser, clearUser } from '../redux/userReducer';
import { getCars } from '../redux/carReducer';


const ReduxExamples = props => {

  //this is our 'componentDidMount' for a functional component. 
  // it is grabbing all the cars from our axios call in our redux reducer.
  useEffect(() => {
    props.getCars();
  }, []);

  return (
    <div>
      <p>{props.userReducer.username}</p>
      <button onClick={() => props.clearUser()}>Clear User</button>
      <button onClick={() => props.getUser({ username: 'Matthew', hometown: 'Belmar' })} >Change User</button>
      {/* This is displaying our data that was received from our useEffect invocation of props.getCars() */}
      {props.carReducer.cars.map((e, i) => (
        <p key={i}>{e.make} {e.model}</p>
      ))}
    </div>
  )
};

//Can write it like this if you want all the data from redux state
// const mapStateToProps = state => state

//used if you want specific data from redux
const mapStateToProps = state => {
  return {
    username: state.username
  }
}

//this is an object not a function. Allows me to use my actions from redux.
const mapDispatchToProps = {
  getUser,
  clearUser,
  getCars
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExamples);