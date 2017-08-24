/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router';
import styled from 'styled-components';

import Theme from 'assets/theme';

const defaultStyle = (props) => `
  line-height: 40px;
  cursor: pointer;
  border: none;
  color: #1F2D3D;
  padding: 0 20px;
  border-radius: ${Theme.Metrics.borderRadius}px;
  outline: none;
  text-align: left;
  background-color: transparent;

  ${props => props.block ? `
    display: block;
    box-sizing: border-box;
    width: 100%;
  ` : `
    display: inline-block;
    box-sizing: content-box;
    width: auto;
  `}
  

  :disabled {
    cursor: not-allowed;
  }

  * {
    margin: 0;
  }
`;

const StyledButton = styled.button`
  ${props => defaultStyle(props)}
`;
const StyledA = styled.a`
  ${props => defaultStyle(props)}
`;
const StyledLink = styled(Link)`
  ${props => defaultStyle(props)}
`;

const ButtonComponent = (
  {
    message,
    values,
    href,
    linkTo,
    params,
    className,
    children,
    intl,
    ...etc
  },
) => {
  let content = children;
  if(typeof message === 'object') {
    content = intl.formatMessage(message, values);
  } else if(typeof children === 'undefined') {
    content = message;
  }

  if(href) {
    return <StyledA href={href} className={className} {...etc}>{content}</StyledA>
  } else if (linkTo) {
    const toParams = {
      pathname: linkTo,
      query: { ...params },
    };
    return (
      <StyledLink
        to={toParams}
        activeClassName="active"
        className={className}
        {...etc}
      >
        {content}
      </StyledLink>
    );
  }

  return (
    <StyledButton className={className} {...etc} >
      {content}
    </StyledButton>
  );
};
ButtonComponent.propTypes = {
  message: PropTypes.oneOfType([ 
    PropTypes.string, 
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
  ]),
  values: PropTypes.object,
  href: PropTypes.string,
  linkTo: PropTypes.string,
  params: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};
const Button = injectIntl(ButtonComponent);

export default Button;

const GreenButton = styled(Button)`
  background-color: #13ce66;
  color: #FFF;
  text-align: center;
`;

const BlueButton = styled(Button)`
  background-color: #1fb6ff;
  color: #FFF;
  text-align: center;
`;

const LightBlueButton = styled(Button)`
  background-color: transparent;
  border: solid 1px #1fb6ff;
  color: #1fb6ff;
  text-align: center;
`;


const LightButton = styled(Button)`
  box-shadow: inset 0 0 0 1px #e0e6ed;
  background-color: transparent;
  color: #1F2D3D;
  text-align: center;
`;

export {
  GreenButton,
  BlueButton,
  LightBlueButton,
  LightButton,
};
