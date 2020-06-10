export function searchIndexAction(item = {}) {
  return {
    type: 'SEARCH_INDEX',
    payload: item
  };
}