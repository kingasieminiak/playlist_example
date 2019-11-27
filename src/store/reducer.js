import { SONGS } from './actionTypes';

const defaultData = [
  {
    id: 1,
    name: "Name 1",
    artist_name: "Bob the Blob2",
    duration: 31,
    cover_image_path: "https://mm.aiircdn.com/5/243586.jpg",
    music_file_path: "https://mmj-staging.s3-accelerate.amazonaws.com/assets/music_file/d0e2ac05-d3c3-11e9-8f2a-022ed69f96e6.m4a?cb=20190910140918",
  },
  {
    id: 2,
    name: "Name 2",
    artist_name: "Bob the Blob2",
    duration: 31,
    cover_image_path: "https://mm.aiircdn.com/5/243586.jpg",
    music_file_path: "http://www.samisite.com/sound/cropShadesofGrayMonkees.mp3",
  },
  {
    id: 3,
    name: "Name 3",
    artist_name: "Bob the Blob2",
    duration: 31,
    cover_image_path: "https://mm.aiircdn.com/5/243586.jpg",
    music_file_path: "https://mmj-staging.s3-accelerate.amazonaws.com/assets/music_file/d0e2ac05-d3c3-11e9-8f2a-022ed69f96e6.m4a?cb=20190910140918",
  },
  {
    id: 5,
    name: "Name 4",
    artist_name: "Bob the Blob2",
    duration: 31,
    cover_image_path: "https://mm.aiircdn.com/5/243586.jpg",
    music_file_path: "http://www.samisite.com/sound/cropShadesofGrayMonkees.mp3",
  },
  {
    id: 10,
    name: "Name 5",
    artist_name: "Bob the Blob2",
    duration: 31,
    cover_image_path: "https://mm.aiircdn.com/5/243586.jpg",
    music_file_path: "https://mmj-staging.s3-accelerate.amazonaws.com/assets/music_file/d0e2ac05-d3c3-11e9-8f2a-022ed69f96e6.m4a?cb=20190910140918",
  },
];

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
