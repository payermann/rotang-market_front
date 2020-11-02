import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';

function counter(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}
let store = createStore(counter)

store.subscribe(() => console.log(store.getState().value))
store.dispatch({ type: 'counter/incremented'})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
