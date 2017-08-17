/*
 *
 * Register
 *
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  color: white;

  > div {
    margin: auto;
    display: flex;
    > h1 {
      font-size: 60px;
    }
    > a {
      font-size: 20px;
      margin: auto auto 0 auto;
    }
  }
`;

const HomePage = () => (
  <Container>
    <div>
      <h2>Made by</h2>
      <h1>APPTITUDE</h1>
      <a href="https://apptitude.ch" target="_blank" rel="noopener noreferrer">
        apptitude.ch
      </a>
    </div>
  </Container>
);
export default HomePage;
