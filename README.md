## Concord React Components

Intended to be used as a common repository for reusable UI widgets.

This project was set up in the Fall of 2019. It followed this
[Design Systems for Developers](https://www.learnstorybook.com/design-systems-for-developers/) tutorial.

Typescipt was used intstead of plain JS.
It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app):

`npx create-react-app concord-react-components --typescript`

## Preview the components on the storybook server:
This project is audomatically deployed to [https://storybook.concord.org/](https://storybook.concord.org/) via github
[Netlify integration](https://app.netlify.com/)

## Getting Started
* First install dependencies `yarn install` from the project root.
* Run a local storybook server by typing `yarn run storybook` from the project root.
* Add components to `src/components/`
* Add stories for those components in `stories/`
* Add your components to the exports `index.ts`
* Use your new components in other projects by adding dependencies to
`concord-react-components` in your project's `package.json` file, and `import`-ing them.
* You can link `concord-react-components` to your working checkout by using
`npm link` from the projects top directory.
* Link the components into your target app by running
`npm link concord-react-components` from the target apps top directory. Remember
to remove the link, and link to actual NPM package later. The best practice when doing
this sort of work is probably to remove node_modules and do a clean install of
`concord-react-components` from npm.

## Publishing changes
* 'yarn build' to build `./dist`
* Adjust the version number in `package.json` adhering to semver. If the
release number is less than 1.0 then no promises are made. Otherwise if a components
property changes in an incompatible way, bump the major version number. New components
can simply bump the minor version number.
* `yarn publish` to push changes up to npm


### Converting SVGs to svgr-icons using svgr

You can convert SVG files into react functional components by using the
svgr command line tool. eg:
`cd source-icons`
`npx @svgr/cli --icon --out-dir ../src/components/svgr-icons --template ../svgr.config.js --ext tsx  *.svg`

## Documentation Links
* [Styled Components](https://www.styled-components.com/)
* [npm-link](https://docs.npmjs.com/cli/link.html)

## Other yarn Scripts:
In the project directory, you can run:

### `yarn run storybook`
Runs the storybook component browswer on a local port.

### `yarn run build`
Builds the `dist` folder for publishing to NPM<br />

### `yarn publish`
Will publish the `dist` folder to NPM.

### `yarn run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

2019-11-07 NP: It seems like we have no need for this linkage. We should
consider ejecting.

This project was originally setup using:
`npx create-react-app concord-react-components --typescript`

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

