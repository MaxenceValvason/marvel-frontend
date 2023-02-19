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
          `https://site--marvel-backend--6dqyynyggn8p.code.run/comics/?title=${search}&skip=${skip}&limit=${limit}`
        );
        // https://site--marvel-backend--6dqyynyggn8p.code.run/
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
