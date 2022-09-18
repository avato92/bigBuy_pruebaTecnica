import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveWorkers } from '../features/workerComponent/workerSlice';
import getAll from '../services/workers';

function useWorker() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getAll('/data/response.json').then((res) => {
      dispatch(saveWorkers(res));
    }).catch((err) => {
      setError(err);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return [loading, error];
}

export default useWorker;
