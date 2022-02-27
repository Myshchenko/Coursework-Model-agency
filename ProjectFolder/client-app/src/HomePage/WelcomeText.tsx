import { Button, Grid, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";

export default observer(function WelcomeText() {
    return (
        <Grid marginTop={31} >
            
            <Grid container item marginTop={3} direction="row"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h3" gutterBottom>username@gmail.com,</Typography>
            </Grid>

            <Grid container item direction="row"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h4" gutterBottom>вітаємо в системі!</Typography>
            </Grid>

            <Grid container item marginTop={10} direction="row"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h5" gutterBottom>Для подальшої роботи оберіть дію</Typography>
            </Grid>

            <Grid container item direction="row"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h5" gutterBottom>на панелі меню.</Typography>
            </Grid>

        </Grid>
    )
}
)