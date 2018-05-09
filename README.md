This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Implementations

* All demands in the assessment task file.
* Sample Unit testing (test actions and some components)
* Simple BEM implementation
* SCSS support
* Redux state management


## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      BlanaceListRow/
        BlanaceListRow.js
        BlanaceListRow.test.js
      List/
        List.js
    containers/
      Account.js
      Account.scss
      Balance.js
    store/
      balance/
        actions.js
        actionTypes.js
        actions.test.js
        reducre.js
    App.scss
    App.js
    App.test.js
    index.scss
    index.js
    logo.svg
    registerServiceWorker.js
    setUpTests.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`
