import PropTypes from "prop-types";

function JupiterIco({ width, height, color, pathColors }) {
  return (
    <svg
      version="1.1"
      id="svg4476"
      xmlSpace="preserve"
      width={width}
      height={height}
      viewBox="0 0 682.66669 682.66669"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs id="defs4480">
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4490">
          <path d="M 0,512 H 512 V 0 H 0 Z" id="path4488" />
        </clipPath>
      </defs>
      <g id="g4482" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
        <g id="g4484">
          <g id="g4486" clipPath="url(#clipPath4490)">
            <g id="g4492" transform="translate(82.0508,429.9502)">
              <path
                d="m 0,0 c 96.069,96.069 251.827,96.069 347.896,0 96.07,-96.069 96.07,-251.827 0,-347.896 C 251.827,-443.965 96.069,-443.965 0,-347.896 -96.069,-251.827 -96.069,-96.069 0,0 Z"
                style={{
                  fill: "none",
                  stroke: pathColors[0] || color,
                  strokeWidth: 20,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2.613,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path4494"
              />
            </g>
            <g id="g4496" transform="translate(106.8574,379.3037)">
              <path
                d="M 0,0 119.964,119.963 M -94.123,-94.124 -31.819,-31.819"
                style={{
                  fill: "none",
                  stroke: pathColors[1] || color,
                  strokeWidth: 20,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2.613,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path4498"
              />
            </g>
            <g id="g4500" transform="translate(289.9434,498.6416)">
              <path
                d="m 0,0 -100.985,-100.985 c -7.633,-7.634 -11.998,-14.38 -8.939,-25.8 l 4.052,-15.12 c 3.576,-13.346 -0.726,-18.796 -11.17,-29.24 L -235.26,-289.362"
                style={{
                  fill: "none",
                  stroke: pathColors[2] || color,
                  strokeWidth: 20,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2.613,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path4502"
              />
            </g>
            <g id="g4504" transform="translate(157.4424,136.0615)">
              <path
                d="m 0,0 -63.654,-63.654 m 345.806,345.805 -8.291,-8.29 c -36.154,-36.154 -35.258,-37.24 -39.742,-77.036 -3.475,-30.85 -27.949,-56.088 -58.541,-60.668 -38.781,-5.806 -43.036,-3.616 -76.939,-37.518 L 63.64,63.64 M -96.641,-28.143 65.238,133.736 c 33.336,33.336 29.918,39.449 37.034,78.281 5.331,29.077 29.356,52.169 58.779,56.162 38.416,5.212 42.421,3.791 76.015,37.386 l 9.574,9.574"
                style={{
                  fill: "none",
                  stroke: pathColors[3] || color,
                  strokeWidth: 20,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2.613,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path4506"
              />
            </g>
            <g id="g4508" transform="translate(381.9873,232.5742)">
              <path
                d="M 0,0 105.063,105.064 M -207.625,-207.624 -31.819,-31.819"
                style={{
                  fill: "none",
                  stroke: pathColors[4] || color,
                  strokeWidth: 20,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2.613,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path4510"
              />
            </g>
            <g id="g4512" transform="translate(328.543,108.4199)">
              <path
                d="M 0,0 171.309,171.309 M -96.271,-96.271 -51.82,-51.82"
                style={{
                  fill: "none",
                  stroke: pathColors[5] || color,
                  strokeWidth: 20,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2.613,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path4514"
              />
            </g>
            <g id="g4516" transform="translate(189.2607,167.8789)">
              <path
                d="M 0,0 H 0.008"
                style={{
                  fill: "none",
                  stroke: pathColors[6] || color,
                  strokeWidth: 20,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2.613,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path4518"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

JupiterIco.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  pathColors: PropTypes.arrayOf(PropTypes.string),
};

JupiterIco.defaultProps = {
  width: "100%",
  height: "100%",
  color: "#FFFFFF",
  pathColors: [],
};

export default JupiterIco;
