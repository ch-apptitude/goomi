import App from 'features/common_ui/app/App';
import ComponentList from 'features/routing/pages/ComponentList';
import LoginPage from 'features/routing/pages/LoginPage';
import ProfilePage from 'features/routing/pages/ProfilePage';

import RegisterSuccess from 'features/user/auth/components/RegisterSuccess';
import ProfileCompleted from 'features/user/auth/components/ProfileCompleted';

import EditUserContainer from 'features/user/containers/EditUserContainer';
import UserProfile from 'features/user/components/UserProfile';
import RegisterUserContainer from 'features/user/auth/containers/RegisterUserContainer';
import ChangePasswordContainer from 'features/user/auth/containers/ChangePasswordContainer';

import RegisterPage from 'features/routing/pages/RegisterPage';
import HomePage from 'features/routing/pages/HomePage';
import NotFoundPage from 'features/routing/pages/NotFoundPage';

import UnverifiedEmail from 'features/routing/pages/UnverifiedEmail';
import EmailValidationPage from 'features/routing/pages/EmailValidationPage';
import ForgotPasswordPage from 'features/routing/pages/ForgotPasswordPage';
import ResetPasswordPage from 'features/routing/pages/ResetPasswordPage';
import { USER_STATUS } from 'features/user/constants';
import HOCRedirect from 'features/routing/hoc/HOCRedirect';
import config from 'appConfig';

/** ***************************
*
****** DOCUMENTATIONS: ********
http://knowbody.github.io/react-router-docs/api/Route.html
https://github.com/ReactTraining/react-router/blob/v3/docs/guides/RouteConfiguration.md
*
******************************/

/* apptitude IMPORT DO NOT TOUCH  */
export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      component: HomePage,
    },
    !config.isProduction && {
      path: '/components',
      component: ComponentList,
    },
    {
      path: '/login',
      component: HOCRedirect(LoginPage, null, USER_STATUS.LOGGED_IN),
    },
    {
      path: '/profile',
      component: HOCRedirect(ProfilePage, USER_STATUS.LOGGED_IN),
      indexRoute: {
        component: HOCRedirect(UserProfile, USER_STATUS.WORKER),
      },
      childRoutes: [
        {
          path: '/edit',
          component: HOCRedirect(EditUserContainer, USER_STATUS.PROFILE_COMPLETE),
        },
        {
          path: 'change-password',
          component: ChangePasswordContainer,
        },
      ],
    },
    {
      path: '/register',
      component: RegisterPage,
      indexRoute: {
        component: HOCRedirect(RegisterUserContainer, null, USER_STATUS.LOGGED_IN),
      },
      childRoutes: [
        {
          path: 'success',
          component: HOCRedirect(RegisterSuccess, null, USER_STATUS.VERIFIED),
        },
        {
          path: 'profile-completed',
          component: HOCRedirect(ProfileCompleted, USER_STATUS.VERIFIED),
        },
      ],
    },
    {
      path: '/account/unverified-email',
      component: HOCRedirect(UnverifiedEmail, null, USER_STATUS.VERIFIED),
    },
    {
      path: '/account/validate',
      component: EmailValidationPage,
    },
    {
      path: '/forgot-password',
      component: HOCRedirect(ForgotPasswordPage, null, USER_STATUS.LOGGED_IN),
    },
    {
      path: '/reset-password',
      component: HOCRedirect(ResetPasswordPage, null, USER_STATUS.LOGGED_IN),
    },
    /* apptitude ROUTE DO NOT TOUCH */
    {
      path: '*',
      component: NotFoundPage,
    },
  ],
};
