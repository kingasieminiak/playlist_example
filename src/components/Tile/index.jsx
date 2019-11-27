import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

import { ActionPlayer, Action } from '../_styled/Actions';
import { Heart, Comment } from '../Icons';
import { setCurrentSong, likeSongAction } from '../../store/actions';
import { Store } from '../../store';

function Tile({ data, openModal }) {
  const { state: { currentIndex, likeSuccess }, dispatch } = useContext(Store);
  const [animate, setAnimationState] = useState(false);

  useEffect(() => {
    if (likeSuccess === data.id) {
      setAnimationState(true);
    }
  }, [likeSuccess]);

  function handleSelectSong(e) {
    e.stopPropagation();
    e.preventDefault();

    if (data.index !== currentIndex) {
      setCurrentSong(dispatch, { index: data.index });
    }
  }

  function handleOpenModal(e) {
    e.stopPropagation();
    openModal(data.index);
  }

  function handleLikeSong(e) {
    e.stopPropagation();
    likeSongAction(dispatch, { id: data.id }, setAnimationState);
  }

  return (
    <S.Tile active={currentIndex === data.index} onClick={handleSelectSong}>
      <S.Tile.Thumbnail>
        <S.Tile.Image src={data.cover_image_path} />
      </S.Tile.Thumbnail>

      <S.Tile.TextContainer>
        <S.Tile.Title>{data.name}</S.Tile.Title>
        <S.Tile.Subtitle>{data.artist_name}</S.Tile.Subtitle>
      </S.Tile.TextContainer>

      <S.Tile.Actions>
        <S.Tile.Action onClick={handleOpenModal}>
          <Action><Comment margin-top="2px" /></Action>
        </S.Tile.Action>

        <S.Tile.ActionHeart
          onClick={handleLikeSong}
          animate={animate}
          onAnimationEnd={() => setAnimationState(false)}
        >
          <Action><Heart margin-top="2px" /></Action>
        </S.Tile.ActionHeart>
      </S.Tile.Actions>

      <S.Tile.Progress value={0.4} max={1} />
    </S.Tile>
  );
}

export default Tile;

Tile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist_name: PropTypes.string.isRequired,
    cover_image_path: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
