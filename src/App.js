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
      apiResponse: [],
    };
  }

  componentDidMount() {
    fetch('/.netlify/functions/getAllRecords/getAllRecords.js')
        .then((resp) => resp.json())
        .then(data => {
          this.setState({ apiResponse: data.records });
        }).catch(err => {
      // Error :(
    });
  }

  render() {

    let starship = this.state.apiResponse.filter(t=>t.type === 'Starship');
    let setting = this.state.apiResponse.filter(t=>t.type === 'Setting');
    let location = this.state.apiResponse.filter(t=>t.type === 'Location');

    return (
        <div className="App">
          <AppBar color="primary" position="static">
            <Toolbar>
              <TypoGraphy variant="title" color="inherit">
                Uncharted Worlds Assistant
              </TypoGraphy>
            </Toolbar>
          </AppBar>

          <Grid container>
            <Grid item xs={6}>
              <SitRep data={starship}/>
            </Grid>
            <Grid item xs={6}>
              <SitRep data={setting}/>
              <SitRep data={location}/>
            </Grid>
        </Grid>
        </div>
    );
  }
}
export default App

