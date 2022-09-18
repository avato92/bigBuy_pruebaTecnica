import './workerComponent.css';
import { useSelector } from 'react-redux';
import useWorker from '../../hooks/useWorker';

import Loading from '../loading/Loading';
import Error from '../error/Error';
import WorkerTable from '../workerTable/WorkerTable';
import { selectWorkers } from './workerSlice';

function WorkerComponent() {
  const [loading, error] = useWorker();
  const workers = useSelector(selectWorkers);

  return (
    <main className="workers__container">
      {loading && <Loading />}
      {error && <Error />}
      {workers.length > 0 && <WorkerTable workers={workers} />}
    </main>
  );
}

export default WorkerComponent;
