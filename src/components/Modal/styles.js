import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { ActionClose } from '../_styled/Actions';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background: rgba(0, 0, 0, .5);
  visibility: visible;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, .03);
    border-radius: 30px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .4);
    border-radius: 30px;
  }
`;

Modal.Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 1.5rem;
  cursor: pointer;
`;

Modal.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 1.5rem;
  margin-bottom: 4rem;
  color: ${colors.text};
  background: ${colors.background};
  border-radius: 4px;
  overflow: hidden;
  cursor: default;
`;

Modal.ButtonClose = styled(ActionClose)`
  margin-left: auto;
`;

Modal.Content = styled.div`
  width: 100%;
`;
