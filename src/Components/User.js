import React, { useState } from 'react';
import GrandChild from './Grandchild';

const User = props => {
  // need to pass in props as a parameter for us to be able to access them.

  // newName is the 'state'/ name of our data
  //setNewName is the function we use to change newName
  //useState is invoked with the initial value of newName
  let [newName, setNewName] = useState('')

  const nameChange = () => {
    props.nameFn(newName);
    setNewName('')
  }

  console.log(props)
  return (
    <div>
      {/* These props have the names username and hometown because thats what 
      we assigned the data to in App.js */}
      <p>{props.username}</p>
      <p>{props.hometown}</p>

      <input value={newName} onChange={e => setNewName(e.target.value)} />
      <button onClick={nameChange} >Change Name</button>
      {/* Just as the name says, Grandchild is a child of User component but a grandchild of
      App.js. It can get data passed to it from User's parent (App.js) */}
      <GrandChild hometown={props.hometown} />
      {/* For ease of following the code I called this prop hometown again but
      I could call it anything I want and give it the value of props.hometown */}
    </div>
  )
}

export default User;