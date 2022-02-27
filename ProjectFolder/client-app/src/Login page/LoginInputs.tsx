import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
    placeholder: string;
    name: string;
    type?: string;
    label?: string;
}

export default function LoginInputs() {

    const history = useHistory();

    return (
        <Grid marginTop={22} marginLeft={17}>
            <Grid container item marginTop={3}>
                <Typography variant="h4" gutterBottom><b>Будь ласка, авторизуйтеся.</b></Typography>
            </Grid>
            <Grid container item >
                <TextField id="standard-basic" label="Поштова адреса" variant="standard" sx={{ width: '40ch' }} />
            </Grid>
            <Grid container item marginTop={2} >
                <TextField id="standard-basic" label="Пароль" variant="standard" type="password" sx={{ width: '40ch' }} />
            </Grid>
            <Grid container item marginTop={3} direction="row"
                justifyContent="center"
                alignItems="center">
                <Button style={{ backgroundColor: "#4B4946" }} variant="contained"
                    onClick={() => {
                        history.push('/homepage');
                    }}>
                    Увійти</Button>
            </Grid>
            <Grid container item marginTop={3} direction="row"
                justifyContent="center"
                alignItems="center">
                <Typography variant="subtitle1" gutterBottom>Проблеми зі входом?</Typography>

            </Grid>
            <Grid container item direction="row"
                justifyContent="center"
                alignItems="center">
                <Typography variant="subtitle1" gutterBottom>Зверніться за адресою help-center@wfashion.com</Typography>
            </Grid>
        </Grid>
    )
}