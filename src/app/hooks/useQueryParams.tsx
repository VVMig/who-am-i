import { useHistory } from 'react-router-dom';

export const useQueryParams = (query: string) => {
  const history = useHistory();
  return new URLSearchParams(history.location.search).get(query) || '';
};
