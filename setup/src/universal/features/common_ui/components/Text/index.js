import { createElement } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const Text = ({
  domElement,
  size,
  color,
  textStyle, // uppercase || lowercase
  htmlFor, // if domElement === Label
  className, // extend className
  children,
  style,
}) => {
  let baseClassName = styles.Text;
  if (className.length > 0) {
    baseClassName = `${baseClassName} ${className}`;
  }

  if (size) {
    baseClassName = `${baseClassName} ${styles[size]}`;
  }
  if (color) {
    baseClassName = `${baseClassName} ${styles[color]}`;
  }
  if (textStyle) {
    baseClassName = `${baseClassName} ${styles[textStyle]}`;
  }

  const domElementProps = { htmlFor, className: baseClassName, style };

  return createElement(domElement, domElementProps, children);
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node]).isRequired,
  domElement: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'sup',
    'blackquote',
    'sub',
    'address',
    'abbr',
    'acronym',
    'b',
    'big',
    'caption',
    'cite',
    'code',
    'em',
    'i',
    'label',
    'legend',
    'span',
    'div',
  ]).isRequired,
  size: PropTypes.oneOf(['textSmall', 'text', 'textBig', 'title', 'titleBig', 'extraBig']),
  color: PropTypes.oneOf(['white', 'green', 'grey', 'light_grey', 'black', 'black_light', 'orange', 'red']),
  textStyle: PropTypes.oneOf(['uppercase', 'lowercase', 'first_uppercase']),
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Text.defaultProps = {
  size: 'text',
  color: undefined,
  textStyle: undefined,
  htmlFor: undefined,
  style: undefined,
  className: '',
};

export default Text;
