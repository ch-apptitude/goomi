const API_HOST = process.env.APIHOST || 'localhost';
const API_PORT = process.env.APIPORT || '5000';
const PORT = process.env.PORT || '3000';
const API_VERSION = process.env.NODE_ENV === 'production' ? 'api/v1' : 'v1';

const environment = {
  development: {
    url: `http://${API_HOST}:${API_PORT}/${API_VERSION}`,
  },
  production: {
    url: `/${API_VERSION}`,
  },
}[process.env.NODE_ENV || 'development'];

const config = Object.assign(
  {
    port: PORT,
    locale: [
      'en',
      // LOCAL FOR GENERATOR
    ],
    localStoragePrefix: '{{name}}',
    apiHost: API_HOST, // /!\ Need to cahnge this for the build prod :: write directly the APIHOST
    apiPort: API_PORT, // /!\ Need to cahnge this for the build prod :: write directly the APIPORT
    apiVersion: API_VERSION,
    app: {
      title: '{{name}}',
      description: 'Platforme for sports coach',

      head: {
        titleTemplate: '{{name}} : %s',

        link: [
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/static/assets/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            sizes: '32x32',
            href: '/static/assets/favicon-32x32.png',
            type: 'image/png',
          },
          {
            rel: 'icon',
            sizes: '16x16',
            href: '/static/assets/favicon-16x16.png',
            type: 'image/png',
          },
          {
            rel: 'manifest',
            sizes: '180x180',
            href: '/static/assets/manifest.json',
          },
          {
            rel: 'mask-icon',
            href: '/static/assets/safari-pinned-tab.svg',
            color: '#5bbad5',
          },
        ],

        meta: [
          {
            charSet: 'utf-8',
          },
          {
            name: 'description',
            content: 'Platforme for sports coach',
          },
          {
            name: 'theme-color',
            content: '#232323',
          },
        ],
      },
    },
  },
  environment,
);
module.exports = config;
