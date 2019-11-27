import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

import { Store } from '../../store';
import { commentSongAction } from '../../store/actions';

function Card({ data }) {
  const { state, dispatch } = useContext(Store);
  const [ text, setText ] = useState('');
  const [ isSubmitted, setSubmit] = useState(false);

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSuccess(e) {
    setText('');
    setSubmit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    commentSongAction(dispatch, { id: data.id, message: text, type: 'song' }, handleSuccess);
  }

  return (
    <S.Card>
      <S.Card.Title>{data.name}</S.Card.Title>
      <S.Card.Subtitle>{data.artist_name}</S.Card.Subtitle>

      {!isSubmitted && (
        <S.Card.Form>
          <S.Card.Label htomFor="comment">Type your comment (min. 20 characters)</S.Card.Label>
          <S.Card.Textarea type="text" onChange={handleTextChange} rows="10" id="comment"></S.Card.Textarea>
          <S.Card.Submit type='submit' onClick={handleSubmit} disabled={text.length < 20}>Post</S.Card.Submit>
        </S.Card.Form>
      )}

      {isSubmitted && (
        <S.Card.Success>
          <S.Card.Title>Post successfully sent!</S.Card.Title>
          <S.Card.Submit onClick={() => setSubmit(false)}>Create new post</S.Card.Submit>
        </S.Card.Success>
      )}
    </S.Card>
  );
}

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist_name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
