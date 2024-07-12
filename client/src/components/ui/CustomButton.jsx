import PropTypes from "prop-types";
import "./style/CustomButton.css";

export default function CustomButton({ customButtonName, onClick }) {
  return (
    <div>
      <button className="customButtonBtn" type="button" onClick={onClick}>
        <strong>{customButtonName}</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </div>
  );
}

CustomButton.propTypes = {
  customButtonName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
