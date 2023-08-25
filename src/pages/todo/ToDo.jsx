import React from "react";
import { Grid, Paper, Card, CardHeader, CardContent } from "@mui/material";

const Todo = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="To do" />

        </Card>
      </Grid>
    </Grid>
  );
};

export default Todo;
