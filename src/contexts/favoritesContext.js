import { createContext } from "react";

const FavoriteContext = createContext({
  favotirePokemons: [],
  updateFavoritePokemons: (id) => null,
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
