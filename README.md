# GOOMI

Start a React project without configuration with Redux, Redux-Saga, PostCSS, intl, server side rendering

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Download to your project directory, add `README.md`, and commit:

```
npm install -g goomi
```

## Usage

### Initialize your project

```
goomi init myApplicationName
```

It will create a directory called `myApplicationName`.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:
```
myApplicationName
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── webpack
├── tools
├── generators
└── src
    └── client
    └── server
    └── universal
      └── assets
      └── features
      └── hoc
      └── redux
      └── services
      └── appConfig.js
```
When the installation is over, run `npm run dev`  to start the application in dev mode.


## Support

Please [open an issue](https://github.com/ch-apptitude/goomi/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/ch-apptitude/goomi/compare/).
