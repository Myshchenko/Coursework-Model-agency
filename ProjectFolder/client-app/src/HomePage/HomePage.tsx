import { Grid } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import NavBar from "../Common/NavBar";
import { useStore } from "../Stores/Store";
import PhotoArea from "./PhotoArea";
import WelcomeText from "./WelcomeText";

export default observer(function HomePage() {

    const { userStore } = useStore();

    return (
        <>
            <NavBar />
            <Grid container>
                <Grid item xs={4.5}>
                    <PhotoArea />
                </Grid>
                <Grid item xs={6}>
                    <WelcomeText />
                </Grid>
            </Grid>
        </>

    )
}
)