import React, { useEffect } from "react"; import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../redux/appRedux";
import { Grid, Paper, Card, CardHeader, CardContent, TextField, Button, Stack, Typography, Checkbox } from "@mui/material";

const Fetchlist = () => {
  useEffect(() => {
    getPokemons()
  }, [])

  const dispatch = useDispatch();

  const getPokemons = async () => {
    try {
      dispatch(appActions.loading(true))
      const result = await api.GET(api.pokemons)
      if (result) {
        console.log('poke: ', result)
        setPokemons(result.results)
        setNext(result.next)
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(appActions.loading(false))
    }
  }

  return (
    /*     <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, backgroundColor: "#fcfcfc" }}>
              <Card sx={{ my: 2}}>
                <CardHeader title="Fechlist" />
    
              </Card>
            </Paper>
          </Grid>
        </Grid> */
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography component="div" variant="h5">
          Mi Pokedex
        </Typography>
      </Grid>
      {
        pokemons && pokemons.map((p, index) => {
          return (
            <Grid item xs={4} key={index}>
              {renderItem(p)}
            </Grid>
          )
        })
      }
      <Grid item xs={4} >
        <Card p={2} sx={{
          display: 'flex', height: 100, cursor: 'pointer',
          backgroundColor: '#317b52', '&:hover': { backgroundColor: '#5acdbd' }
        }}
          onClick={() => loadMore()}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{ color: 'white' }}>
              Cargar Más
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 100, p: 2 }}
            image={POKE_IMG}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Fetchlist;
