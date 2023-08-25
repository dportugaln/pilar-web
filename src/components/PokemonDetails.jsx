import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, CardMedia } from "@mui/material";

const PokemonDetail = ({ open, onClose, pokemon }) => {
  if (!pokemon) return null;

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
        {/* Aquí puedes agregar más detalles como la lista de movimientos y habilidades */}
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDetail;
