export function searchIndexAction(item = {}) {
  return {
    type: 'SEARCH',
    payload: item
  };
}