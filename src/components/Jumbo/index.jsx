import React from 'react';
import * as S from './styles';
import BgImage from '../../assets/background.jpeg';
import Logo from '../../assets/jam-logo.png';

function Jumbo() {
  return (
    <S.Jumbo>
      <S.Jumbo.Image src={BgImage} />

      <S.Jumbo.Container>
        <S.Jumbo.Logo src={Logo} />

        <S.Jumbo.TextContainer>
          <S.Jumbo.Title>Music Maker JAM</S.Jumbo.Title>
          <S.Jumbo.Subtitle>Drop a track. Share it with the world.</S.Jumbo.Subtitle>
        </S.Jumbo.TextContainer>
      </S.Jumbo.Container>
    </S.Jumbo>
  );
}

export default Jumbo;
