import React from "react";
import { Grid, Paper, Card, CardHeader, CardContent } from "@mui/material";

const Todo = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Card>
            <CardHeader title="To do" />

          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Todo;
