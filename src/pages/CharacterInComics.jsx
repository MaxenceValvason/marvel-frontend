import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import SummaryFav from "../components/SummaryFav";

const CharacterInComics = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--6dqyynyggn8p.code.run/comics/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <section className="cards">
      {data.comics.map((comic) => {
        return (
          <div key={comic._id}>
            <SummaryFav elem={comic} />
          </div>
        );
      })}
    </section>
  );
};

export default CharacterInComics;
