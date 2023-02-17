const SummaryFav = ({ elem }) => {
  const imgVariant = "/portrait_fantastic.";
  const imgSrc = elem.thumbnail.path + imgVariant + elem.thumbnail.extension;

  return (
    <article className="card">
      <h3>{elem.title || elem.name}</h3>

      <img src={imgSrc} alt={elem.title} />
      <p className={elem.description ? "card-desc" : "display-none"}>
        {elem.description}
      </p>
    </article>
  );
};
export default SummaryFav;
