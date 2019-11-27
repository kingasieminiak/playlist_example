import styled, { keyframes, css } from 'styled-components';
import { colors, fullsizeCentered } from '../../styles/variables';
import mediaMin, { breakpoints } from '../../styles/mediaQueries';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Player = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem 2rem;
  text-align: center;
  background-color: ${colors.white};
  border-radius: 4px;

  ${mediaMin(breakpoints.md)} {
    padding: 2rem 1rem;
  }

  ${mediaMin(breakpoints.lg)} {
    position: sticky;
    top: 1rem;
  }
`;

Player.Thumbnail = styled.figure`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0;
  margin-bottom: 1rem;
  background: #131313;
  border: 2px solid ${colors.text};
  border-radius: 100%;
  box-shadow: 0 1px 8px 2px ${colors.border};
  overflow: hidden;
  transition: all .3s ease;
  animation: ${rotate} 4s linear infinite;
  animation-play-state: ${props => props.active ? 'running' : 'paused'};
  background-image: radial-gradient(center center, circle closest-side, transparent 43%, transparent 53%,
    #000 54%, transparent 54%, transparent 64%,
    #000 65%, transparent 65%, transparent 75%,
    #000 76%, transparent 76%, transparent 86%,
    #000 87%, transparent 87%, transparent 97%,
    #000 98%, transparent 98% );
  background-image: -webkit-radial-gradient(center center, circle closest-side, transparent 43%, transparent 53%,
    #000 54%, transparent 54%, transparent 64%,
    #000 65%, transparent 65%, transparent 75%,
    #000 76%, transparent 76%, transparent 86%,
    #000 87%, transparent 87%, transparent 97%,
    #000 98%, transparent 98% );

  &:after {
    z-index: 10;
    position: absolute;
    top: calc((100% - 10px) / 2);
    left: calc((100% - 10px) / 2);
    width: 10px;
    height: 10px;
    background: ${colors.white};
    border-radius: 100%;
    content: "";
  }
`;

Player.Light = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  border-radius: 50%;
  background-image: linear-gradient(-160deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%);
`;

Player.Cover = styled.div`
  z-index: 10;
  position: absolute;
  top: calc((100% - 80px) / 2);
  left: calc((100% - 80px) / 2);
  width: 80px;
  height: 80px;
  background: ${colors.primary};
  border-radius: 100%;
  overflow: hidden;
`;

Player.Image = styled.img`
  ${fullsizeCentered};
  mix-blend-mode: multiply;
`;

Player.Title = styled.h4`
  margin: 0;
  line-height: 1.2;
`;

Player.Subtitle = styled.p`
  margin: 0;
`;

Player.Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

Player.Action = styled.div`
  & + & {
    margin-left: 2rem;
  }
`;

Player.Progress = styled.progress`
  width: 100%;
  height: 5px;
  margin-top: 1rem;

  &[value] {
    -webkit-appearance: none;
    appearance: none;
  }

  &[value]::-webkit-progress-bar {
    background-color: ${colors.border};
    border: 0;
    border-radius: 4px;
  }

  &[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(0deg, ${colors.primary} 0%, ${colors.accent} 100%);
    border-radius: 4px;
  }
`;
