import { apiService } from '../services';
import * as endpoints from '../config/endpoints';
import { SONGS } from './actionTypes';

export const fetchSongsAction = async (dispatch, data) => {
  dispatch({ type: SONGS.feching });

  try {
    const songs = await apiService.get(`${endpoints.GET_SONGS}/${data.page}`);

    if (songs.length) {
      return dispatch({ type: SONGS.success, payload: songs });
    }

    return dispatch({ type: SONGS.paginationEnded });

  } catch (error) {
    return dispatch({ type: SONGS.error, payload: error });
  }
};

export const likeSongAction = async (dispatch, data) => {
  dispatch({ type: SONGS.likeFetching });

  try {
    const songs = await apiService.post(endpoints.POST_LIKE_BY_ID, data);
    return dispatch({ type: SONGS.likeSuccess, payload: data.id });

  } catch (error) {
    return dispatch({ type: SONGS.likeError, payload: error });
  }
};

export const commentSongAction = async (dispatch, data) => {
  dispatch({ type: SONGS.commentFetching });

  try {
    const songs = await apiService.post(endpoints.POST_MESSAGE_BY_ID, data);
    return dispatch({ type: SONGS.commentSuccess, payload: data.id });

  } catch (error) {
    return dispatch({ type: SONGS.commentError, payload: error });
  }
};

export const clearLikeError = (dispatch) => {
  return dispatch({ type: SONGS.likeSuccess });
};

export const clearCommentError = (dispatch) => {
  return dispatch({ type: SONGS.commentSuccess });
};

export const setCurrentSong = (dispatch, data) => {
  return dispatch({ type: SONGS.setCurrent, payload: data.index });
};
