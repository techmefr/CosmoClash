import "./style/CustomButton.css";

export default function CustomButton({ customButtonName }) {
  return (
    <div>
      <button className="customButtonBtn" type="button">
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
