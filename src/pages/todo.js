/* import React, {useEffect} from "react";
import {
    Grid, Paper, Box
    }	from '@mui/material';
    
    const ToDo = () => {
    return (
    <Grid container spacing={3}>
    <Grid item xs={12}>
    <Paper sx={{p: 2}}>
    <Box>
    ToDo
    </Box>
    </Paper>
    </Grid>
    </Grid>
    );
    };
    
    
    export default ToDo;
     */

    import React, { useEffect, useState } from "react";



import {
  Grid,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";

const Todo = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Card>
            <CardHeader title="Agrega una tarea" />
            <CardContent>
              <Stack sx={{ justifyContent: "space-around" }} direction="row">

              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Tareas" />
            
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Todo;
