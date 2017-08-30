# GOOMI

Start a React project without configuration with Redux, Redux-Saga, styled-components, intl, server side rendering

*Made by [Nathan Loisel](https://twitter.com/Nathloisel) & [Jeremy Barthoux](https://twitter.com/jeremybarthoux), supported by [Apptitude](https://apptitude.ch)*

## Features

 - Generate all the boilerplate code with flexible [generators](#generators)
 - Internationalization with [react-intl](https://github.com/yahoo/react-intl)
 - CSS in JS styling with [styled-components](https://github.com/styled-components/styled-components)
 - React state management with [redux](https://github.com/reactjs/react-redux)
 - Easily manage asynchronous tasks with [redux-saga](https://github.com/redux-saga/redux-saga)


## Installation

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
└── src
    └── client
    └── server
    └── universal
      └── asset    <-- all static assets (images, fonts, themes)
      └── features <-- contains all components, containers, reducer and sagas organized by features (generated with CLI)
      └── redux
      └── appConfig.js
```
When the installation is over, run `npm run dev`  to start the application in dev mode.

### Generators
A couple of generators are embedded inside goomi based on [plop](https://github.com/amwmedia/plop).

- List all generators

- Generate a Feature folder
```
goomi generate feature
```
- Generate a new route
```
goomi generate route
```
- Generate a HOC
```
goomi generate hoc
```
- Generate a Component
```
goomi generate component
```
- Generate a Container
```
goomi generate container
```
- Add a new language
```
goomi generate language
```
- Generate translation files
```
goomi extract-intl
```

## TODO
 - React Native support
 - Electron support
 - import generators locally to edit them
 - document and harmonize the --all command parameter
 - precommit linting (can be specified at the project init)

## Support

Please [open an issue](https://github.com/ch-apptitude/goomi/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/ch-apptitude/goomi/compare/).
