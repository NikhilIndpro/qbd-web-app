/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Import all the third party stuff
import React from 'react';
import client from 'react-dom/client';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// Import root app
import App from 'containers/App';

// Import Language Provider

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';

import { HelmetProvider } from 'react-helmet-async';

import {configureAppStore} from './configureStore';
require("../app/css/app.css");

// Import i18n messages
// import { translationMessages } from './i18n';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

// Create redux store with history
const store = configureAppStore();

const MOUNT_NODE = document.getElementById('app') as HTMLElement;
const root = client.createRoot(MOUNT_NODE)





  root.render(
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>,
  );


if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install();
}
