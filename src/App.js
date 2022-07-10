import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBarContainer } from './containers/NavBarContainer';

function App(props) {
  return (
    <>
        <NavBarContainer />
        <div className='container'>

          <Outlet />
        </div>
    </>
  );
}

export default App;
