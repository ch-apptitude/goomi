/**
*
* InputIconCheckbox
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from 'features/common_ui/components/Icon';
import iconList from 'features/common_ui/components/Icon/icon-list';
import InputCheckbox from 'features/common_ui/form/inputs/InputCheckbox';

const StyledIcon = styled(Icon)`
  font-size: 35px;
  margin-top: -8px;
`;

const InputIconCheckbox = ({ name, icon, value, id, onChange }) => (
  <InputCheckbox name={name} label={<StyledIcon icon={icon} />} value={value} id={id} onChange={onChange} />
);

InputIconCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.oneOf(Object.values(iconList)).isRequired,
};

InputIconCheckbox.defaultProps = {
  value: false,
  onChange: console.log, // eslint-disable-line no-console
};

export default InputIconCheckbox;
