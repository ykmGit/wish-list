import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export const ListDividers = () => {
  return (
    <>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </>
  );
}
