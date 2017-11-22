// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCSmaxFFVSb_62gU1bxKK-qhYXZfnmqBHA',
    authDomain: 'hh-donators.firebaseapp.com',
    databaseURL: 'https://hh-donators.firebaseio.com',
    projectId: 'hh-donators',
    storageBucket: 'hh-donators.appspot.com',
    messagingSenderId: '42072596377'
  }
};
