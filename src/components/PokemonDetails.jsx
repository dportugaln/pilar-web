import React from "react";
import { IMG_URL } from "../constants/Index";
import { Dialog, DialogTitle, DialogContent, Typography, CardMedia } from "@mui/material";

const PokemonDetail = ({ open, onClose, pokemon }) => {
  if (!pokemon) return null;

  const getPokemonImgId = (id) => {
    switch (id.toString().length) {
      case 1:
        return `00${id}`;
      case 2:
        return `0${id}`;
      default:
        return id;
    }
  };

  const imgID = getPokemonImgId(pokemon.id);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{pokemon.name}</DialogTitle>
      <DialogContent>
        <Typography>N° {imgID}</Typography>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          src={`${IMG_URL}/${imgID}.png`}
          alt="Pokemon"
        />
        {/* Movimientos y habilidades */}
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDetail;
