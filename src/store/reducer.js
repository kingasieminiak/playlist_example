import { SONGS } from './actionTypes';

export const initialState = {
  songs: [],
  songsFeching: false,
  songsFetchingError: null,
  paginationEnded: false,

  likeSuccess: null,
  likeFetching: false,
  likeError: null,

  commentSuccess: null,
  commentFetching: false,
  commentError: null,

  currentIndex: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case SONGS.feching:
      return { ...state, songsFeching: true, songsFetchingError: null };
    case SONGS.error:
      return { ...state, songsFeching: false, songsFetchingError: action.payload };
    case SONGS.success:
      return { ...state, songs: [ ...state.songs, ...action.payload], songsFeching: false, songsFetchingError: null };
      case SONGS.paginationEnded:
        return { ...state, paginationEnded: true, songsFeching: false, songsFetchingError: null };

      case SONGS.likeFetching:
        return { ...state, likeFetching: true, likeSuccess: null, likeError: null };
      case SONGS.likeSuccess:
        return { ...state, likeFetching: false, likeSuccess: action.payload, likeError: null };
      case SONGS.likeError:
        return { ...state, likeFetching: false, likeSuccess: null, likeError: action.payload };

      case SONGS.commentFetching:
        return { ...state, commentSuccess: null, commentFetching: false, commentError: null };
      case SONGS.commentSuccess:
        return { ...state, commentSuccess: action.payload, commentFetching: true, commentError: null };
      case SONGS.commentError:
        return { ...state, commentSuccess: null, commentFetching: false, commentError: action.payload };

      case SONGS.setCurrent:
        return { ...state, currentIndex: action.payload };
    default:
      return state;
  }
}
