import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import { Route, Routes } from 'react-router-dom';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/repos" element={<RepoPage />} />
          </Routes>
        </Content>
      </>
    );
  }
}

export default App;
