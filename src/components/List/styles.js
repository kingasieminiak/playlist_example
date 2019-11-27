import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

List.Item = styled.li`
  & + & {
    margin-top: .5rem;
  }
`;
