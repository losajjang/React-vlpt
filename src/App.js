import React from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <>
      <Wrapper>
        <Hello name="React" color="red" isSpecial />
        <Hello color="pink" />
      </Wrapper>
    </>
  );
}

export default App;
