import styled, { keyframes, css } from 'styled-components';
import { colors, fullsizeCentered } from '../../styles/variables';
import mediaMin, { breakpoints, container } from '../../styles/mediaQueries';

const grow = keyframes`
  0% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; ransform: scale(1); }
  100% { opacity: 0; ransform: scale(0); }
`;

export const Tile = styled.article`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .5rem;
  padding-bottom: 1rem;
  border: 1px solid #f2f1f2;
  border-radius: 4px;
  box-shadow: inset 0 0 9px #f2f2f2;
  cursor: pointer;
  text-align: left;
  transition: background .2s ease-in-out;

  &:hover {
    background-color: ${colors.white};
  }

  ${props => props.active && `
    background-color: ${colors.white};
    box-shadow: 0 10px 15px 0px #e7e7e7;
  `};

  ${mediaMin(breakpoints.md)} {
    padding: 1rem;
    padding-bottom: 2rem;
  }

  :active {
    transform: translateY(2px);
  }
`;

Tile.Thumbnail = styled.figure`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin: 0;
  margin-right: 1rem;
  border-radius: 4px;
  background: ${colors.primary};
  border: 2px solid ${colors.white};
  box-shadow: 0 1px 8px 2px ${colors.border};
  overflow: hidden;

  ${mediaMin(breakpoints.md)} {
    width: 70px;
    height: 70px;
  }
`;

Tile.Image = styled.img`
  ${fullsizeCentered};
  opacity: .8;
`;

Tile.TextContainer = styled.div`
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: .5rem;
`;

Tile.Title = styled.h4`
  max-width: 100%;
  margin: 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

Tile.Subtitle = styled.p`
  max-width: 100%;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.textLighten};
`;

Tile.Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
`;

Tile.Action = styled.div`
  & + & {
    margin-left: .5rem;
  }
`;

Tile.ActionHeart = styled(Tile.Action)`
  position: relative;

  &:before {
    position: absolute;
    width: 50px;
    height: 50px;
    top: calc((100% - 50px) / 2);
    left: calc((100% - 50px) / 2);
    padding: 0;
    background: ${colors.primary};
    border-radius: 100%;
    content: '';
    z-index: 1;
    transform: ${props => props.animate ? 'scale(1)' : 'scale(0)'};
    animation: ${props => props.animate && css`${grow} .4s linear`};
  }
`;

Tile.Progress = styled.progress`
  position: absolute;
  left: .5rem;
  bottom: .5rem;
  width: calc(100% - 1rem);
  height: 3px;

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

  ${mediaMin(breakpoints.md)} {
    left: 1rem;
    bottom: 1rem;
    width: calc(100% - 2rem);
  }
`;
