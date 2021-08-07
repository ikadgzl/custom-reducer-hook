import { useState } from 'react';

const INITIAL_STATE = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };

    default:
      break;
  }
};

const useReducerHook = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    const nextState = reducer(state, action);
    setState(nextState);
  };

  return [state, dispatch];
};

function App() {
  const [state, dispatch] = useReducerHook(reducer, INITIAL_STATE);

  const incrementNumber = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrementNumber = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className='App'>
      <div>Count: {state.count}</div>

      <button onClick={incrementNumber}>INCREMENT</button>
      <button onClick={decrementNumber}>DECREMENT</button>
    </div>
  );
}

export default App;
