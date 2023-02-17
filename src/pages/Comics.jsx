import axios from "axios";
import { useState, useEffect } from "react";

//components
import Summary from "../components/Summary";

const Comics = ({ setFavoris, favoris }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState("100");
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics/?title=${search}&skip=${skip}&limit=${limit}`
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
          }}
        />
      </div>

      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Page Suivante
      </button>
      <div className="cards">
        {data.results.map((comic) => {
          return (
            <div key={comic._id}>
              <Summary
                element={comic}
                setFavoris={setFavoris}
                favoris={favoris}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Comics;
