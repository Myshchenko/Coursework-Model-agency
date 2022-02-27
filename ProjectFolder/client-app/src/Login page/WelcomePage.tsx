import { Grid } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import LoginInputs from "./LoginInputs";
import { useStore } from "../Stores/Store";
import LogoArea from "./LogoArea";

export default observer(function WelcomePage() {

    const { userStore } = useStore();

    return (
        <Grid container spacing={3}>
            <Grid item xs={5}>
                <LoginInputs />
            </Grid>
            <Grid item xs={6}>
               <LogoArea/>
            </Grid>
        </Grid>
    )}
)