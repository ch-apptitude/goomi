/**
*
* InputGeoSuggest
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Geosuggest from 'react-geosuggest';

import styles from './styles.scss';

class InputGeoSuggest extends Component {
  constructor(props) {
    super(props);
    if (typeof google !== 'undefined') {
      this.geocoder = new google.maps.Geocoder(); // eslint-disable-line
    }
    this.state = {
      value: null,
    };
  }

  componentWillMount() {
    if (this.props.value) {
      this.handleValue(this.props);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.handleValue(nextProps);
    }
  }

  handleValue = (props) => {
    if (typeof props.value === 'object' && this.geocoder) {
      this.geocoder.geocode({ location: props.value }, (results, status) => {
        if (status === 'OK') {
          this.setState(
            {
              value: results[1].formatted_addressnull,
            },
            this.updateGeoSuggest,
          );
        }
      });
    } else {
      this.setState(
        {
          value: props.value,
        },
        this.updateGeoSuggest,
      );
    }
  };

  updateGeoSuggest = () => {
    if (this.geoSuggest && this.state.value) {
      this.geoSuggest.update(this.state.value);
    } else if (this.geoSuggest) {
      this.geoSuggest.clear();
    }
  };

  onSeachSuggest = (suggest) => {
    this.setState({ value: suggest });
    this.props.onChange(suggest);
  };

  initGeoSuggest = (ref) => {
    this.geoSuggest = ref;
    this.updateGeoSuggest();
  };

  onChange = (value) => {
    if (value.length === 0) {
      this.setState({ value: undefined });
      this.props.onChange(undefined);
    }
  };

  render() {
    const { className, placeholder, name, id } = this.props;
    let clazzName = styles.InputGeoSuggest;
    if (className) {
      clazzName = `${clazzName} ${className}`;
    }
    return (
      <Geosuggest
        ref={this.initGeoSuggest}
        name={name}
        id={id}
        className={clazzName}
        inputClassName={styles.InputGeoSuggest__Input}
        onSuggestSelect={this.onSeachSuggest}
        onChange={this.onChange}
        placeholder={placeholder}
      />
    );
  }
}

InputGeoSuggest.defaultProps = {
  onChange: console.log, // eslint-disable-line no-console
  placeholder: undefined,
  className: undefined,
  value: '',
};

InputGeoSuggest.contextTypes = {};

InputGeoSuggest.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    //eslint-disable-line
    PropTypes.shape({
      lng: PropTypes.number.isRequired,
      lat: PropTypes.number.isRequired,
    }),
    PropTypes.string,
  ]),
};

export default InputGeoSuggest;
