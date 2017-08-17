import App from 'features/common_ui/app/App';
import HomePage from 'features/routing/pages/HomePage';
import NotFoundPage from 'features/routing/pages/NotFoundPage';

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
    /* apptitude ROUTE DO NOT TOUCH */
    {
      path: '*',
      component: NotFoundPage,
    },
  ],
};
