import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from 'container/counterSlice'; // Import actions from container app

function About() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#4a90e2',
    marginBottom: '1rem'
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '2rem'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    margin: '0.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const incrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4caf50',
    color: 'white',
  };

  const decrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Microfrontend App</h1>
      <p style={paragraphStyle}>Counter: {count}</p>
      <button style={incrementButtonStyle} onClick={() => dispatch(increment())}>Increment</button>
      <button style={decrementButtonStyle} onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default About;
