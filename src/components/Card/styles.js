import styled from 'styled-components';
import { colors, fullsizeCentered } from '../../styles/variables';
import mediaMin, { breakpoints, container } from '../../styles/mediaQueries';
import { Button } from '../_styled/Actions';

export const Card = styled.article`
`;

Card.Title = styled.h4`
  font-size: 2rem;
  margin: 0;
  line-height: 1.2;
`;

Card.Subtitle = styled.p`
  margin: 0;
  color: ${colors.textLighten};
`;

Card.Form = styled.form`
  margin-top: 2rem;
`;

Card.Label = styled.label`
  display: block;
  margin-bottom: .5rem;
  color: ${colors.textLighten};
`;

Card.Textarea = styled.textarea`
  width: 100%;
  margin: 0;
  padding: .5rem;
  font-size: 1rem;
  resize: vertical;
  background-color: ${colors.white};
  border: 2px solid ${colors.border};
  border-radius: 4px;
  box-shadow: 0 1px 20px 2px #f2f2f2;
  transition: border-color .2s ease-in-out;
  outline-color: ${colors.primary};
  outline-width: 1px;

  &:focus {
    border-color: ${colors.primary};
  }
`;

Card.Submit = styled(Button)`
  margin-top: 1rem;
`;

Card.Success = styled.div`
  text-align: center;
`;
