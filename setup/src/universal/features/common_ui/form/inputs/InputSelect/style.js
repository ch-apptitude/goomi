import styled from 'styled-components';
import 'react-select/dist/react-select.css';
import { InputStyle, PlaceholderStyle } from '../input-style';

export default styled.div`
  .Select span {
    position: relative;
  }
  .Select-control,
  .is-open > .Select-control {
    {InputStyle}
  }

  .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    position: relative;
    overflow: visible;
    line-height: inherit;
    top: initial;
    right: initial;
  }

  .Select-option {
    background: none;
    padding: 18px 15px;
    color: #545352;

    &:not(:last-child) {
      border-bottom: solid 1px #efecea;
    }

    > span,
    &.is-focused {
      color: #545352;
    }

    &.is-focused,
    &.is-selected {
      background: none;
    }

    &.is-selected,
    &.is-selected > span {
      color: #545352;
    }
  }

  .Select-input {
    height: 14px;
  }
  .Select-input,
  .Select-input > input {
    padding: 0;
    position: absolute;
    top: 50%;
    left: 0;
    padding: 0 10px;
    transform: translateY(-50%);
  }
  .has-value.Select--single > .Select-control .Select-value .Select-value-label,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
    {PlaceholderStyle}
  }

  .is-focused:not(.is-open) > .Select-control {
    box-shadow: none;
  }

  .Select-menu {
    width: 100%;
  }

  .Select-menu-outer {
    z-index: 150;
  }

  .Select-arrow-zone {
    line-height: 0;
  }
`;
