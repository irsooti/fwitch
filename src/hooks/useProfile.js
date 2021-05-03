import { useEffect, useReducer } from 'react';
import { getUsers } from '../api/twitch';

const initialState = {
  loading: true,
  error: '',
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        user: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

const useProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getUsers()
      .then((response) => {
        if (response.status > 200) {
          dispatch({ type: 'FETCH_ERROR', payload: response.error });
        }
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data[0] });
      })
      .catch(() => {
        dispatch({ type: 'FETCH_ERROR', payload: 'Something goes wrong!' });
      });
  }, []);

  return state;
};

export default useProfile;
