// // 함수 컴포넌트
// import React, {useReducer, useState} from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({type: 'INCREMENT'});
//   };
//   const onDecrease = () => {
//     if (number > 0) {
//       dispatch({type: 'DECREMENT'});
//     }
//   };
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;

// class형 컴포넌트
import React, {Component, useReducer} from 'react';

class Counter extends Component {
  // state 관리 유형 1
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };
  // }

  // state 관리 유형 2 (CRA로 만든 프로젝트에서만 사용 가능.)
  state = {
    counter: 0,
    fixed: 1,
  };

  // constructor의 사용방법
  // constructor(props) {
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }

  // 화살표 함수의 사용방법 (CRA로 만든 프로젝트에서만 사용 가능.)
  handleIncrease = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        console.log(this.state.counter);
      },
    );
  };

  handleDecrease = () => {
    if (this.state.counter > 0) {
      this.setState(state => ({
        counter: state.counter - 1,
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;
