import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        direction:"row",
        justify: "space-around"
    },
    button: {
        backgroundColor: "red",
        color: "white"
    }
}))

function ButtonBar () {
    const classes = useStyles()
    return (
        <Grid container
        direction="row"
        justify="space-around"
        alignItems="center">
            <Button size="large" color='primary'>About Company</Button>
            <Button className={classes.button}>Services Provided</Button>
            <Button>Free Quote Request</Button>
        </Grid>
    )
}

export default ButtonBar