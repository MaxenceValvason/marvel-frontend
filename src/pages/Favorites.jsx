//components
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryFav from "../components/SummaryFav";

const Favorites = ({ favoris, setFavoris }) => {
  let navigate = useNavigate();
  const [deleteFav, setDeleteFav] = useState();

  useEffect(() => {
    const tab = [...favoris];
    tab.map((elem, index) => {
      if (deleteFav === elem._id) {
        tab.splice(index, 1);
        setFavoris(tab);
      }
    });
  }, [deleteFav, favoris]);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <div className="cards">
        {favoris.map((fav) => {
          return (
            <div key={fav._id}>
              <SummaryFav elem={fav} />
              <div
                onClick={() => {
                  setDeleteFav(fav._id);
                }}
              >
                <input type="checkbox" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
