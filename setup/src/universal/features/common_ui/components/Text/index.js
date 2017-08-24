import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Theme from 'assets/theme';

const textProps = {
  children: PropTypes.node,
  message: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    })
  ]),
  tag: PropTypes.oneOf([
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
  className: PropTypes.string,
}

export const Text = ({
  tag,
  size,
  color,
  className, // extend className
  children,
  message,
  ...etc
}) => createElement(domElement, { className: className, ...etc }, children);

Text.propTypes = {
  ...textProps,
}

const StyledText = styled(Text)`
  font-family: $font-family;
  display: inline-block;
  color: inherit;
  margin: 0;
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  line-height: ${props => props.size * 1.3}px;
  font-weight: ${props => props.weight};
`;

StyledText.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.oneOf(['lighter', 'normal', 'bold']),
  ...textProps,
};

Text.defaultProps = {
  size: Theme.Metrics.normalSize,
  color: Theme.Metrics.primary,
  weight: 'normal',
};

export default Text;
