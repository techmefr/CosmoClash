import PropTypes from "prop-types";
import "./customCard.css";

const CustomCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="card black">
      {Icon && <Icon className="icon" />}
      <p className="tip">{title}</p>
      <p className="second-text">{value}</p>
    </div>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType,
};

export default CustomCard;
