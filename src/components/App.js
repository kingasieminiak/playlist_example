import React, { useEffect, useContext } from 'react';
import { Store } from '../store';
import { fetchSongsAction } from '../store/actions';

function App() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.songs.length === 0 && fetchSongsAction(dispatch);
  },[]);

  return (
    <ul>
      {state.songsFeching && <div>feching data...</div>}
      {!!state.songs.length && state.songs.map((e, i) => <li key={i}>{e.artist_name}</li>)}
    </ul>
  );
}

export default App;
