import styled from 'styled-components';

import './GlobalStyle';

const App = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  color: #545352;
  overflow-x: hidden;

  &:before {
    content: "\e900";
    position: absolute;
    font-size: 0;
  }
`;

export default App;
