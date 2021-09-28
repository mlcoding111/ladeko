import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { Redirect } from 'react-router-dom'

import Navigation from './components/Navigation'
import Acceuil from './components/Acceuil/Acceuil'
import Prix from './components/Prix/Prix'
import Realisations from './components/Realisations/Realisations'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Acceuil} />
          <Route path="/prix" exact component={Prix} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/realisations" exact component={Realisations} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
        {/* <ButtonInstallPWA/> */}
        <Footer/> 
      </Router>

    </div>
  );

}

export default App;
