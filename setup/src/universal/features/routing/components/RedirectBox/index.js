/**
*
* RedirectBox
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';

import Box from 'features/ui/components/Box';
import Text from 'features/ui/components/Text';
import Button from 'features/ui/components/Button';

import messages from './messages';
import styles from './styles.scss';

const RedirectBox = ({ title, titleValues, body, bodyValues, buttons }) => (
  <div className={styles.RedirectBox}>
    <Box className={styles.RedirectBox__Box}>
      <Row>
        <Col xs={12}>
          <Text className={styles.RedirectBox__Title} domElement="h1" size="title">
            <FormattedMessage {...title} values={titleValues} />
          </Text>
        </Col>
      </Row>
      {body && (
        <Row>
          <Col xs={12}>
            <Text className={styles.RedirectBox__Body} domElement="p">
              <FormattedMessage {...body} values={bodyValues} />
            </Text>
          </Col>
        </Row>
      )}
      <Row center="xs">
        {buttons.map((button) => (
          <Col xs={6} sm={4} key={button.message.id}>
            <Button
              className={styles.RedirectBox__Button}
              onClick={button.onClick}
              linkTo={button.linkTo}
              message={button.message}
            />
          </Col>
        ))}
      </Row>
    </Box>
  </div>
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
