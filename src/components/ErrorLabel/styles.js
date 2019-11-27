import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const ErrorLabel = styled.div`
  position: fixed;
  top: 5px;
  left: 10px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
  width: 95%;
  max-width: 350px;
  margin: .5rem 0;
  background: ${colors.errorLight};
  border: 1px solid ${colors.error};
  border-radius: 4px;
`;

ErrorLabel.Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: .75rem;
  font-weight: 600;
  color: ${colors.error};
  letter-spacing: .4px;
`;

ErrorLabel.Action = styled.button`
  position: relative;
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  border-radius: 3px;
  outline-color: ${colors.errorLight};

  &:before,
  &:after {
    position: absolute;
    width: 68%;
    height: 2px;
    top: calc((100% - 2px) / 2);
    left: calc((100% - 68%) / 2);
    padding: 0;
    background: ${colors.error};
    border-radius: 20px;
    content: '';
    transition: background .3s ease-in-out;
  }

  &:before { transform: rotate(45deg); }

  &:after { transform: rotate(-45deg); }

  &:hover {
    background: ${colors.error};
    opacity: 1;

    &:before,
    &:after {
      background: ${colors.white};
    }
  }
`;
