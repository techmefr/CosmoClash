import PropTypes from "prop-types";
import "./customCard.css";

const CustomCard = ({ title, value, icon: Icon, iconProps, onClick }) => {
  return (
    <div className="card black" onClick={onClick}>
      {Icon && <Icon className="icon" {...iconProps} />}
      <div className="text-container">
        <p className="tip">{title}</p>
        <p className="second-text">{value}</p>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType,
  iconProps: PropTypes.object,
  onClick: PropTypes.func,
};

export default CustomCard;
