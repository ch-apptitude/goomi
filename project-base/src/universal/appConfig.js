const PORT = process.env.PORT || '3000';

const environment = {
  development: {},
  production: {},
}[process.env.NODE_ENV || 'development'];

const config = Object.assign(
  {
    port: PORT,
    locale: [
      'en',
      // LOCAL FOR GENERATOR
    ],
    localStoragePrefix: '{{name}}',
    app: {
      title: '{{name}}',
      description: '',

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
            content: '',
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
