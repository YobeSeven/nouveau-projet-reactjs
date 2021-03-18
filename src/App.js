//& Import "React" &//
import React, { Fragment } from 'react';
//& Import "BrowserRouter", "Route", "Switch" &//
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//& Import "pages" &//
import Home from './pages/Home';
import Erreur from './pages/Erreur';

//! ------------------------------------------------------------------------------------------------------------------------------------------------------------------ !//

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          < Route path='/' exact component={Home} />
          < Route component={Erreur} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
