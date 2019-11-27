import styled from 'styled-components';
import { colors } from '../../styles/variables';
import mediaMin, { breakpoints, container } from '../../styles/mediaQueries';
import { Button } from './Actions';

export const PageContent = styled.main`
  ${container};

  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${mediaMin(breakpoints.lg)} {
    flex-direction: row;
  }
`;

PageContent.Button = styled(Button)`
  margin-top: 2rem;
`;

PageContent.Title = styled.h3`
  font-size: 1.6rem;
`;

const Column = styled.div`
  text-align: center;

  ${mediaMin(breakpoints.lg)} {
    padding: .6rem;
    text-align: left;
  }
`;

export const ColumnSM = styled(Column)`
  flex: 0 0 380px;
  margin-top: -4rem;
  background-color ${colors.white};
  border-radius: 4px;
  box-shadow: 0 10px 24px 0px #e7e7e7;

  ${mediaMin(breakpoints.lg)} {
    margin-top: 0;
    background-color ${colors.background};
    box-shadow: none;
  }
`;

export const ColumnMD = styled(Column)`
  flex: 1 0 auto;
  order: 1;

  ${mediaMin(breakpoints.lg)} {
    order: -1;
  }
`;

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colors.primary};
  z-index: 1000;
`;
