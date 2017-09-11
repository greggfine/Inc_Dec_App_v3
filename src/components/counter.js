import React from 'react';


const Counter = ({ total }) => {
  return (
    <div className="container">
      <h2 className="App-header">Current Total = <span>{total}</span></h2>
    </div>
  )
}

export default Counter;
