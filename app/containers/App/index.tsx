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

import HomePage from 'containers/HomePage';
import Home from './home';
import Login from '../auth/Login';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { isAuthenticated } from '../../commonUtils/auth';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/home" element={<HomePage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
