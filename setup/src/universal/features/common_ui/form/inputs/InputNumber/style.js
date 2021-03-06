import styled from 'styled-components';

import { InputStyle, PlaceholderStyle } from '../input-style';

export default styled.div`
  input[type='number'] {
    appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  position: relative;
  margin-top: 15px;

  .unite {
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
  }

  .rc-input-number-disabled + .unite {
    right: 25px;
  }

  .rc-input-number-disabled {
    .rc-input-number-handler-wrap {
      display: none;
    }
  }

  .rc-input-number {
    margin: 0 !important;
    padding: 0 !important;
    line-height: 50px;
    font-size: 12px;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 5px;

    &-handler {
      text-align: center;
      line-height: 20px;
      height: 24px;
      width: 37px;
      overflow: hidden;
      display: block;
      cursor: pointer;

      &-active {
        background: #ddd;
      }
    }

    &-handler-up-inner,
    &-handler-down-inner {
      color: #666666;
      user-select: none;
      -webkit-user-select: none;
    }

    &-disabled:hover {
      border-color: #d9d9d9;

      .rc-input-number-handler-up,
      .rc-input-number-handler-wrap {
        border-color: #d9d9d9;
      }
    }

    &-input-wrap {
      overflow: hidden;
      height: 50px;
      display: flex;
    }

    &-input {
      width: 100%;
      text-align: center;
      outline: 0;
      appearance: textfield;
      line-height: 26px;
      transition: all 0.3s ease;
      color: #666666;
      border: 0;
      padding: 12px;
      text-align: left;
      ${PlaceholderStyle};
    }

    &-handler-wrap {
      float: right;
      border-left: 1px solid #d9d9d9;
      width: 37px;
      height: 50px;
    }

    &-handler-up {
      border-bottom: 1px solid #d9d9d9;
      padding-top: 1px;

      &-inner {
        &:after {
          content: '+';
        }
      }
    }

    &-handler-down {
      &-inner {
        &:after {
          content: '-';
        }
      }
    }

    &-handler-down-disabled,
    &-handler-up-disabled {
      opacity: 0.72;

      &:hover {
        color: #999;
        border-color: #d9d9d9;
      }

      &-disabled {
        .rc-input-number-input {
          opacity: 0.72;
          cursor: not-allowed;
          background-color: #f3f3f3;
        }

        .rc-input-number-handler {
          opacity: 0.72;

          &:hover {
            color: #999;
            border-color: #d9d9d9;
          }
        }
      }
    }
  }
`;
