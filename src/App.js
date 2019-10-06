import React,  { Component } from 'react'
//import { ThemeProvider } from '@material-ui/styles';
import { Container, Grid, Toolbar, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import SitRep from './components/SitRep'

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
              <Typography variant="title" color="inherit">
                Uncharted Worlds Assistant
              </Typography>
            </Toolbar>
          </AppBar>

          <Container maxWidth="md">
            <Grid container justify="center">
              <Grid item xs={6}>
                <SitRep title="Starship Status" data={starship}/>
              </Grid>
              <Grid item xs={6}>
                <SitRep title="Setting" data={setting}/>
                <SitRep title="Relevant Local Info" data={location}/>
              </Grid>
            </Grid>
          </Container>
          </div>
    );
  }
}
export default App

