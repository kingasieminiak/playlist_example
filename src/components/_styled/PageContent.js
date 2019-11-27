import React from 'react';
import styled, { css} from 'styled-components';
import { colors, wave } from '../../styles/variables';
import mediaMin, { breakpoints, container } from '../../styles/mediaQueries';
import { Button } from './Actions';

function createCSS() {
  let styles = '';

  for (let i = 2; i <= 5; i++) {
     styles += `
      span:nth-child(${i}) {
        animation-delay: ${`0.${i}s`};
      }
    `;
  }

  return css`${styles}`;
}

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
  margin: 2rem 0;
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

export const Wave = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 120px;
  height: 120px;
  padding: 2rem;
  margin: 0 auto;

  span {
    display: block;
    width: calc(100% / 5);
    background: ${colors.accent};
    border: 1px solid ${colors.background};
    border-radius: 5px;
    animation: ${wave} 1.5s infinite ease-in-out;
  }

  ${createCSS()};
`;

export const LoaderAnimation = () => (
  <Wave>
    <span/><span/><span/><span/><span/>
  </Wave>
);
