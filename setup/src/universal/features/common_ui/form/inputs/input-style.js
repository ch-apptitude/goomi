import { css } from 'styled-components';

const PlaceholderStyle = css`
  &::placeholder {
    color: #545352;
    letter-spacing: 0;
    opacity: 0.4;
    vertical-align: baseline;
    text-align: left;
  }
`;
const InputStyle = css`
  border: none;
  background-color: #efecea;
  border-radius: 2px;
  padding: 15px 20px;
  box-sizing: border-box;
  width: 100%;
  color: #545352;
  margin-top: 15px;
  ${placeholder};
`;

export { PlaceholderStyle, InputStyle };
