import { GET_BOOKS_SUCCESS } from '../constants/actionTypes';

export const getBooksSuccess = (books) => ({
  type: GET_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://books-list-api.vercel.app/books', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
        },
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      dispatch(getBooksSuccess(data));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
