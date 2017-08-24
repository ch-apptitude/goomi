/**
*
* Loader
*
*/

import React from 'react';
import styled from 'styled-components';

import Theme from 'assets/theme';

const LoaderContainer = styled.div`
  height: 0;
  width: 100%;
  min-height: 24px;
  .spinner {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: -10px;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 5px solid transparent;
      border-top-color: $cyan;
    }

    &::before {
      z-index: 100;
      animation: spin 1s infinite;
    }

    &::after {
      border: 5px solid #cecccb;
    }
  }
`;
const Loader = ({className}) => (
  <LoaderContainer className={className}>
    <div className="spinner" />
  </LoaderContainer>
);

export default Loader;
