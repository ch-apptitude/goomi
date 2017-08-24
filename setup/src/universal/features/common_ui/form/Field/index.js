/**
*
* Field
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
import { FormField } from 'react-form';

import Tooltip from 'features/common_ui/components/Tooltip';

import errorMessages from 'features/common_ui/form/error-messages';

import InputCheckbox from '../inputs/InputCheckbox';
import InputIconCheckbox from '../inputs/InputIconCheckbox';
import InputCheckboxGroup from '../inputs/InputCheckboxGroup';
import InputDatepicker from '../inputs/InputDatepicker';
import InputTimepicker from '../inputs/InputTimepicker';
import InputNumber from '../inputs/InputNumber';
import InputStars from '../inputs/InputStars';
import InputTags from '../inputs/InputTags';
import InputText from '../inputs/InputText';
import InputTextArea from '../inputs/InputTextArea';
import InputRadioGroup from '../inputs/InputRadioGroup';
import InputDropZone from '../inputs/InputDropZone';
import InputSelect from '../inputs/InputSelect';
import InputSelectDate from '../inputs/InputSelectDate';
import InputSlider from '../inputs/InputSlider';
import InputGeoSuggest from '../inputs/InputGeoSuggest';

import { StyledLabel, StyledIconHelper, StyledError } from './style.js';

class Field extends PureComponent {
  onChange = (value) => {
    if (this.props.type === 'email' || this.props.type === 'password' || this.props.type === 'text') {
      this.props.setValue(this.formatTextValue(value));
    } else {
      this.props.setValue(value);
    }
  };

  setTouched = () => this.props.setValue && this.props.setTouched(true);

  getInput() {
    const { error, type, field, label, placeholder, getValue, unite, disabled, required, intl, autoFocus, ...etc } = this.props;
    let placeHolderMessage = placeholder;
    if (typeof placeholder === 'object') {
      placeHolderMessage = intl.formatMessage(placeholder);
    }
    let inputUnite = unite;
    if (typeof unite === 'object') {
      inputUnite = intl.formatMessage(unite);
    }

    let className = `${this.props.className} Field`;
    if (error) {
      className = `${className} has_error`;
    }

    const inputProps = {
      id: field,
      className,
      name: field,
      value: getValue(),
      onChange: this.onChange,
      onBlur: this.setTouched,
      onFocus: etc.onFocus,
      onSelect: etc.onSelect,
      onSubmit: etc.onSubmit,
      onReset: etc.onReset,
      onKeyDown: etc.onKeyDown,
      onKeyPress: etc.onKeyPress,
      onKeyUp: etc.onKeyUp,
      disabled,
    };

    if (type === 'phone') {
      return <InputText type="tel" placeholder={placeHolderMessage} required={required} {...inputProps} autoFocus={autoFocus} />;
    } else if (type === 'checkbox' && this.props.icon) {
      return <InputIconCheckbox icon={this.props.icon} {...inputProps} />;
    } else if (type === 'checkbox') {
      return <InputCheckbox label={label} {...inputProps} />;
    } else if (type === 'checkboxGroup') {
      return <InputCheckboxGroup label={label} {...inputProps} options={this.props.items} />;
    } else if (type === 'date') {
      return (
        <InputDatepicker
          {...inputProps}
          placeholder={placeHolderMessage}
          min={etc.min}
          required={required}
          autoFocus={autoFocus}
        />
      );
    } else if (type === 'time') {
      return <InputTimepicker placeholder={placeHolderMessage} required={required} {...inputProps} autoFocus={autoFocus} />;
    } else if (type === 'number') {
      return (
        <InputNumber
          {...inputProps}
          unite={inputUnite}
          placeholder={placeHolderMessage}
          min={etc.min}
          max={etc.max}
          required={required}
          autoFocus={autoFocus}
        />
      );
    } else if (type === 'stars') {
      return <InputStars {...inputProps} />;
    } else if (type === 'textarea') {
      return <InputTextArea placeholder={placeHolderMessage} required={required} {...inputProps} autoFocus={autoFocus} />;
    } else if (type === 'tags') {
      return <InputTags placeholder={placeHolderMessage} required={required} {...inputProps} autoFocus={autoFocus} />;
    } else if (type === 'geoSuggest') {
      return <InputGeoSuggest placeholder={placeHolderMessage} {...inputProps} autoFocus={autoFocus} />;
    } else if (type === 'radioGroup') {
      return (
        <InputRadioGroup
          placeholder={placeHolderMessage}
          {...inputProps}
          items={this.props.items}
          renderRadio={this.props.renderRadio}
          required={required}
        />
      );
    } else if (type === 'select') {
      return <InputSelect options={this.props.items} {...inputProps} placeholder={placeHolderMessage} required={required} />;
    } else if (type === 'birthDate') {
      return <InputSelectDate {...inputProps} placeholder={placeHolderMessage} required={required} autoFocus={autoFocus} />;
    } else if (type === 'dropzone') {
      return <InputDropZone {...inputProps} content={this.props.content} required={required} />;
    } else if (type === 'slider') {
      return <InputSlider {...inputProps} min={etc.min} max={etc.max} unite={inputUnite} />;
    }
    return <InputText type={type} placeholder={placeHolderMessage} required={required} {...inputProps} autoFocus={autoFocus} />;
  }

  getError() {
    const { getTouched, getError, type, intl } = this.props;
    const touched = getTouched();
    let error = this.props.error;
    if (getError()) {
      error = getError();
    }

    if (error && Array.isArray(error)) {
      error = error.map(
        (err) => (errorMessages[err] ? intl.formatMessage(errorMessages[err]) : `Unsupported Error : ${err}`),
      );
    } else if (error && typeof error === 'object') {
      error = errorMessages[error.name]
        ? intl.formatMessage(errorMessages[error.name], error.values)
        : `Unsupported Error : ${JSON.stringify(error)}`;
    }
    if (touched && error) {
      return (
        <StyledError tag="p" color="red" size="textBig">
          {error}
        </StyledError>
      );
    }
    return null;
  }

  getHelper() {
    return (
      <Tooltip content={this.props.helper} offsetY={-5} hasEffect>
        <StyledIconHelper icon="info" />
      </Tooltip>
    );
  }

  formatTextValue = (value, type) => {
    let newValue = value.replace(/(\s?)/, '');
    if (type === 'email') {
      newValue = value.replace(/(\s+)/, '');
    }
    return newValue;
  };

  render() {
    const { field, label, labelValues, type, helper, required, intl } = this.props;

    if (!label) {
      return (
        <StyledLabel tag="label" color="black_light" size="textBig" htmlFor={field}>
          {this.getInput()}
          {!!helper && this.getHelper()}
          {this.getError()}
        </StyledLabel>
      );
    } else if (type === 'checkbox') {
      return (
        <StyledLabel tag="span" color="black_light" size="textBig" htmlFor={field}>
          {this.getInput()}
          {!!helper && this.getHelper()}
          {this.getError()}
        </StyledLabel>
      );
    }
    return (
      <StyledLabel tag="label" color="black_light" size="textBig" htmlFor={field}>
        <div>
          {typeof label === 'object' ? intl.formatMessage(label, labelValues) : label}
          {!!helper && this.getHelper()}
          {required && <span className="wildcard_required">&nbsp;*</span>}
        </div>
        {this.getInput()}
        {this.getError()}
      </StyledLabel>
    );
  }
}

Field.propTypes = {
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.node, 
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
  ]),
  labelValues: PropTypes.object,
  helper: PropTypes.node,
  error: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
    PropTypes.node,
  ]),
  placeholder: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
    PropTypes.node,
  ]),
  setValue: PropTypes.func,
  getValue: PropTypes.func,
  setTouched: PropTypes.func,
  getError: PropTypes.func,
  unite: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
    PropTypes.node,
  ]),
  getTouched: PropTypes.func,
  items: PropTypes.array,
  renderRadio: PropTypes.func,
  icon: PropTypes.string,
  content: PropTypes.node,
  intl: intlShape.isRequired,
};

Field = injectIntl(Field);

export { Field };

export default ({ field, ...rest }) => (
  <FormField field={field}>{(fieldActions) => <Field {...fieldActions} {...rest} field={field} />}</FormField>
);
