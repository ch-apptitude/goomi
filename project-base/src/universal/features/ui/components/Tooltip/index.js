/**
*
* Tooltip
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import RCTooltip from 'rc-tooltip';

import styles from './styles.scss';

const Tooltip = ({ trigger, offsetX, offsetY, enterDelay, leaveDelay, content, hasEffect, placement, children, arrowClass }) => {
  let transitionName = '';
  let destroyTooltipOnHide = true;
  if (hasEffect) {
    destroyTooltipOnHide = false;
    transitionName = 'rc-tooltip-zoom';
  }
  const alignParams = {
    offset: [offsetX, offsetY],
  };
  return (
    <RCTooltip
      placement={placement}
      mouseEnterDelay={enterDelay}
      mouseLeaveDelay={leaveDelay}
      destroyTooltipOnHide={destroyTooltipOnHide}
      trigger={trigger}
      arrowContent={<div className={`rc-tooltip-arrow-inner ${arrowClass || ''}`} />}
      overlay={<div className={styles.Tooltip__Content}>{content}</div>}
      align={alignParams}
      transitionName={transitionName}
    >
      {children}
    </RCTooltip>
  );
};

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  trigger: PropTypes.oneOf(['hover', 'focus', 'click']),
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  arrowClass: PropTypes.string,
  placement: PropTypes.oneOf([
    'left',
    'right',
    'top',
    'bottom',
    'topLeft',
    'leftTop',
    'topRight',
    'rightTop',
    'bottomRight',
    'rightBottom',
    'bottomLeft',
    'leftBottom',
  ]),
  enterDelay: PropTypes.number,
  leaveDelay: PropTypes.number,
  hasEffect: PropTypes.bool,
};

Tooltip.defaultProps = {
  trigger: 'click',
  offsetX: 0,
  offsetY: 0,
  enterDelay: 0,
  leaveDelay: 0,
  hasEffect: false,
  placement: 'top',
  arrowClass: undefined,
};

export default Tooltip;
