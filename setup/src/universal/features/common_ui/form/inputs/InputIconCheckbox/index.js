/**
*
* InputIconCheckbox
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'features/common_ui/components/Icon';
import iconList from 'features/common_ui/components/Icon//icon-list';
import InputCheckbox from 'features/common_ui/form/inputs/InputCheckbox';

import styles from './styles.scss';

const InputIconCheckbox = ({ name, icon, value, id, onChange }) => (
  <InputCheckbox
    name={name}
    label={<Icon icon={icon} className={styles.InputIconCheckbox__Icon} />}
    value={value}
    id={id}
    onChange={onChange}
  />
);

InputIconCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.oneOf(iconList).isRequired,
};

InputIconCheckbox.defaultProps = {
  value: false,
  onChange: console.log, // eslint-disable-line no-console
};

export default InputIconCheckbox;
