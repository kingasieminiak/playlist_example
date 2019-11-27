import React, { useEffect, useState, useContext, createRef } from 'react';
import * as S from './styles';

import { ActionPlayerRound, Action } from '../_styled/Actions';
import { Play, Pause, ArrowLeft, ArrowRight } from '../Icons';

import { setCurrentSong } from '../../store/actions';
import { Store } from '../../store';

function Player() {
  const { state, dispatch } = useContext(Store);
  const [ paused, setPlayer ] = useState(true);
  const [ progress, setProgress ] = useState(0);

  const audioRef = createRef();
  const data = state.songs[state.currentIndex];

  useEffect(() => {
    !paused && setPlayer(true);
    audioRef.current.pause();
  }, [state.currentIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    audio.addEventListener('ended', () => {
      setPlayer(true);
    });

    audio.addEventListener('timeupdate', () => {
      setProgress(audio.currentTime / audio.duration || 0);
    });
  }, []);

  function togglePlayer() {
    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    setPlayer(!paused);
  }

  function setTo(reverse = false) {
    audioRef.current.pause();

    let index = state.currentIndex;
    index += reverse ? 1 : -1;

    if (index < 0) {
      index = state.songs.length - 1;
      setCurrentSong(dispatch, { index });
    }

    if (index > state.songs.length - 1 ) {
      index = 0;
      setCurrentSong(dispatch, { index });
    }

    setCurrentSong(dispatch, { index });
  }

  return (
    <S.Player>
      <S.Player.Thumbnail active={!paused}>
        <S.Player.Cover><S.Player.Image src={data.cover_image_path} /></S.Player.Cover>
        <S.Player.Light />
      </S.Player.Thumbnail>

      <S.Player.Title>{data.name}</S.Player.Title>
      <S.Player.Subtitle>{data.artist_name}</S.Player.Subtitle>

      <audio ref={audioRef} src={data.music_file_path}></audio>
      <S.Player.Progress value={progress} max={1} />

      <S.Player.Actions>
        <S.Player.Action onClick={() => setTo(false)}>
          <ActionPlayerRound><ArrowLeft width="16" height="16" /></ActionPlayerRound>
        </S.Player.Action>

        <S.Player.Action onClick={togglePlayer}>
          <ActionPlayerRound active={!paused}>
            {paused ? <Play width="16" height="16" /> : <Pause width="16" height="16" />}
          </ActionPlayerRound>
        </S.Player.Action>

        <S.Player.Action onClick={() => setTo(true)}>
          <ActionPlayerRound><ArrowRight width="16" height="16" /></ActionPlayerRound>
        </S.Player.Action>
      </S.Player.Actions>
    </S.Player>
  );
}

export default Player;
