import PropTypes from "prop-types";

function ShieldDefenseIcon({
  width,
  height,
  fillColor,
  path1FillColor,
  path2FillColor,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m24 47a1.006 1.006 0 0 1 -.3-.045c-13.072-4.086-19.7-16.519-19.7-36.955a1 1 0 0 1 .821-.984c.108-.016 10.869-2.034 18.579-7.816a1 1 0 0 1 1.2 0c7.71 5.782 18.471 7.8 18.579 7.816a1 1 0 0 1 .821.984c0 20.436-6.628 32.869-19.7 36.955a1.006 1.006 0 0 1 -.3.045zm-18-36.184c.17 18.817 6.222 30.3 18 34.134 11.775-3.838 17.827-15.317 18-34.134-2.668-.577-11.175-2.7-18-7.577-6.822 4.873-15.329 7-18 7.577z"
        fill={path1FillColor || fillColor}
      />
      <path
        d="m24 41.7a1.009 1.009 0 0 1 -.37-.071c-9.089-3.616-13.845-12.668-14.541-27.671a1 1 0 0 1 .728-1.009 55.906 55.906 0 0 0 13.662-5.775 1 1 0 0 1 1.042 0 55.906 55.906 0 0 0 13.662 5.775 1 1 0 0 1 .728 1.009c-.7 15-5.452 24.055-14.541 27.671a1.009 1.009 0 0 1 -.37.071zm-12.873-27.047c.773 13.454 4.984 21.632 12.873 24.966 7.889-3.334 12.1-11.512 12.873-24.966a57.875 57.875 0 0 1 -12.873-5.459 57.875 57.875 0 0 1 -12.873 5.459z"
        fill={path2FillColor || fillColor}
      />
    </svg>
  );
}

ShieldDefenseIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
  path1FillColor: PropTypes.string,
  path2FillColor: PropTypes.string,
};

export default ShieldDefenseIcon;
