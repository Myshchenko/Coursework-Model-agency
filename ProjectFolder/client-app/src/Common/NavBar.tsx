import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NavBar() {

    const history = useHistory();

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: '#FFFFFF' }}>
                <Toolbar>
                    <Grid container justifyContent="center"
                        alignItems="center" >
                        <Grid item xs={4}>
                            <Button style={{ color: "#4B4946" }}
                                onClick={() => { history.push('/homepage'); }} >
                                <img src={`pictures/LogoText.png`} width={"140"} height={"30"} />
                            </Button>
                        </Grid>

                        <Grid item xs={1.3} >
                            <Button style={{ color: "#4B4946" }}>
                                Моделі
                            </Button>
                        </Grid>

                        <Grid item xs={1.3}>
                            <Button style={{ color: "#4B4946" }}>
                                Покази
                            </Button>
                        </Grid>

                        <Grid item xs={1.3}>
                            <Button style={{ color: "#4B4946" }}>
                                Репетиції
                            </Button>
                        </Grid>

                        <Grid item xs={1.3}>
                            <Button style={{ color: "#4B4946" }}>
                                Вихід
                            </Button>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    )
}