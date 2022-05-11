/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

import HomePage from 'containers/HomePage';
import Home from './home';
import Login from '../auth/Login';
import TwoStepLogIn from "../auth/TwoStepLogIn"
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { isAuthenticated } from '../../commonUtils/auth';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TwoStepLogIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
