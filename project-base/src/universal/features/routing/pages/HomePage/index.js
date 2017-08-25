/*
 *
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';

import Theme from 'assets/theme';
import Text from 'features/common_ui/components/Text';

const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  > div {
    margin: auto;
    display: flex;
  }
`;

const HomePage = () => (
  <StyledHome>
    <div>
      <Text tag="h2" color={Theme.Colors.primary} message="Made by" />
      <Text tag="h1" size={60} color={Theme.Colors.primary} message="APPTITUDE" />
      <Text
        tag="a"
        size={20}
        color={Theme.Colors.primary}
        href="https://apptitude.ch"
        target="_blank"
        rel="noopener noreferrer"
        message="apptitude.ch"
      />
    </div>
  </StyledHome>
);
export default HomePage;
