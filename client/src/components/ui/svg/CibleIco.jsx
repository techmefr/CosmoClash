import PropTypes from "prop-types";

function CibleIco({ width, height, fillColor }) {
  return (
    <svg
      id="Layer_1"
      height={height}
      viewBox="0 0 36 36"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="m34 17h-5.55c-.47-4.99-4.46-8.98-9.45-9.45v-5.55c0-.55-.45-1-1-1s-1 .45-1 1v5.55c-4.99.47-8.98 4.46-9.45 9.45h-5.55c-.55 0-1 .45-1 1s.45 1 1 1h5.55c.47 4.99 4.46 8.98 9.45 9.45v5.55c0 .55.45 1 1 1s1-.45 1-1v-5.55c4.99-.47 8.98-4.46 9.45-9.45h5.55c.55 0 1-.45 1-1s-.45-1-1-1zm-11 2h3.44c-.46 3.89-3.55 6.98-7.44 7.44v-3.44c0-.55-.45-1-1-1s-1 .45-1 1v3.44c-3.89-.46-6.98-3.55-7.44-7.44h3.44c.55 0 1-.45 1-1s-.45-1-1-1h-3.44c.46-3.89 3.55-6.98 7.44-7.44v3.44c0 .55.45 1 1 1s1-.45 1-1v-3.44c3.89.46 6.98 3.55 7.44 7.44h-3.44c-.55 0-1 .45-1 1s.45 1 1 1z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
}

CibleIco.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
};

export default CibleIco;
