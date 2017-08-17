/*
 *
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';

import Text from 'features/common_ui/components/Text';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  color: white;

  > div {
    margin: auto;
    display: flex;
  }
`;
const Link = styled(Text)`
      margin: auto auto 0 auto;
`;

const HomePage = () => (
  <Container>
    <div>
      <Text tagName="h2" color="white">
        Made by
      </Text>
      <Text tagName="h1" size={60} color="white">
        APPTITUDE
      </Text>
      <Link tagName="a" size={20} color="white" href="https://apptitude.ch" target="_blank" rel="noopener noreferrer">
        apptitude.ch
      </Link>
    </div>
  </Container>
);
export default HomePage;
