import PropTypes from "prop-types";

function SolarSystemIco({ width, height, iconColor, pathColors }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 512.185 512.185"
      style={{ enableBackground: "new 0 0 512.185 512.185" }}
      xmlSpace="preserve"
      width={width}
      height={height}
    >
      <g>
        <g>
          <path
            style={{ fill: pathColors[0] || "#33CCCC" }}
            d="M82.936,385.584c-24.078,0-43.667,19.589-43.667,43.667c2.399,57.93,84.943,57.914,87.333,0
            C126.602,405.173,107.014,385.584,82.936,385.584z M82.936,450.918c-11.947,0-21.667-9.72-21.667-21.667
            c1.19-28.744,42.147-28.736,43.333,0C104.602,441.199,94.883,450.918,82.936,450.918z"
          />
          <path
            style={{ fill: pathColors[1] || "#33CCCC" }}
            d="M256.092,65.149c-24.161,0-43.748,19.587-43.748,43.748s19.587,43.748,43.748,43.748
            s43.748-19.587,43.748-43.748S280.254,65.149,256.092,65.149z M256.176,130.677c-11.947,0-21.667-9.72-21.667-21.667
            c1.19-28.744,42.148-28.736,43.334,0C277.843,120.957,268.123,130.677,256.176,130.677z"
          />
        </g>
        <path
          style={{ fill: pathColors[2] || iconColor }}
          d="M196.176,256.01c0,33.084,26.916,60,60,60c79.598-3.296,79.575-116.716,0-120
          C223.092,196.01,196.176,222.926,196.176,256.01z M294.176,256.01c0,20.953-17.047,38-38,38c-50.412-2.088-50.397-73.92,0-76
          C277.129,218.01,294.176,235.057,294.176,256.01z"
        />
        <path
          style={{ fill: pathColors[3] || iconColor }}
          d="M256.176,0.01C50.753-1.793-73.11,237.938,47.335,404.013c4.31-6.062,10.119-10.984,16.891-14.209
          C-44.203,237.835,69.265,20.331,256.179,22.012c129.025-0.002,233.997,104.97,233.997,233.998
          c1.657,186.911-215.818,300.389-367.793,191.95c-3.225,6.772-8.147,12.582-14.208,16.892
          c166.129,120.46,405.812-3.467,403.999-208.845C512.176,114.851,397.335,0.01,256.176,0.01z"
        />
        <path
          style={{ fill: pathColors[4] || iconColor }}
          d="M256.176,414.01c183.376-4.845,217.928-255.238,43.379-309.946c0.896,7.442-0.317,15.373-3.184,22.005
          c147.217,49.487,115.89,262.325-40.196,265.941c-156.113-3.63-187.385-216.481-40.193-265.941
          c-2.867-6.63-4.08-14.564-3.184-22.005C38.136,158.847,72.935,409.224,256.176,414.01z"
        />
      </g>
    </svg>
  );
}

SolarSystemIco.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconColor: PropTypes.string,
  pathColors: PropTypes.arrayOf(PropTypes.string),
};

SolarSystemIco.defaultProps = {
  width: "24px",
  height: "24px",
  iconColor: "#000000",
  pathColors: [],
};

export default SolarSystemIco;
