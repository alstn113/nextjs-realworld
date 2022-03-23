import { useAppDispatch, useAppSelector } from '@/app/hook';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '@/features/counterSlice';
import { useState } from 'react';

const Home = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>
        The current number is
        {count.value}
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={e => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  );
};

export default Home;
