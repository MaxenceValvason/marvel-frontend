import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <main>
      <div className="home-texts">
        <p className="text">Comics</p>

        <p className="text">Characters</p>

        <p className="text">Favoris</p>
      </div>

      <section className="gallery">
        <img
          onClick={() => {
            navigate("/comics");
          }}
          className="gallery-img"
          src="https://wallpapercave.com/wp/wp6223089.jpg"
          alt=""
        />

        <img
          onClick={() => {
            navigate("/characters");
          }}
          className="gallery-img"
          src="https://wallpapers.com/images/featured/marvel-superheroes-w5u75zr2f1b139b7.jpg"
          alt=""
        />
        <img
          onClick={() => {
            navigate("/favorites");
          }}
          className="gallery-img"
          src="https://wallpapercave.com/wp/wp1808937.jpg"
          alt=""
        />
      </section>
    </main>
  );
};
export default Home;
