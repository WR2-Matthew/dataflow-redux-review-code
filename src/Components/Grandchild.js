import React from 'react';

const Grandchild = props => {

  console.log(props) //This component is only getting one prop called hometown.
  return (
    <div>
      <p>{props.hometown}</p>
    </div>
  )
}

export default Grandchild;