import React,  { Component } from 'react'
import Grid from '@material-ui/core/Grid'
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

          <Grid container>
            <Grid item xs={6}>
              <SitRep records={this.state.records}/>
            </Grid>
            <Grid item xs={6}>
              <SitRep records={this.state.records}/>
            </Grid>
          </Grid>
        </div>
    );
  }
}
export default App

