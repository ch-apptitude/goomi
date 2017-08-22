/**
*
* InputStars
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';

const StyledStars = styled.div`
  width: 100%;
    font-size: 20px;
    margin-top: 5px;
  }

  .dv-star-rating-star {
    margin: 0 2.5px;
    > i {
      color: inherit;
    }
  }
`;

class InputStars extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  onChange = (newValue) => {
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  };

  render() {
    const { name, starCount, starColor, emptyStarColor } = this.props;
    return (
      <StyledStars>
        <StarRatingComponent
          name={name}
          editing
          value={Math.round(this.state.value)}
          starCount={starCount}
          onStarClick={this.onChange}
          starColor={starColor}
          emptyStarColor={emptyStarColor}
        />
      </StyledStars>
    );
  }
}

InputStars.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  starCount: PropTypes.number,
  starColor: PropTypes.string,
  emptyStarColor: PropTypes.string,
};

InputStars.defaultProps = {
  onChange: () => {},
  starCount: 5,
  value: 3,
  starColor: '#FF6839',
  emptyStarColor: '#D9D6D5',
};

export default InputStars;
