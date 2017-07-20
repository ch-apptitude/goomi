/**
*
* Field
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormField } from 'react-form';

import Text from 'features/ui/components/Text';
import Icon from 'features/ui/components/Icon';
import Tooltip from 'features/ui/components/Tooltip';

import errorMessages from 'features/ui/form/error-messages';

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

import styles from './styles.scss';

export class GetFormInput extends PureComponent {
  onChange = (value) => {
    if (this.props.type === 'email' || this.props.type === 'password' || this.props.type === 'text') {
      this.props.setValue(this.formatTextValue(value));
    } else {
      this.props.setValue(value);
    }
  };

  setTouched = () => this.props.setValue && this.props.setTouched(true);

  getInput() {
    const { error, type, field, label, placeholder, getValue, unite, disabled, required, autoFocus, ...etc } = this.props;
    let placeHolderMessage = placeholder;
    if (typeof placeholder === 'object') {
      placeHolderMessage = this.context.intl.formatMessage(placeholder);
    }
    let inputUnite = unite;
    if (typeof unite === 'object') {
      inputUnite = this.context.intl.formatMessage(unite);
    }

    let className = this.props.className;
    if (error) {
      className = `${className} ${styles.Field__Input_HasError}`;
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
    const { getTouched, getError, type } = this.props;
    const touched = getTouched();
    let error = this.props.error;
    if (getError()) {
      error = getError();
    }

    if (error && Array.isArray(error)) {
      error = error.map(
        (err) => (errorMessages[err] ? this.context.intl.formatMessage(errorMessages[err]) : `Unsupported Error : ${err}`),
      );
    } else if (error && typeof error === 'object') {
      error = errorMessages[error.name]
        ? this.context.intl.formatMessage(errorMessages[error.name], error.values)
        : `Unsupported Error : ${JSON.stringify(error)}`;
    }
    if (touched && error) {
      return (
        <Text className={styles.Field__Error} domElement="p" color="red" size="textBig">
          {error}
        </Text>
      );
    }
    if (type === 'radioGroup') {
      return null;
    }
    return <div className={styles.Field__Error} />;
  }

  getHelper() {
    return (
      <Tooltip content={this.props.helper} offsetY={-5} hasEffect>
        <Icon icon="info" className={styles.Field__Label__Helper} />
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
    const { field, label, type, helper, required } = this.props;

    if (!label) {
      return (
        <Text domElement="label" color="black_light" size="textBig" htmlFor={field} className={styles.Field__Label}>
          {this.getInput()}
          {!!helper && this.getHelper()}
          {this.getError()}
        </Text>
      );
    } else if (type === 'checkbox') {
      return (
        <Text domElement="span" color="black_light" size="textBig" htmlFor={field} className={styles.Field__Label}>
          {this.getInput()}
          {!!helper && this.getHelper()}
          {this.getError()}
        </Text>
      );
    }
    return (
      <Text domElement="label" color="black_light" size="textBig" htmlFor={field} className={styles.Field__Label}>
        <div>
          {label}
          {!!helper && this.getHelper()}
          {required && <span className={styles.Field__Label__Required}>&nbsp;*</span>}
        </div>
        {this.getInput()}
        {this.getError()}
      </Text>
    );
  }
}

GetFormInput.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

GetFormInput.propTypes = {
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.oneOf([null, undefined])]),
  helper: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.oneOf([null, undefined])]),
  error: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    PropTypes.string,
    PropTypes.oneOf([null, undefined]),
  ]),
  placeholder: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]),
  setValue: PropTypes.func,
  getValue: PropTypes.func,
  setTouched: PropTypes.func,
  getError: PropTypes.func,
  unite: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]),
  getTouched: PropTypes.func,
  items: PropTypes.array,
  renderRadio: PropTypes.func,
  icon: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
};

GetFormInput.defaultProps = {
  setTouched: () => {},
  getValue: () => {},
  setValue: () => {},
  getTouched: () => true,
  getError: () => {},
  label: '',
  icon: '',
  error: undefined,
  unite: undefined,
  helper: undefined,
  disabled: false,
  autoFocus: false,
  required: false,
  className: styles.Field__Input,
  content: '',
  placeholder: '',
  items: [],
  renderRadio: () => <div />,
};

const Field = ({ field, ...rest }) => (
  <FormField field={field}>{(fieldActions) => <GetFormInput {...fieldActions} {...rest} field={field} />}</FormField>
);

Field.propTypes = {
  field: PropTypes.string.isRequired,
};

export default Field;
