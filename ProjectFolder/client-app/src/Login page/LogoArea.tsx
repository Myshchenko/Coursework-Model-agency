import { Grid } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";

export default observer(function LogoArea() {

    return (
        <Grid container
            justifyContent="center"
            alignItems="center" marginTop={13} marginLeft={10}>
            <img src={`pictures/Logo.png`} width={"560"} height={"450"} />
        </Grid>
    )
}
)