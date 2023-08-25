import React from "react";
import { Grid, Paper, Card, CardHeader, CardContent } from "@mui/material";

const Fetchlist = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, backgroundColor: "#fcfcfc" }}>
          <Card sx={{ my: 2}}>
            <CardHeader title="Fechlist" />

          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Fetchlist;
