import PropTypes from "prop-types";
import "./customCard.css";

const CustomCard = ({ title, value }) => {
  return (
    <div className="card black">
      <p className="tip">{title}</p>
      <p className="second-text">{value}</p>
    </div>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CustomCard;
