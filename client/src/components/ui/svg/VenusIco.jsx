import PropTypes from "prop-types";

const VenusIco = ({ width = "512", height = "512", color = "#ffffff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width}
      height={height}
    >
      <g id="_6-venus" data-name="6-venus">
        <path
          d="M32,0A32,32,0,1,0,64,32,32.03635,32.03635,0,0,0,32,0ZM56.88428,48.73846C55.36865,47.84875,51.44873,46,45,46a17.01384,17.01384,0,0,0-6.94824,1.6958A25.65281,25.65281,0,0,1,27,50c-9.44727,0-16.22656-6.64062-16.294-6.708A.99989.99989,0,0,0,9.293,44.707C9.59082,45.00488,16.7041,52,27,52a27.38179,27.38179,0,0,0,11.81152-2.4541A15.1996,15.1996,0,0,1,45,48a22.13238,22.13238,0,0,1,10.6958,2.366A29.98359,29.98359,0,0,1,7.93732,14.10468a47.10352,47.10352,0,0,0,15.95233,4.889A.94437.94437,0,0,0,24.001,19a.99986.99986,0,0,0,.10937-1.99365A45.90257,45.90257,0,0,1,9.21893,12.513,29.97436,29.97436,0,0,1,60.9577,24.1734C31.236,29.72186,14.59216,22.17212,14.4248,22.09473a1,1,0,0,0-.85058,1.81006c.50976.24023,9.49512,4.3457,26.124,4.3457a118.03034,118.03034,0,0,0,21.71985-2.12854,29.95081,29.95081,0,0,1-4.53381,22.61651Z"
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          d="M51.15234,12.98828a1,1,0,0,0-.30468-1.97656c-24.791,3.813-30.99121-2.5586-31.09668-2.67188a.9998.9998,0,0,0-1.50977,1.311c.20215.23584,4.13184,4.57959,18.2666,4.57959A96.814,96.814,0,0,0,51.15234,12.98828Z"
          style={{ fill: color }}
        />
        <path
          d="M59.87793,34.522a1.00131,1.00131,0,0,0-1.35645-.40039c-.10644.05811-10.7666,5.76074-20.23632,2.91992C32.62012,35.34229,28.14551,34,20,34c-7.52344,0-14.28223-5.70215-14.34961-5.75977a.99994.99994,0,0,0-1.30078,1.51905C4.64648,30.01416,11.72559,36,20,36c7.85254,0,12.20215,1.30518,17.71289,2.958a22.06291,22.06291,0,0,0,6.34961.88867,35.826,35.826,0,0,0,15.416-3.96875A.99938.99938,0,0,0,59.87793,34.522Z"
          style={{ fill: color }}
        />
        <path
          d="M34.24219,19.02979a1,1,0,0,0-.48438,1.94042,41.99541,41.99541,0,0,0,9.39551.92481,56.16793,56.16793,0,0,0,10.02539-.91113,1,1,0,0,0-.35742-1.96778A48.97393,48.97393,0,0,1,34.24219,19.02979Z"
          style={{ fill: color }}
        />
        <path
          d="M24.68359,57.94873a33.438,33.438,0,0,0,9.76075,1.3335,37.76212,37.76212,0,0,0,4.67968-.29.99991.99991,0,1,0-.248-1.98438,34.22906,34.22906,0,0,1-13.56055-.957,1.00018,1.00018,0,0,0-.63184,1.89795Z"
          style={{ fill: color }}
        />
      </g>
    </svg>
  );
};

VenusIco.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default VenusIco;
