import styled from 'styled-components';
import { mediaMax, breakpoints } from '../../styles/mediaQueries';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${mediaMax(breakpoints.md)} {
    height: 350px;
    overflow-y: scroll;
    padding: .2rem;
    padding-bottom: 1rem;
  }
`;

List.Item = styled.li`
  & + & {
    margin-top: .5rem;
  }
`;
