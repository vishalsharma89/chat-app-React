// import React from 'react'
// import { Route } from 'react-router-dom';
// import {  } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css'
import Mailer from './components/Mailer';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import Home from './pages/Home';
// import SignIn from './pages/SignIn';
import './styles/main.scss';
import { ErrorBoundary } from './components/ErrorBoundary';

const SignIn = lazy(() => import('./pages/SignIn'))

function App() {
  return (
    <ErrorBoundary>

      <ProfileProvider>

        <Switch>
          <PublicRoute path="/signin">
            {/* <SignIn /> */}
            <Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>
          </PublicRoute>
          <Route exact path="/contact" component={Mailer} />
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </ProfileProvider>
    </ErrorBoundary>
  );
}

export default App;
