import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export default styled(DatePicker)`
  background: none;
  padding: 13px 21px;
  box-sizing: border-box;
  width: 100%;
  color: white;

  &::placeholder {
    color: #545352;
    letter-spacing: 0;
    opacity: 0.4;
  }
  
  .react-datepicker {
    font-family: Palanquin !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle,
  .react-datepicker__tether-element-attached-top .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow {
    margin-left: -8px;
    position: absolute;
  }

  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle,
  .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle::before,
  .react-datepicker__tether-element-attached-top .react-datepicker__triangle,
  .react-datepicker__tether-element-attached-top .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view--down-arrow::before {
    box-sizing: content-box;
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px;
  }

  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle::before,
  .react-datepicker__tether-element-attached-top .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before {
    content: "";
    z-index: -1;
    border-width: 8px;
    left: -8px;
    border-bottom-color: #545352;
  }

  .react-datepicker__tether-element-attached-top .react-datepicker__triangle {
    top: 0;
    margin-top: -8px;
  }

  .react-datepicker__tether-element-attached-top .react-datepicker__triangle,
  .react-datepicker__tether-element-attached-top .react-datepicker__triangle::before {
    border-top: none;
    border-bottom-color: #b0adaa;
  }

  .react-datepicker__tether-element-attached-top .react-datepicker__triangle::before {
    top: -1px;
    border-bottom-color: #545352;
  }

  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow {
    bottom: 0;
    margin-bottom: -8px;
  }

  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle,
  .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view--down-arrow::before {
    border-bottom: none;
    border-top-color: #fff;
  }

  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before {
    bottom: -1px;
    border-top-color: #545352;
  }

  .react-datepicker {
    font-family: "Palanquin", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    background-color: #545352;
    color: white;
    border: 2px solid #b0adaa;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
    box-shadow: 0 19px 60px rgba(0, 0, 0, 0.3), 0 15px 20px rgba(0, 0, 0, 0.22);
  }

  .react-datepicker__triangle {
    position: absolute;
    left: 50px;
  }

  .react-datepicker__tether-element-attached-bottom.react-datepicker__tether-element {
    margin-top: -20px;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: #545352;
    border-bottom: 1px solid #b0adaa;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    padding-top: 8px;
    position: relative;
  }

  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__year-dropdown-container--select {
    display: inline-block;
    margin: 0 2px;
  }

  .react-datepicker__current-month {
    margin-top: 0;
    color: white;
    font-weight: bold;
    font-size: 0.944rem;
  }

  .react-datepicker__navigation {
    line-height: 1.7rem;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
    width: 0;
    border: 0.45rem solid transparent;
    z-index: 1;
  }

  .react-datepicker__navigation--previous {
    left: 10px;
    border-right-color: #ccc;
  }

  .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3;
  }

  .react-datepicker__navigation--next {
    right: 10px;
    border-left-color: #ccc;
  }

  .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3;
  }

  .react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .react-datepicker__navigation--years-previous {
    top: 4px;
    border-top-color: #ccc;
  }

  .react-datepicker__navigation--years-previous:hover {
    border-top-color: #b3b3b3;
  }

  .react-datepicker__navigation--years-upcoming {
    top: -4px;
    border-bottom-color: #ccc;
  }

  .react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: #b3b3b3;
  }

  .react-datepicker__month-container {
    display: inline;
  }

  .react-datepicker__month {
    margin: 0.4rem;
    text-align: center;
  }

  .react-datepicker__week-number {
    color: #ccc;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }

  .react-datepicker__day,
  .react-datepicker__day-name {
    color: white;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }

  .react-datepicker__day {
    cursor: pointer;
  }

  .react-datepicker__day:hover {
    border-radius: 0.3rem;
    background-color: #b0adaa;
  }

  .react-datepicker__day--today {
    font-weight: bold;
  }

  .react-datepicker__day--highlighted {
    border-radius: 0.3rem;
    background-color: #3dcc4a;
    color: #fff;
  }

  .react-datepicker__day--highlighted:hover {
    background-color: #32be3f;
  }

  .react-datepicker__day--in-range,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--selected {
    border-radius: 0.3rem;
    background-color: #4fcc82;
    color: #fff;
  }

  .react-datepicker__day--in-range:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--selected:hover {
    background-color: #4fcc82;
  }

  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: rgba(33, 107, 165, 0.5);
  }

  .react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
    background-color: #b0adaa;
    color: white;
  }

  .react-datepicker__day--disabled {
    cursor: default;
    color: #cecccb;
  }

  .react-datepicker__day--disabled:hover {
    background-color: transparent;
  }

  .react-datepicker__input-container {
    position: relative;
  }

  .react-datepicker__month-read-view,
  .react-datepicker__year-read-view {
    border: 1px solid transparent;
    border-radius: 0.3rem;
  }

  .react-datepicker__month-read-view:hover,
  .react-datepicker__year-read-view:hover {
    cursor: pointer;
  }

  .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow {
    border-top-color: #b3b3b3;
  }

  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__year-read-view--down-arrow {
    border-top-color: #ccc;
    float: right;
    margin-left: 20px;
    top: 8px;
    position: relative;
    border-width: 0.45rem;
  }

  .react-datepicker__month-dropdown,
  .react-datepicker__year-dropdown {
    background-color: #b0adaa;
    position: absolute;
    width: 50%;
    left: 25%;
    top: 30px;
    text-align: center;
    border-radius: 0.3rem;
    border: 1px solid #545352;
  }

  .react-datepicker__month-dropdown:hover,
  .react-datepicker__year-dropdown:hover {
    cursor: pointer;
  }

  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__year-dropdown--scrollable {
    height: 150px;
    overflow-y: scroll;
  }

  .react-datepicker__month-option,
  .react-datepicker__year-option {
    line-height: 20px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .react-datepicker__month-option:first-of-type,
  .react-datepicker__year-option:first-of-type {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }

  .react-datepicker__month-option:last-of-type,
  .react-datepicker__year-option:last-of-type {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  .react-datepicker__month-option:hover,
  .react-datepicker__year-option:hover {
    background-color: #ccc;
  }

  .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
  .react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b3b3;
  }

  .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
  .react-datepicker__year-option:hover .react-datepicker__navigation--years-previous {
    border-top-color: #b3b3b3;
  }

  .react-datepicker__month-option--selected,
  .react-datepicker__year-option--selected {
    position: absolute;
    left: 15px;
  }

  .react-datepicker__close-icon {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    height: 0;
    outline: 0;
    padding: 0;
    vertical-align: middle;
  }

  .react-datepicker__close-icon::after {
    background-color: #4fcc82;
    border-radius: 50%;
    bottom: 0;
    box-sizing: border-box;
    color: #fff;
    content: "\00d7";
    cursor: pointer;
    font-size: 12px;
    height: 16px;
    width: 16px;
    line-height: 1;
    margin: -8px auto 0;
    padding: 2px;
    position: absolute;
    right: 7px;
    text-align: center;
    top: 50%;
  }

  .react-datepicker__today-button {
    background: #b0adaa;
    border-top: 1px solid #545352;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
    clear: left;
  }

  .react-datepicker__tether-element {
    z-index: 2147483647;
  }
`;
