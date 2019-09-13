import React from 'react';
import './App.css';
import SideNav from './components/sidebar/sideBar';
import { BrowserRouter, Route } from 'react-router-dom';
import '../src/components/sidebar/sideBar.scss';
import Login from './components/login/login';
function App() {
  // This is to hide and show the side navbar
  const currentPath = window.location.pathname;
  return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/login' component={Login} />
          { !currentPath.includes('login') && <SideNav /> }
        </div>
      </BrowserRouter>
  );
}

export default App;
