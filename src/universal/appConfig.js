const environment = {
  development: {},
  production: {},
}[process.env.NODE_ENV || 'development'];

const config = Object.assign(
  {
    locale: [
      'fr',
      // LOCAL FOR GENERATOR
    ],
    localStoragePrefix: 'Goomi',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3000',
    apiHost: process.env.APIHOST || 'localhost', // /!\ Need to cahnge this for the build prod :: write directly the APIHOST
    apiPort: process.env.APIPORT || '5000', // /!\ Need to cahnge this for the build prod :: write directly the APIPORT
    apiVersion: process.env.NODE_ENV === 'production' ? 'api/v1' : 'v1',
    socketUrl: process.env.NODE_ENV === 'production' ? '' : 'localhost:5000',
    app: {
      title: 'Goomi',
      description: 'Platforme for sports coach',

      head: {
        titleTemplate: 'Goomi : %s',

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

Object.assign(config, {
  url:
    process.env.NODE_ENV === 'production'
      ? `/${config.apiVersion}`
      : `http://${config.apiHost}:${config.apiPort}/${config.apiVersion}`,
});

module.exports = config;
