import React from "react";
import { Typography } from "@material-ui/core";
import { List, ListItem, ListItemText, ListItemIcon, IconButton, ListItemSecondaryAction} from "@material-ui/core";

function SitRep(props) {
  return (
      <div style={{ marginTop: 20, padding: 30 }}>
        <List container dense={true} justify="center">
          {records.map(record => (
              <ListItem item key={records.recordKey}>
                <ListItemText>
                <Typography gutterBottom variant="h5" component="h2">
                  {record.recordKey}
                </Typography>
                <Typography component="p">{record.value}</Typography>
                </ListItemText>
              </ListItem>
          ))}
        </List>
      </div>
  );
}

export default SitRep;

const records = [
  {
    recordKey: 'settingType',
    value: 'Starship',
    type: 'Setting',
    id: 'recxTxxVEsjjcqQAt',
  },
  {
    recordKey: 'settingWorkspaces',
    value: 'Type, type, type, and type',
    type: 'Setting',
    id: 'recBezBnHYioiN9sq',
  },
  {
    recordKey: 'settingWorkspacesType',
    value: '',
    type: 'Setting',
    id: 'recL33NWAVy8f0Cql',
  },
  {
    recordKey: 'settingWorkspaces',
    type: 'Setting',
    id: 'recSCi4Xu0s0d7Gzo',
  },
  {
    recordKey: 'starshipName',
    value: 'Shippy McShipface',
    type: 'Starship',
    id: 'recyBVrV6vbxhIdjl',
  },
  {
    recordKey: 'starshipClass',
    value: 'Class 2',
    type: 'Starship',
    id: 'reci5g6VEfCy9Q82k',
  },
  {
    recordKey: 'starshipID',
    value: 'GSID OICU812',
    type: 'Starship',
    id: 'reckUHjlZQgnvcy7G'
  },
  {
    recordKey: 'starshipType',
    value: 'Gunboat',
    type: 'Starship',
    id: 'recsvkNcPoO84x6q7'
  },
  {
    recordKey: 'starshipSize',
    value: '200 meters',
    type: 'Starship',
    id: 'rec0XBvJF5aeh3Dbb'
  },
  {
    recordKey: 'starshipStatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'recD17HiSXme6cSCv'
  },
  {
    recordKey: 'starshipHelmStatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'reckzK7wjf19qLo3p'
  },
  {
    recordKey: 'starshipWeaponStatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'recBcZFml1yCHNVyA'
  },
  {
    recordKey: 'starshipShieldStatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'recR8vpxi7kLxExf6'
  },
  {
    recordKey: 'starshipHullStatus',
    value: '45 percent',
    type: 'Starship',
    id: 'recTT0d6r9iERDbzd'
  },
  {
    recordKey: 'starshipMalfunctionStatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'recsz60RX76dkn5VI'
  },
  {
    recordKey: 'starshipMedicalStatus',
    value: 'Damaged',
    type: 'Starship',
    id: 'recKkW7pUFTpYA6wI'
  },
  {
    recordKey: 'starshipEngineeringStatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'rec6NCenRPDEypWM8'
  },
  {
    recordKey: 'starshipFTLstatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'rec9sfKgciFqZUJK9'
  },
  {
    recordKey: 'starshipQuarterStatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'recHSkLS8pfYEkHmo'
  },
  {
    recordKey: 'starshipCrewStatus',
    value: 'Cheery',
    type: 'Starship',
    id: 'recLyyXud1a0RuBx5'
  },
  {
    recordKey: 'starshipCrewsMorale',
    value: 'Cheery',
    type: 'Starship',
    id: 'rechAAKddGQK6h4bg'
  },
  {
    recordKey: 'starshipCargoBayStatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'reczKVqLPNIsyNQdP'
  },
  {
    recordKey: 'starshipCargoStatus',
    value: 'Nominal',
    type: 'Starship',
    id: 'reclJpNijOojpp3dk'
  },
  {
    recordKey: 'currentLocation',
    value: 'Unknown',
    type: 'Location',
    id: 'reca77emTzBuHMRsq'
  },
  {
    recordKey: 'currentSectornetAccess',
    value: 'Unknown',
    type: 'Location',
    id: 'recMA2GQ0BVsGAUuK'
  },
  {
    recordKey: 'currentGridscapeConnection',
    value: 'Unknown',
    type: 'Location',
    id: 'recUSo9BXShB7DADf'
  },
  {
    recordKey: 'currentGateAvailability',
    value: 'Unknown',
    type: 'Location',
    id: 'recv0nRq5pFGnxdPS'
  },
  {
    recordKey: 'currentLocationInfo',
    value: 'Unknown',
    type: 'Location',
    id: 'recqBnyFgpEMtjoPQ'
  },
  {
    recordKey: 'currentLocationDescription',
    value: 'Unknown',
    type: 'Location',
    id: 'reccSVNLmsqSJkfOz'
  },
  {
    recordKey: 'currentLocationFactions',
    value: 'Unknown',
    type: 'Location',
    id: 'recWcYM8MycCWWA1i'
  },
  {
    recordKey: 'currentLocationFactions',
    value: 'Unknown',
    type: 'Location',
    id: 'rec8pKdTMgqBsIYPe'
  },
  {
    recordKey: 'currentLocationOther',
    value: 'Unknown',
    type: 'Location',
    id: 'rec9Kq8iNwtr1fDNM'
  },
  {
    recordKey: 'currentLocationThreats',
    value: 'Unknown',
    type: 'Location',
    id: 'rec1v4RtP9U2hnVQw'
  }
];
