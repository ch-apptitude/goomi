/**
*
* Notification
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { injectGlobal } from 'styled-components';

import hocNotification from 'features/common_ui/hoc/hocNotification';
import Notifications from 'react-notification-system-redux';

import { messagesTitle, messages } from './messages';

injectGlobal`
  .notification-error .notification-title {
    color: orange !important;
  }
  .notification-success .notification-title {
    color: #4fcc82 !important;
  }
  .notification-dismiss {
    background-color: transparent !important;
    color: #545352 !important;
  }
`;

const style = {
  NotificationItem: {
    DefaultStyle: {
      color: '#545352',
      borderRadius: '3px',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 14px, rgba(0, 0, 0, 0.1) 0px 0px 29px',
      backgroundColor: '#f3f1f0',
    },

    success: { border: '1px solid rgba(0, 0, 0, 0.1)' },
    error: { border: '1px solid rgba(0, 0, 0, 0.1)' },
  },
};

const notificationFormat = (notificationsSend, intl) => {
  let notifications = [];
  if (Array.isArray(notificationsSend)) {
    if (notificationsSend.length > 0) {
      notifications = [...notificationsSend];
      const actualNotifNb = notifications.length - 1;

      notifications[actualNotifNb] = {
        ...notifications[actualNotifNb],
        message: intl.formatMessage(messages[notifications[actualNotifNb].messageId]),
        position: 'br',
        autoDismiss: 1000,
      };
      if (!notifications[actualNotifNb].noHeader) {
        const level = notifications[actualNotifNb].level;
        notifications[actualNotifNb].title = intl.formatMessage(messagesTitle[level]);
      }
    }
  }
  return notifications;
};

const Notification = ({ notifications, intl }) => <Notifications notifications={notificationFormat(notifications, intl)} style={style} />;

Notification.propTypes = {
  notifications: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  intl: intlShape.isRequired,
};

export default hocNotification(injectIntl(Notification));
