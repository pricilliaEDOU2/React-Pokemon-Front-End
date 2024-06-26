import { Link } from "react-router-dom";
import "../cards/cards.css";
import typeColors from "../../TypeColors";

const Cards = ({ allPokemons, search, infoPoke }) => {
  return (
    <>
      <div className="pokemons-cards-left">
        {allPokemons
          .filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(search.toLowerCase());
          })

          // l'ajout de toLowerCase permet d'éviter que le search soit sensible à la casse.

          .map((pokemon) => {
            console.log(pokemon);
            return pokemon.sprites.front_default ? (
              <div
                className="pokemons-cards"
                key={pokemon.id}
                onClick={() => infoPoke(pokemon)}
              >
                <img
                  className="pokemons-img"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <p className="pokemons-text"># {pokemon.id}</p>
                <h2 className="pokemons-title">{pokemon.name}</h2>
                <div className="pokemon-type">
                  {pokemon.types.map((type) => {
                    return (
                      <p
                        key={type.type.name}
                        style={{ backgroundColor: typeColors[type.type.name] }}
                      >
                        {type.type.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            );
          })}
      </div>

      <div className="pokemons-cards-tablet">
        {allPokemons
          .filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(search.toLowerCase());
            // l'ajout de toLowerCase permet d'éviter que le search soit sensible à la casse.
          })
          .map((pokemon) => {
            return (
              <Link
                to={`/pokemon/${pokemon.name}`}
                key={pokemon.id}
                className="pokemons-cards"
              >
                <div>
                  <img
                    className="pokemons-img"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                  <p className="pokemons-text"># {pokemon.id}</p>
                  <h2 className="pokemons-title">{pokemon.name}</h2>
                  <div className="pokemon-type">
                    {pokemon.types.map((type) => {
                      // <option key={type.type.name} value={type.type.name}>
                      //   {type.type.name}
                      // </option>;
                      // console.log(type.type.name);
                      return (
                        <p
                          key={type.type.name}
                          style={{
                            backgroundColor: typeColors[type.type.name],
                          }}
                        >
                          {type.type.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Cards;
