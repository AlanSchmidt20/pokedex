import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const PokemonInformation = (props) => {
  const { pokemon, isShown, handleClose, typeClassNames } = props;
  console.log(pokemon);

  return (
    <Dialog
      open={isShown}
      fullWidth
      onClose={handleClose}
      className="pokemonInformation-container"
    >
      <DialogContent className="pokemonInformation-content">
        <DialogTitle className="pokemonInformation-title">
          <h1>{pokemon.name}</h1>
          <h1>#{pokemon.id}</h1>
        </DialogTitle>
        <div className="pokemonInformation-stats-container">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemonInformation-img"
          />

          <div className="pokemonInformation-stats">
            <div>
              {pokemon.stats.map((stat, idx) => {
                return (
                  <div className="baseStats-container">
                    <span className="stats-name">{stat.stat.name}:</span>
                    <div key={idx} className="stats">
                      {stat.base_stat}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="weight-container">
              <span>Weight:</span>
              <div className="stats">{pokemon.weight}</div>
            </div>
            <div className="height-container">
              <span>Height:</span>
              <div className="stats">{pokemon.height}</div>
            </div>
            <div className="abilities-container">
              <span>Abilities:</span>
              {pokemon.abilities.map((ability, idx) => {
                return (
                  <div key={idx} className="stats">
                    {ability.ability.name}
                  </div>
                );
              })}
            </div>
            <div className="type-container">
              <span>Type:</span>
              {pokemon.types.map((type, idx) => {
                const typeClassName = `pokemon-type-text ${
                  typeClassNames[type.type.name] || ""
                }`;
                return (
                  <div key={idx} className={`${typeClassName} stats`}>
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pokemonInformation-button">
          <button onClick={handleClose}>Close</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonInformation;
