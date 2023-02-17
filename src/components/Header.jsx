import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();

  return (
    <header>
      <div>
        <img
          onClick={() => {
            navigate("/");
          }}
          src="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1582097342/react-new-exercices/Marvel/langfr-1920px-MarvelLogo.svg_uw9pi8.png"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
