import store from './Store';

export function persistStateInLocalStorage(nameState, data) {
  localStorage.setItem(nameState, JSON.stringify(data));
}

export function getStateOnLocalStore(nameState) {
  const actualState = localStorage.getItem(nameState);
  if (actualState)
    return JSON.parse(actualState);
  else
    return [];
}

export function subscribeStateOfLocalStoreInStore(nameState, data) {
  store.subscribe(() => {
    persistStateInLocalStorage(nameState, data);
  })
}