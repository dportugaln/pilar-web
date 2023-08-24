import React from "react";
import { Grid, Paper, Box, Card, CardContent, Typography } from '@mui/material';
import ToDoImg from '../../assets/images/todo.png';
import FetchlistImg from '../../assets/images/fetchlist.png';

const Dashboard = () => {
    const redirectToTodo = () => {
        window.location.href = "/todo";
    };

    const redirectToFetchlist = () => {
        window.location.href = "/fetchlist";
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2,  }}>
                    <Box>
                        Dashboard
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Card onClick={redirectToTodo} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" style={{ marginRight: '10px' }}>
                            Todo
                        </Typography>
                        <img src={ToDoImg} style={{ maxWidth: '30px' }} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card onClick={redirectToFetchlist} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" style={{ marginRight: '10px' }}>
                            Fechlist
                        </Typography>
                        <img src={FetchlistImg} style={{ maxWidth: '30px' }} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
