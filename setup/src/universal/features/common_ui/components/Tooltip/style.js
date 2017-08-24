import { injectGlobal } from 'styled-components';
import 'rc-tooltip/assets/bootstrap_white.css';

import Theme from 'assets/theme';

const ARROW_WIDTH = 10;

injectGlobal`
  .rc-tooltip {
    opacity: 1;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow-inner {
    margin-left: -${ARROW_WIDTH}px;
    border-width: 0 ${ARROW_WIDTH}px ${ARROW_WIDTH}px;
  }

  .rc-tooltip-placement-bottom .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    top: -${ARROW_WIDTH}px + 1;
    margin-left: -${ARROW_WIDTH}px;
    border-width: 0 ${ARROW_WIDTH}px ${ARROW_WIDTH}px;
    border-bottom: none;
  }

  .rc-tooltip-inner {
    border: none;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
    border: 1px solid #efecea;
    border-radius: ${Theme.Metrics.borderRadius}px;
    padding: 10px;
  }
`;
