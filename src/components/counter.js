import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../app/actions';
// import { increment, decrement } from '../actions/counterActions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div className='title'>
          Counter
      </div>
      <p className='number'> {count}</p>
      <div className='btn-cont'>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

    </div>
  );
};

export default Counter;