import { injectGlobal } from 'styled-components';

import PalanquinRegular2 from 'assets/fonts/palanquin/Palanquin-Regular.woff2';
import PalanquinRegular from 'assets/fonts/palanquin/Palanquin-Regular.woff';

import PalanquinBold2 from 'assets/fonts/palanquin/Palanquin-Bold.woff2';
import PalanquinBold from 'assets/fonts/palanquin/Palanquin-Bold.woff';

import PalanquinLight2 from 'assets/fonts/palanquin/Palanquin-Light.woff2';
import PalanquinLight from 'assets/fonts/palanquin/Palanquin-Light.woff';

injectGlobal`
  @font-face {
    font-family: 'Palanquin';
    src: 
      url('${PalanquinRegular2}') format('woff2'),
      url('${PalanquinRegular}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Palanquin';
    src: 
      url('${PalanquinBold2}') format('woff2'),
      url('${PalanquinBold}') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Palanquin';
    src: 
      url('${PalanquinLight2}') format('woff2'),
      url('${PalanquinLight}') format('woff');
    font-weight: lighter;
    font-style: normal;
  }


  html {
    height: 100%;
    background-color: white;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: Palanquin;
    font-size: 13px;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-rendering: geometricPrecision;
    -moz-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .clear {
    clear: both;
  }

  #root {
    height: 100%;
  }

  .ReactModalPortal {
    height: 100%;
    width: 100%;
    position: fixed;
  }

  img {
    width: 100%;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #efecea inset;
    box-shadow: 0 0 0 1000px #efecea inset;
    -webkit-text-fill-color: #545352 !important;
  }

  a:-webkit-any-link {
    color: auto;
    text-decoration: none;
  }

  a {
    color: auto;
    text-decoration: none;
  }

  a:focus,
  input:focus {
    outline: 0;
  }

  button,
  button:active,
  button:focus,
  button:hover {
    -webkit-appearance: none;
    border-color: none;
    outline: -webkit-focus-ring-color none;
    border-image: none;
  }
`;
