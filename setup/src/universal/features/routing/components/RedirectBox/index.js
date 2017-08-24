/**
*
* RedirectBox
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Box from 'features/common_ui/components/Box';
import Text from 'features/common_ui/components/Text';
import Button from 'features/common_ui/components/Button';
import Theme from 'assets/theme'

import messages from './messages';

const RedirectBoxContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  .box {
    max-width: 640px;
  }

  .title {
    margin-bottom: 30px;
  }
    
  .button {
    margin-top: 30px;
  }
`;

const RedirectBox = ({ title, titleValues, body, bodyValues, buttons }) => (
  <RedirectBoxContainer>
    <Box className="box">
      <Row>
        <Col xs={12}>
          <Text className="title" tag="h1" size={Theme.Metrics.title} message={title} values={titleValues} />
        </Col>
      </Row>
      {body && (
        <Row>
          <Col xs={12}>
            <Text tag="p" message={body} values={bodyValues} />
          </Col>
        </Row>
      )}
      <Row center="xs">
        {buttons.map((button) => (
          <Col xs={6} sm={4} key={button.message.id}>
            <Button
              className="button"
              onClick={button.onClick}
              linkTo={button.linkTo}
              message={button.message}
            />
          </Col>
        ))}
      </Row>
    </Box>
  </RedirectBoxContainer>
);

RedirectBox.defaultProps = {
  title: messages.title,
  titleValues: undefined,
  body: undefined,
  bodyValues: undefined,
  buttons: [],
};

RedirectBox.propTypes = {
  title: PropTypes.object,
  titleValues: PropTypes.object,
  body: PropTypes.object,
  bodyValues: PropTypes.object,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      linkTo: PropTypes.string,
      onClick: PropTypes.func,
      message: PropTypes.object.isRequired,
    }),
  ),
};

export default RedirectBox;
