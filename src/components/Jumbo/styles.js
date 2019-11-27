import styled from 'styled-components';
import { colors, fullsizeCentered } from '../../styles/variables';
import mediaMin, { breakpoints, container } from '../../styles/mediaQueries';

export const Jumbo = styled.header`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: ${colors.accent};

  ${mediaMin(breakpoints.md)} {
    height: 550px;
  }
`;

Jumbo.Image = styled.img`
  ${fullsizeCentered};

  mix-blend-mode: multiply;
  opacity: .9;
`;

Jumbo.Container = styled.div`
  ${container};

  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
  color: ${colors.white};
  text-align: center;

  ${mediaMin(breakpoints.lg)} {
    justify-content: center;
    font-size: 5rem;
    text-align: right;
    padding-bottom: 0;
  }
`;

Jumbo.Logo = styled.img`
  align-self: center;
  width: 100px;
  margin-top: 1rem;

  ${mediaMin(breakpoints.lg)} {
    margin-top: 2rem;
    align-self: flex-end;
  }
`;

Jumbo.Title = styled.h1`
  font-size: 2.5rem;

  ${mediaMin(breakpoints.lg)} {
    margin: 0;
    font-size: 5rem;
  }
`;

Jumbo.Subtitle = styled.h2`
  font-size: 1rem;

  ${mediaMin(breakpoints.lg)} {
    font-size: 1.4rem;
  }
`;

Jumbo.TextContainer = styled.div`
  ${mediaMin(breakpoints.lg)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
`;
