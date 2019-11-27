import styled from 'styled-components';
import { colors, fullsizeCentered } from '../../styles/variables';
import mediaMin, { breakpoints, container } from '../../styles/mediaQueries';

const BUTTON_SIZE = '30px';

export const Button = styled.button`
  position: relative;
  height: ${BUTTON_SIZE};
  line-height: ${`calc(${BUTTON_SIZE} - 3px)`};
  padding: 0 .6rem;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .7px;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: border .3s ease-in-out, color .3s ease-in-out, background .3s ease-in-out;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.primary};

  &:hover { opacity: .8; }

  &:active { transform: translateY(2px); }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`;

export const Action = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: ${colors.background};
  color: ${colors.text};
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    color: ${colors.primary};
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    color: ${colors.border}

    &:hover {
    color: ${colors.border};
    }
  }
 `;

export const ActionPlayer = styled(Action)`
  width: 40px;
  height: 40px;

  box-shadow:
    inset 2px 3px 4px #f5f4f4,
    inset -2px -5px 4px #fbfbfb,
    3px 6px 11px 2px #f0f0f0,
    4px -6px 3px 0px #ffffff;

  &:active {
    box-shadow:
      inset 2px 2px 13px #ececec,
      inset -3px -2px 7px #ffffff,
      2px 2px 5px 0px #ededed,
      -1px -2px 5px 2px #ffffff;
  }
`;

export const ActionPlayerRound = styled(ActionPlayer)`
  border-radius: 100%;
  padding-top: 3px;
  padding-left: 9px;

  ${props => props.active && `
    box-shadow:
        inset 2px 2px 13px #ececec,
        inset -3px -2px 7px #ffffff,
        2px 2px 5px 0px #ededed,
        -1px -2px 5px 2px #ffffff;
  `}
`;

export const ActionClose = styled(Action)`
  width: 25px;
  height: 25px;
  line-height: 25px;
  border: 3px solid ${colors.border};
  color: ${colors.border};

  &:before,
  &:after {
    position: absolute;
    width: 70%;
    height: 3px;
    top: calc((100% - 3px - 1px) / 2);
    left: calc((100% - 70%) / 2);
    padding: 0;
    background: ${colors.border};
    border-radius: 20px;
    content: '';
    transition: background .3s ease-in-out;
  }

  &:before { transform: rotate(45deg); }

  &:after { transform: rotate(-45deg); }

  &:hover {
    color: ${colors.white};
    border-color: ${colors.primary};
    background: ${colors.primary};
    opacity: 1;

    &:before,
    &:after {
      background: ${colors.white};
    }
  }
`;
