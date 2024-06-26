import { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/loader/Loader";
import { Link } from "react-router-dom";

const Type = () => {
  const [data, setData] = useState([]);
  const [typePokemon, setTypePokemon] = useState(
    "https://pokeapi.co/api/v2/type/"
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(typePokemon);
      console.log(response.data);
      setTypePokemon(response.data.results.url);

      const getTypePokemon = (results) => {
        // console.log(results);
        results.map(async (type) => {
          // console.log(type);
          const response = await axios.get(
            `https://pokeapi.co/api/v2/type/${type.name}`
          );
          setData((detailpokemon) => [...detailpokemon, response.data]);
        });
      };

      getTypePokemon(response.data.results);
      console.log(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1>Types</h1>
      <div className="type">
        <p>{console.log(data)}</p>

        {data.map((type) => {
          // console.log(types);
          if (type.pokemon.length !== 0) {
            return (
              <div key={type.id}>
                <Link to={`/type/${type.name}`}>
                  <button>{type.name}</button>
                </Link>
                <div>
                  {type.pokemon.map((item) => {
                    return (
                      <div key={item.pokemon.name}>
                        <p>{item.pokemon.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
export default Type;
