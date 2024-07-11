import PropTypes from "prop-types";
import icons from "../../utils/PlanetIco";

const PlanetIcoRandom = ({ width, height, fillColor }) => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  const RandomIcon = icons[randomIndex];

  return (
    <RandomIcon
      width={width}
      height={height}
      fillColor={fillColor || "#FFFFFF"}
    />
  );
};

PlanetIcoRandom.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
};

export default PlanetIcoRandom;
