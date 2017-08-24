import { createElement } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
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
  values: PropTypes.object,
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
    'a',
  ]).isRequired,
  className: PropTypes.string,
}

let Text = ({
  tag,
  size,
  color,
  className, // extend className
  children,
  message,
  values,
  intl,
  ...etc
}) => {
  let content = children;
  if(typeof message === 'object') {
    content = intl.formatMessage(message, values)
  } else if(typeof children === 'undefined') {
    content = message;
  }
  return createElement(tag, { className: className, ...etc }, content);
}
Text.propTypes = {
  ...textProps,
  intl: intlShape.isRequired,
}
Text = injectIntl(Text);

const StyledText = styled(Text)`
  font-family: Palanquin;
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

StyledText.defaultProps = {
  size: Theme.Metrics.normal,
  color: Theme.Metrics.primary,
  weight: 'normal',
};

export default Text;
