/* eslint-disable no-console */
/*
 *
 * ComponentList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Text from 'features/ui/components/Text';
import ProfilePicture from 'features/user/components/ProfilePicture';
import RoundedIcon from 'features/ui/components/RoundedIcon';
import RoundedNumber from 'features/ui/components/RoundedNumber';
import InputCheckbox from 'features/ui/form/inputs/InputCheckbox';
import { GetFormInput } from 'features/ui/form/Field';
import { OrangeButton, GreenButton, GreyButton, LightButton, RedButton } from 'features/ui/components/Button';

import ChangePasswordForm from 'features/user/auth/components/ChangePasswordForm';
import ResetPasswordForm from 'features/user/auth/components/ResetPasswordForm';
import ForgotPasswordForm from 'features/user/auth/components/ForgotPasswordForm';
import LoginForm from 'features/user/auth/components/LoginForm';
import RegisterForm from 'features/user/auth/components/RegisterForm';
import ProfilePictureForm from 'features/user/components/ProfilePictureForm';

import hocModal from 'features/ui/hoc/hocModal';

const user = {
  _id: 'dfskbosfdpsoh',
  firstName: 'Jordane',
  lastName: 'Pagand',
  email: 'jordane.pagand@apptitude.ch',
  isVerified: true,
};

const ComponentDescription = (
  { children, title, width, maxWidth }, // eslint-disable-line
) => (
  <div
    style={{
      backgroundColor: 'white',
      padding: '20px',
      display: 'flex',
      position: 'relative',
      minHeight: '300px',
      maxWidth,
      width,
      flexDirection: 'column',
    }}
  >
    <Text domElement="h1" color="black" size="title">
      {title || children.type.name}
    </Text>
    <div
      style={{
        margin: '30px auto auto auto',
        border: 'solid 1px #9D9A98',
        maxWidth,
        width,
      }}
    >
      {children}
    </div>
  </div>
);

const ComponentList = ({ toogleModalOpen }) => (
  <div>
    <Helmet title="ComponentList" />
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
      <ComponentDescription title="Avatar (unfound user)">
        <ProfilePicture firstName={user.firstName} lastName={user.lastName} />
      </ComponentDescription>
      <ComponentDescription>
        <ProfilePicture pictureUrl="https://randomuser.me/api/portraits/women/28.jpg" />
      </ComponentDescription>
      <ComponentDescription>
        <RoundedNumber value={3} />
      </ComponentDescription>
      <ComponentDescription>
        <RoundedIcon icon="home" />
      </ComponentDescription>
      <ComponentDescription>
        <OrangeButton tiny inline message="Mot de passe oublié ?" />
      </ComponentDescription>
      <ComponentDescription>
        <GreenButton inline message="Mot de passe oublié ?" />
      </ComponentDescription>
      <ComponentDescription>
        <GreyButton inline message="Mot de passe oublié ?" />
      </ComponentDescription>
      <ComponentDescription>
        <LightButton inline message="Mot de passe oublié ?" />
      </ComponentDescription>
      <ComponentDescription>
        <RedButton inline message="Mot de passe oublié ?" />
      </ComponentDescription>
      <ComponentDescription title="Modal">
        <GreenButton inline message="Ouvrir la modal" onClick={() => toogleModalOpen('test', <div>Hello</div>)} />
      </ComponentDescription>
      <ComponentDescription>
        <InputCheckbox name="test" label="test checkbox" id="test" />
      </ComponentDescription>
      <ComponentDescription title="InputText (with error)">
        <GetFormInput
          field="ville"
          label="Ville"
          placeholder="Ville"
          type="text"
          error="Merci de renseigner la ville"
          helper={<div>help!!!</div>}
        />
      </ComponentDescription>
      <ComponentDescription title="InputDatepicker">
        <GetFormInput field="landing" label="Arrivée" placeholder="Arrivée" type="date" />
      </ComponentDescription>
      <ComponentDescription title="InputSlider" width="270px">
        <GetFormInput field="cost" label="Prix" min={0} max={1000} type="slider" unite="CHF" />
      </ComponentDescription>
      <ComponentDescription title="InputStars">
        <GetFormInput field="score" label="Score" type="stars" starCount={5} />
      </ComponentDescription>
      <ComponentDescription title="InputNumber">
        <GetFormInput field="age" label="Age" placeholder="Age" type="number" />
      </ComponentDescription>
      <ComponentDescription title="InputTextArea">
        <GetFormInput field="avis" placeholder="Votre avis (facultatif)" type="textarea" />
      </ComponentDescription>
      <ComponentDescription title="InputBirthdate" width="100%">
        <GetFormInput field="birthdate" type="birthDate" />
      </ComponentDescription>
      <ComponentDescription maxWidth="calc(530px + 40px)">
        <LoginForm />
      </ComponentDescription>
      <ComponentDescription maxWidth="calc(530px + 40px)">
        <RegisterForm />
      </ComponentDescription>
      <ComponentDescription width="calc(530px + 40px)">
        <ProfilePictureForm />
      </ComponentDescription>
      <ComponentDescription maxWidth="530px">
        <ChangePasswordForm onSubmit={console.log} />
      </ComponentDescription>
      <ComponentDescription maxWidth="530px">
        <ResetPasswordForm onSubmit={console.log} />
      </ComponentDescription>
      <ComponentDescription maxWidth="530px">
        <ForgotPasswordForm onSubmit={console.log} />
      </ComponentDescription>
    </div>
  </div>
);

ComponentList.propTypes = {
  toogleModalOpen: PropTypes.func.isRequired,
};

export default hocModal(ComponentList);
