import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Tile from '../Tile';

function List({ data, openModal }) {
  return (
    <S.List>
      {data.map((item, index) => (
        <S.List.Item key={item.id}>
          <Tile data={{...item, index}} openModal={openModal} />
        </S.List.Item>
      ))}
    </S.List>
  );
}

export default List;

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openModal: PropTypes.func.isRequired,
};
