import { SONGS } from './actionTypes';

export const initialState = {
  songs: [],
  songsFeching: false,
  songsFetchingError: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case SONGS.feching:
      return { ...state, songsFeching: true, songsFetchingError: null };
    case SONGS.error:
      return { ...state, songsFeching: false, songsFetchingError: action.payload };
    case SONGS.success:
      return { ...state, songs: action.payload, songsFeching: false, songsFetchingError: null };
    default:
      return state;
  }
}
