/*
 *
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';

import Text from 'features/common_ui/components/Text';

const StyledHome = styled.div`
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
  <StyledHome>
    <div>
      <Text tag="h2" color="white" message="Made by" />
      <Text tag="h1" size={60} color="white" message="APPTITUDE" />
      <Text tag="a" size={20} color="white" href="https://apptitude.ch" target="_blank" rel="noopener noreferrer" message="apptitude.ch" />
    </div>
  </StyledHome>
);
export default HomePage;
