import styled from 'styled-components';

import { InputStyle } from 'features/common_ui/form/inputs/input-style';
import Text from 'features/common_ui/components/Text';
import Icon from 'features/common_ui/components/Icon';

const StyledLabel = styled(Text)`
  background-color: white;
  display: block;
  font-size: 15px;
  margin-top: 20px;

  .Field {
    ${InputStyle}
  }

  > * {
    display: block;
  }

  > *:first-child {
    line-height: 15px;
  }

  .wildcard_required {
    color: #ed6262;
  }

  input[type='number'] {
    background: #f3f1f0;
    border: none;
    font-size: 13px;
    vertical-align: baseline;
  }

  .has_error {
    border: 2px solid #ed6262;
    padding: 13px 20px;
  }
`;
const StyledIconHelper = styled(Icon)`
  vertical-align: baseline;
  margin-left: 5px;
`;
const StyledError = styled(Text)`
  padding: 0 10px;
  margin: 5px 0px;
  border-radius: 3px;
  z-index: 150;
  box-sizing: border-box;
  color: #ed6262 !important;
  display: block;
`;

export { StyledLabel, StyledIconHelper, StyledError };
