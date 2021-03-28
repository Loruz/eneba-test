import React from 'react';
import './assets/styles/App.css';
import AppNavigation from './components/AppNavigation/AppNavigation'
import AppFooter from './components/AppFooter/AppFooter'
import ProjectPage from './components/ProjectPage/ProjectPage'

function App() {
  return (
    <div className="app">
      <AppNavigation/>
        <ProjectPage/>
      <AppFooter/>
    </div>
  );
}

export default App;
