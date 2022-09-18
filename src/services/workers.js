function getAll(path) {
  return fetch(path, {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }).then((res) => res.json().then((data) => data));
}

export default getAll;
