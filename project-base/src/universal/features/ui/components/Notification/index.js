/**
*
* Notification
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import hocNotification from 'features/ui/hoc/hocNotification';
import Notifications from 'react-notification-system-redux';

import { messagesTitle, messages } from './messages';
import './styles.scss';

// Part of Style Here And Other In Styles.scss ...
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

const notificationFormat = (notificationsSend) => {
  let notifications = [];
  if (Array.isArray(notificationsSend)) {
    if (notificationsSend.length > 0) {
      notifications = [...notificationsSend];
      const actualNotifNb = notifications.length - 1;

      notifications[actualNotifNb] = {
        ...notifications[actualNotifNb],
        message: <FormattedMessage {...messages[notifications[actualNotifNb].messageId]} />,
        position: 'br',
        autoDismiss: 1000,
      };
      if (!notifications[actualNotifNb].noHeader) {
        const level = notifications[actualNotifNb].level;
        notifications[actualNotifNb].title = <FormattedMessage {...messagesTitle[level]} />;
      }
    }
  }
  return notifications;
};

const Notification = ({ notifications }) => <Notifications notifications={notificationFormat(notifications)} style={style} />;

Notification.propTypes = {
  notifications: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default hocNotification(Notification);
