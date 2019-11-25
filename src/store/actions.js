import { apiService } from '../services';
import * as endpoints from '../config/endpoints';
import { SONGS } from './actionTypes';

export const fetchSongsAction = async (dispatch, data) => {
  dispatch({ type: SONGS.feching });

  try {
    const songs = await apiService.get(endpoints.GET_SONGS);

    return dispatch({ type: SONGS.success, payload: songs });
  } catch (error) {
    return dispatch({ type: SONGS.error, payload: error });
  }
};
