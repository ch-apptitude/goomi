import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    height: 100%;
    background-color: #fbda61;
    background-image: -webkit-linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
    background-image: -moz-linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
    background-image: -o-linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
    background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: $font-family;
    font-size: $base-font-size;
    position: relative;
    font-family: $font-family;
    font-size: $base-font-size;
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
    color: inherit;
    text-decoration: none;
  }

  a {
    width: auto;
    color: inherit;
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
