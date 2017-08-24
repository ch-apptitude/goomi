/**
*
* Tooltip
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import RCTooltip from 'rc-tooltip';
import './style'

const Tooltip = ({ 
  trigger, 
  offsetX, 
  offsetY, 
  enterDelay, 
  leaveDelay, 
  content, 
  placement, 
  children, 
  arrowClass 
}) => (
  <RCTooltip
    placement={placement}
    mouseEnterDelay={enterDelay}
    mouseLeaveDelay={leaveDelay}
    destroyTooltipOnHide
    trigger={trigger}
    arrowContent={<div className={`rc-tooltip-arrow-inner ${arrowClass || ''}`} />}
    overlay={<ToolTipContent>{content}</ToolTipContent>}
    align={{
      offset: [offsetX, offsetY],
    }}
    transitionName={transitionName}
  >
    {children}
  </RCTooltip>
);

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
};

Tooltip.defaultProps = {
  trigger: 'click',
  offsetX: 0,
  offsetY: 0,
  enterDelay: 0,
  leaveDelay: 0,
  placement: 'top',
  arrowClass: undefined,
};

export default Tooltip;
