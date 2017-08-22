/**
*
* InputSlider
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Range } from 'rc-slider';
import styled from 'styled-components';
import 'rc-slider/assets/index.css';

const StyledSlider = styled.div`
  height: 100%;
  width: 100%;

  .values {
    display: flex;
    justify-content: space-between;

    > * {
      margin-top: 5px;
    }
  }

  .rc-slider-handle {
    &:hover {
      border-color: orange;
    }
    border: solid 2px orange;
  }

  .rc-slider-rail {
    height: 2px;
  }

  .rc-slider-track {
    background-color: orange;
    height: 2px;
    top: 40%;
  }
`;

class InputSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.value,
    });
  }

  onChange = (value) => {
    this.setState(
      {
        value,
      },
      () => this.props.onChange(value),
    );
  };

  render() {
    const { min, max, unite, onAfterChange } = this.props;
    return (
      <StyledSlider>
        <Range value={this.state.value} min={min} max={max} onChange={this.onChange} onAfterChange={onAfterChange} />
        {!!unite && (
          <div className="values">
            <span>
              {(!!this.state.value && this.state.value[0]) || min} {unite}
            </span>
            <span>
              {(!!this.state.value && this.state.value[1]) || min} {unite}
            </span>
          </div>
        )}
      </StyledSlider>
    );
  }
}

InputSlider.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  unite: PropTypes.string,
};

InputSlider.defaultProps = {
  value: undefined,
  onChange: () => {},
  onAfterChange: () => {},
  max: 100,
  min: 0,
  unite: undefined,
};

export default InputSlider;
