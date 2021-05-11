import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      toolbar: {
        minHeight: 64,
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
      },
      title: {
        alignSelf: 'flex-end',
      },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant="h4" noWrap >
                Naz Tech LLC
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
