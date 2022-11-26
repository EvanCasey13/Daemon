import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Grid from "@mui/material/Grid";

const Genre = ({ genre }) => {

    return (
        <div className="Genre">
            <Grid container style={{ display: 'grid', alignItems: 'right' }}>
                <Grid item>
                    <List sx={{ width: '100%', maxWidth: 360, p: 2 }}>
                        <ListItem
                            disablePadding
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={genre.name} />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    );
};

export default Genre;