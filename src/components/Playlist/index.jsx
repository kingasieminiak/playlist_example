import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Store } from '../../store';
import { fetchSongsAction, clearLikeError, clearCommentError } from '../../store/actions';

import { PageContent, ColumnSM, ColumnMD } from '../_styled/PageContent';
import List from '../List';
import Player from '../Player';
import Modal from '../Modal';
import Card from '../Card';
import ErrorLabel from '../ErrorLabel';

function Playlist({ loadSongs }) {
  const { state, dispatch } = useContext(Store);
  const [ isModalOpened, toggleModal ] = useState(false);
  const [ modalData, setModalData ] = useState(null);

  function openModal(index) {
    setModalData(state.songs[index]);
    toggleModal(true);
  }

  function closeModal() {
    toggleModal(false);
  }

  function handleLikeError() {
    clearLikeError(dispatch);
  }

  function handleCommentError() {
    clearCommentError(dispatch);
  }

  return (
    <PageContent>
      {isModalOpened && <Modal onClick={closeModal}><Card data={modalData}/></Modal>}
      {state.commentError && <ErrorLabel action={handleCommentError} text={state.commentError} />}
      {state.likeError && <ErrorLabel action={handleLikeError} text={state.likeError} />}

      <ColumnMD>
        <PageContent.Title>Top songs</PageContent.Title>
        <List data={state.songs} openModal={openModal} />

        <PageContent.Button onClick={loadSongs} disabled={state.paginationEnded}>
          show more
        </PageContent.Button>
      </ColumnMD>

      <ColumnSM>
        <PageContent.Title>Now playing</PageContent.Title>
        <Player />
      </ColumnSM>
    </PageContent>
  );
}

export default Playlist;

Playlist.propTypes = {
  loadSongs: PropTypes.func.isRequired,
};
