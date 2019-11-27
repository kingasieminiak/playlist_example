import React, { useEffect, useContext, useState } from 'react';

import { Store } from '../store';
import { fetchSongsAction } from '../store/actions';

import GlobalStyle from '../styles/globalStyles';
import { LoaderAnimation } from './_styled/PageContent';
import Playlist from './Playlist';
import Jumbo from './Jumbo';
import ErrorLabel from './ErrorLabel';

function App() {
  const { state, dispatch } = useContext(Store);
  const [ page, setPate ] = useState(1);

  useEffect(() => {
    fetchSongsAction(dispatch, { page: page });
  }, [page]);

  const loadSongs = () => setPate(page+1);

  return (
    <div>
      <GlobalStyle />
      <Jumbo />

      {(state.songs.length === 0 && state.songsFeching) && <LoaderAnimation />}
      {!!state.songsFetchingError && <ErrorLabel text={state.songsFetchingError}/>}

      {state.songs.length !== 0 && <Playlist loadSongs={loadSongs} />}
    </div>
  );
}

export default App;
