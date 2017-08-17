import styled from 'styled-components';
import { createElement } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

const Text = ({ tagName, children, size, weight, lineHeight, color, textTransform, message, values, intl, ...etc }) =>
  createElement(tagName, { ...etc }, intl.formatMessage(message, values));

const TranslatableText = injectIntl(Text);

const StyledText = styled(TranslatableText)`
  font-family: $font-family;
  display: inline-block;
  color: ${(props) => props.color};
  weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => `${props.size}px`};
  text-transform: ${(props) => props.textTransform};
`;

StyledText.defaultProps = {
  size: 13,
  weight: 400,
  lineHeight: 1,
  color: '#2e444e',
  textTransform: 'none',
};

StyledText.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.number,
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  textTransform: PropTypes.string,
  message: PropTypes.object,
  values: PropTypes.object,
  tagName: PropTypes.string.isRequired,
};

export default StyledText;
