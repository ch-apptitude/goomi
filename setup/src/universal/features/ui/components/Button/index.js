/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Text from 'features/ui/components/Text';
import Icon from 'features/ui/components/Icon';

import styles from './styles.scss';

const Button = (
  {
    message,
    inline,
    type,
    onClick,
    linkTo,
    params,
    className,
    color,
    backgroundClass,
    tiny,
    icon,
    disabled,
    activeClassName,
    fitWidth,
  },
  { intl },
) => {
  const textColor = color || 'black_light';

  let textSize = 'text';
  if (!tiny) {
    textSize = 'textBig';
  }

  const textRender = (
    <div className={styles.Button__Content}>
      {icon && <Icon className={styles.RegisterFormTeam__Remove} icon={icon} />}
      {message.props ? (
        message
      ) : (
        <Text domElement="p" color={textColor} size={textSize}>
          {message.id ? intl.formatMessage(message) : message}
        </Text>
      )}
    </div>
  );

  let classNameRender = styles.Button;
  if (backgroundClass) {
    classNameRender = `${classNameRender} ${backgroundClass}`;
  }
  if (className.length > 0) {
    // Extend className from Parent
    classNameRender = `${classNameRender} ${className}`;
  }
  if (tiny) {
    // Only Text whithout Background
    classNameRender = `${classNameRender} ${styles.Button__Tiny}`;
  }
  if (inline) {
    // Width auto  -> without = width: 90%
    classNameRender = `${classNameRender} ${styles.Button__Inline}`;
  }
  if (fitWidth) {
    // Width auto  -> without = width: 90%
    classNameRender = `${classNameRender} ${styles.Button__FitWidth}`;
  }

  if (linkTo) {
    const toParams = {
      pathname: linkTo,
      query: { ...params },
    };
    return (
      <Link
        className={[classNameRender, styles.Botton__Link].join(' ')}
        to={toParams}
        disabled={disabled}
        activeClassName={activeClassName}
      >
        {textRender}
      </Link>
    );
  }

  return (
    <button className={classNameRender} type={type} onClick={onClick} disabled={disabled}>
      {textRender}
    </button>
  );
};

Button.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.shape({ id: PropTypes.string.isRequired }),
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  tiny: PropTypes.bool,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  linkTo: PropTypes.string,
  params: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  backgroundClass: PropTypes.string,
  disabled: PropTypes.bool,
  fitWidth: PropTypes.bool,
  activeClassName: PropTypes.string,
};

Button.defaultProps = {
  tiny: false,
  inline: false,
  onClick: () => {},
  linkTo: undefined,
  params: undefined,
  color: undefined,
  type: undefined,
  icon: undefined,
  disabled: false,
  className: '',
  activeClassName: 'active',
  backgroundClass: undefined,
  fitWidth: false,
};

Button.contextTypes = {
  intl: PropTypes.object,
};

export default Button;

export const GreenButton = ({ ...etc }) => <Button {...etc} color="white" backgroundClass={styles.Button__GreenBackground} />;
export const LightButton = ({ ...etc }) => (
  <Button {...etc} color="black_light" backgroundClass={styles.Button__LightBackground} />
);

export const OrangeButton = ({ ...etc }) => <Button {...etc} color="white" backgroundClass={styles.Button__OrangeBackground} />;
export const RedButton = ({ ...etc }) => <Button {...etc} color="white" backgroundClass={styles.Button__RedBackground} />;
export const GreyButton = ({ ...etc }) => <Button {...etc} color="black_light" backgroundClass={styles.Button__GreyBackground} />;
