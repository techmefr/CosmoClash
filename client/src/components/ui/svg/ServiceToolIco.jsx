import PropTypes from "prop-types";

const ServiceToolIco = ({ width, height, fillColor }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M256,404.34c-81.795,0-148.34-66.545-148.34-148.34S174.205,107.66,256,107.66
            S404.34,174.205,404.34,256c0,24.075-5.947,48.049-17.198,69.331c-2.84,5.371-9.496,7.423-14.866,4.583
            c-5.371-2.839-7.423-9.495-4.583-14.866c9.583-18.125,14.647-38.544,14.647-59.049c0-69.664-56.676-126.34-126.34-126.34
            S129.66,186.336,129.66,256S186.336,382.34,256,382.34c20.072,0,40.11-4.866,57.947-14.072c5.397-2.786,12.033-0.669,14.82,4.73
            c2.786,5.398,0.668,12.034-4.73,14.82C303.094,398.627,279.567,404.34,256,404.34z"
      />
    </svg>
  );
};

ServiceToolIco.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fillColor: PropTypes.string,
};

export default ServiceToolIco;
