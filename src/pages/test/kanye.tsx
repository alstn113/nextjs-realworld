import { useAppDispatch, useAppSelector } from '@/app/hook';
import { getKanyeQuote, selectKanye } from '@/features/kanyeSlice';

const Kanye = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector(selectKanye);
  return (
    <div>
      <h2>kanye redux-toolkit</h2>
      {status === 'pending' && <p>Loading...</p>}
      {data && <p>{data.quote}</p>}
      {error && <p>Oops, something went wrong {error}</p>}
      <button
        onClick={() => dispatch(getKanyeQuote())}
        disabled={status === 'pending'}
      >
        Generate Kanye Quote
      </button>
    </div>
  );
};

export default Kanye;
