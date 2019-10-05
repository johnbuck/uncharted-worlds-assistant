import React,  { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
//import NavBar from './components/NavBar'
import SitRep from './components/SitRep'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      records: [],
    };
  }

  componentDidMount() {
    fetch('/.netlify/functions/getAllRecords/getAllRecords.js')
        .then((resp) => resp.json())
        .then(data => {
          this.setState({ records: data.records });
        }).catch(err => {
      // Error :(
    });
  }

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
          <SitRep records={this.state.records}/>
        </div>
    );
  }
}
export default App

