import workerReducer, {
  saveWorkers, deleteWorker, createWorker, updateWorker,
} from './workerSlice';

describe('workers reducer', () => {
  const initialState = {
    workers: [],
  };
  const newWorkers = [
    {
      id: 4, name: 'Nichole', email: 'nliptrod3@reverbnation.com', age: 25, salary: 2033.36,
    },
    {
      id: 5, name: 'Laurie', email: 'livushkin4@prnewswire.com', age: 50, salary: 2968.94,
    },
  ];
  it('should handler initial state', () => {
    expect(workerReducer(undefined, { type: 'unknow' })).toEqual({
      workers: [],
    });
  });
  it('should handle saveWorkers', () => {
    const actual = workerReducer(initialState, saveWorkers(newWorkers));
    expect(actual.workers).toEqual(newWorkers);
  });
  it('should handle deleteWorker', () => {
    const workersSaved = workerReducer(initialState, saveWorkers(newWorkers));
    const actual = workerReducer(workersSaved, deleteWorker(5));
    expect(actual.workers).toHaveLength(1);
  });
  it('should handle createWorker', () => {
    const actual = workerReducer(initialState, createWorker(newWorkers[1]));
    expect(actual.workers).toEqual(Array(newWorkers[1]));
  });
  it('should handle updateWorker', () => {
    const workerUpdated = {
      id: 5, name: 'Laura', email: 'livushkin4@prnewswire.com', age: 50, salary: 2968.94,
    };
    const workersSaved = workerReducer(initialState, saveWorkers(newWorkers));
    const actual = workerReducer(workersSaved, updateWorker(workerUpdated));
    expect(actual.workers[2]).toEqual(workerUpdated);
  });
});
