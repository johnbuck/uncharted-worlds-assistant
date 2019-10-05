import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { List, ListItem, ListItemText, ListItemIcon, IconButton, ListItemSecondaryAction} from "@material-ui/core";


class SitRep extends Component {

  render () {
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
          <List>
            {this.props.data.map(record => (
                <ListItem item key={record.id}>
                  <ListItemText>
                    <Typography gutterBottom variant="h5" component="h2">
                      {record.key}
                    </Typography>
                    <Typography component="p">{record.value}</Typography>
                  </ListItemText>
                </ListItem>
            ))}
          </List>
        </div>
    );
  }

}

export default SitRep;