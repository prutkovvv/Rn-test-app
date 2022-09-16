# Rn-test-app

## Requirements:

- 3 pages/screens/views:
  - Home page that has link/button to **page A** and **page B**
  - **Page A** that has a link/button to **page B**
  - **Page B** that has a
  - **Page B** that has a link/button that would send app user to home screen
  - **Page B** also has a link/button that opens a web-view of random website and features back button so get back to your previous screen
  - _Optional_: Animate switches between screens
- Hardware back button should be **disabled**
- There must be a button to go backwards to previous page(when previous page is available)
- If app user decides to close app, make sure app user gets last used screen and previous states are available to continue work with the app.
- Optional: App could feature **splash screen**
- Even if some parts of application is missing, make a project structure that would reflect how you would structure project(Use .git_keep to keep folder structure intact )

## Technical stack

- Expo
- React-native
- React-navigation
- React
- Async-storage
- Typescript

## App description & features implementation

Simple React-native application using Expo. App has 3 screens which were created using **React-navigation v6**.

- Save previous navigation state feature was implemented using Async Storage to save current navigation state and its subsequent extraction for throwing into NavigationContainer.
- Disable hardware back button feature was implemented using BackHandler and custom handler.
- App has **icon** and **splash screen** which were created using design tool - Figma.
- Usage of **Native stack navigator** provides application with animated switches between screens.
- The UI part of the application was created by React-native components.

## Repository features

1. **Eslint** and **Prettier** to follow code errors and having the same code style with each developer.
2. **Husky** provides with pre-commit hook to prevent developers making commits with code errors.

## Project structure

Project structure consist of these folders:

- assets - for basic assets(fonts, images, etc.)
- scripts - for app scripts.
- src - main folder for application code
  - components - for basic app components
  - configs - for app configurations.
  - constants - for app constants.
  - router - for navigation (stacks, tabs, their types, etc.)
  - scenes - for app pages (scene - separate application screen)
  - services - for communication with backend logic, services for application(AsyncStorage service, etc.)
  - styles - for common app styles
  - utils - for applications helper functions, or hooks
  - store - state manager logic (redux)
    - actions - functions for triggering sagas or reducers listeners
    - reducers - actions handlers, storing data logic
    - sagas - to tackling parallel execution, task concurrency, handling async request
    - selectors - functions for bringing data from the store to components
    - types - store types (e.g. interfaces, types)

## Installation

To run this app, you need to install node.js (preferably LTS version).
Then run the following command:

`npm install`

## Start

To start application at physical device just run:

1. Download app Expo Go via Play market for android or App store for ios
2. Run `npm start` from the project root
3. Scan Qr code from the console using Expo Go

## Development

To run a development version via emulators you need development environment to be installed:

1. Android Studio - for android
2. Xcode - for ios

and then run:

For iOS: `npm run ios`
For Android: `npm run android`
