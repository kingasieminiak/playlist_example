import { keyframes, css } from 'styled-components';

export const colors = {
  primary: '#fc2f78',
  accent: '#04acec',
  background: '#fbfbfb',
  border: '#d4d2d6',
  text: '#000000',
  textLighten: 'gray',
  white: '#fff',
  error: '#ff4650',
  errorLight: '#ffb8bc',
};

export const fullsizeCentered = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  minWidth: '100%',
  minHeight: '100%',
  transform: 'translate(-50%, -50%)',
  objectFit: 'cover',
};

export const wave = keyframes`
  0% { height: 20px; transform: scaleY(10px); background: ${colors.accent}; }
  25% { height: 80px; transform: scaleY(20px); background: ${colors.primary}; }
  50% { height: 20px; transform: scaleY(0px); background: ${colors.accent}; }
  100% { height: 20px; transform: scaleY(0px); background: ${colors.accent}; }
`;
