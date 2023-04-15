import React, { useContext, useState } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import PokemonInformation from "./PokemonInformation";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );
  const [showModal, setShowModal] = useState();

  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    console.log(showModal);
  };

  const typeClassNames = {
    grass: "isGrass",
    fire: "isFire",
    water: "isWater",
    poison: "isPoison",
    flying: "isFlying",
    bug: "isBug",
    normal: "isNormal",
    electric: "isElectric",
    ground: "isGround",
    fairy: "isFairy",
    fighting: "isFighting",
    psychic: "isPsychic",
    rock: "isRock",
    steel: "isSteel",
    ice: "isIce",
    ghost: "isGhost",
    dragon: "isDragon",
    dark: "isDark",
  };

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (event) => {
    event.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <>
      <div className="pokemon-card-container">
        <div className="pokemon-card" onClick={handleOpen}>
          <div className="pokemon-img-container">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="pokemon-img"
              onClick={handleOpen}
            />
          </div>
          <div className="card-body">
            <div className="card-top">
              <h3>{pokemon.name}</h3>
              <div># {pokemon.id}</div>
            </div>
            <div className="card-bottom">
              <div className="pokemon-type">
                {pokemon.types.map((type, index) => {
                  const typeClassName = `pokemon-type-text ${
                    typeClassNames[type.type.name] || ""
                  }`;

                  return (
                    <div key={index} className={typeClassName}>
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
              <button onClick={clickHeart} pokemon-heeart-btn>
                <div className="pokemon-favorite">{heart}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <PokemonInformation
        pokemon={pokemon}
        isShown={showModal}
        handleClose={handleClose}
        typeClassNames={typeClassNames}
      />
    </>
  );
};

export default Pokemon;
