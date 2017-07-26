/**
*
* InputSelectDate
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import InputSelect from 'features/ui/form/inputs/InputSelect';

import messages from './messages';
import styles from './styles.scss';

class InputSelectDate extends Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      day: props.value && props.value.getDate(),
      month: props.value && props.value.getMonth() + 1,
      year: props.value && props.value.getFullYear(),
    };
    this.monthSelect = null;
    this.yearSelect = null;
  }
  componentWillReceiveProps({ value }) {
    this.setState({
      day: value && value.getDate(),
      month: value && value.getMonth() + 1,
      year: value && value.getFullYear(),
    });
  }

  getYears() {
    const now = new Date().getFullYear();
    return this.range(now - 100, now - 16);
  }

  getDays() {
    let daysNumber = 31;
    if (this.state.value) {
      const year = this.state.value.getFullYear();
      const month = this.state.value.getMonth();
      daysNumber = new Date(year, month, 0).getDate();
    }
    return this.range(1, daysNumber);
  }

  getMonths() {
    const { intl } = this.context;
    return [
      { label: intl.formatMessage(messages.january), value: 1 },
      { label: intl.formatMessage(messages.february), value: 2 },
      { label: intl.formatMessage(messages.march), value: 3 },
      { label: intl.formatMessage(messages.april), value: 4 },
      { label: intl.formatMessage(messages.may), value: 5 },
      { label: intl.formatMessage(messages.june), value: 6 },
      { label: intl.formatMessage(messages.july), value: 7 },
      { label: intl.formatMessage(messages.august), value: 8 },
      { label: intl.formatMessage(messages.september), value: 9 },
      { label: intl.formatMessage(messages.october), value: 10 },
      { label: intl.formatMessage(messages.november), value: 11 },
      { label: intl.formatMessage(messages.december), value: 12 },
    ];
  }

  /* eslint-disable no-mixed-operators*/
  range = (start, end) =>
    [...Array(end - start + 1)].map((p, i) => ({
      value: start + i,
      label: start + i,
    }));
  /* eslint-enable no-mixed-operators*/

  dayChange = (day) => {
    this.setState(
      {
        day,
      },
      this.triggerDateChange,
    );
  };

  monthChange = (month) => {
    this.setState(
      {
        month,
      },
      this.triggerDateChange,
    );
  };

  yearChange = (year) => {
    this.setState(
      {
        year,
      },
      this.triggerDateChange,
    );
  };

  triggerDateChange = () => {
    if (_.isNumber(this.state.day) && _.isNumber(this.state.month) && _.isNumber(this.state.year)) {
      const date = new Date(this.state.year, this.state.month - 1, this.state.day);
      this.props.onChange(date);
    }
  };

  render() {
    const { name } = this.props;
    return (
      <div className={styles.InputSelectDate}>
        <InputSelect name={name} options={this.getDays()} value={this.state.day} onChange={this.dayChange} searchable required />
        <InputSelect
          name={name}
          ref={(monthSelect) => (this.monthSelect = monthSelect)}
          options={this.getMonths()}
          value={this.state.month}
          onChange={this.monthChange}
          searchable
          required
        />
        <InputSelect
          name={name}
          ref={(yearSelect) => (this.yearSelect = yearSelect)}
          options={this.getYears()}
          value={this.state.year}
          onChange={this.yearChange}
          searchable
          required
        />
      </div>
    );
  }
}

InputSelectDate.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
};

InputSelectDate.defaultProps = {
  value: undefined,
  onChange: console.log, // eslint-disable-line no-console
};
InputSelectDate.contextTypes = {
  intl: PropTypes.object,
};

export default InputSelectDate;
