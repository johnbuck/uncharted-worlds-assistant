import React,  { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
//import NavBar from './components/NavBar'
import SitRep from './components/SitRep'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

class App extends Component {
  render() {
    return (
        <div className="App">
          <AppBar color="primary" position="static">
            <Toolbar>
              <TypoGraphy variant="title"
                          color="inherit"
              >
                Uncharted Worlds Assistant
              </TypoGraphy>
            </Toolbar>
          </AppBar>
          <SitRep spacing={40} />
        </div>
    );
  }
}
export default App

