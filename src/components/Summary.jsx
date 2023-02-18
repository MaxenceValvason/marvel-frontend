import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Summary = ({ element, setFavoris, favoris, character }) => {
  let navigate = useNavigate();
  const [isFavoris, setIsFavoris] = useState(false);

  const imgVariant = "/portrait_fantastic.";
  const imgSrc =
    element.thumbnail.path + imgVariant + element.thumbnail.extension;

  useEffect(() => {
    const tab = [...favoris];
    console.log("useeffect " + element.title + " " + isFavoris);
    if (isFavoris) {
      tab.push(element);
      setFavoris(tab);
    }
  }, [isFavoris]);

  return (
    <article className="card">
      <h3>{element.title || element.name}</h3>
      <img
        className={!character ? "display-none" : null}
        onClick={() => {
          navigate(`/comics/${element._id}`);
        }}
        src={imgSrc}
        alt={element.title}
      />
      <img
        className={!character ? null : "display-none"}
        src={imgSrc}
        alt={element.title}
      />

      <p className={element.description ? "card-desc" : "display-none"}>
        {element.description}
      </p>
      <div
        className="add-fav"
        onClick={() => {
          setIsFavoris(!isFavoris);
        }}
      >
        <label>Add To Favoris</label>
      </div>
    </article>
  );
};

export default Summary;
