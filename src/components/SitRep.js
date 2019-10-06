import React, { Component } from "react";

import { List, ListItem, ListItemText} from "@material-ui/core";


class SitRep extends Component {

  render () {
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
          <h2>{this.props.title}</h2>
          <List>
            {this.props.data.map(record => (
                <ListItem button key={this.props.id}>
                  <ListItemText
                    primary={record.value}
                    secondary={record.key}
                  />
                </ListItem>
            ))}
          </List>
        </div>
    );
  }

}

export default SitRep;