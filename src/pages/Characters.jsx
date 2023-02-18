import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import Summary from "../components/Summary";

const Characters = ({ setFavoris, favoris }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(100);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/characters/?name=${search}&skip=${skip}&limit=${limit}`
        );
        setSkip((page - 1) * limit);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, page, skip]);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <section>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearch(event.target.value);
            setSkip(0);
          }}
        />
      </div>
      <div className="pagination">
        <div className="pagination-before">
          <div
            className={page === 1 ? "display-none" : "arrow"}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="pagination-after">
          <div
            className="arrow"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="cards">
        {data.results.map((character) => {
          return (
            <Summary
              key={character._id}
              element={character}
              setFavoris={setFavoris}
              favoris={favoris}
              character={true}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Characters;
