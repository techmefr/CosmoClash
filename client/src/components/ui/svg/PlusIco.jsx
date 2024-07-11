import PropTypes from "prop-types";

function PlusIcon({
  width,
  height,
  fillColor,
  path1FillColor,
  path2FillColor,
}) {
  const defaultFillColor = "#FFFFFF";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x35_2-plus">
        <path
          style={{ fill: path1FillColor || fillColor || defaultFillColor }}
          d="M256,511.292c-143.551,0-256-112.448-256-256c8.713-339.486,503.334-339.406,512,0.004   C512,398.844,399.551,511.292,256,511.292z M256,21.292c-131.215,0-234,102.785-234,234c7.965,310.312,460.078,310.238,468-0.003   C490,124.077,387.215,21.292,256,21.292z"
        />
        <path
          style={{ fill: path2FillColor || fillColor || defaultFillColor }}
          d="M380.576,244.292H267V130.716c-0.541-14.579-21.464-14.568-22,0v113.576H131.424c-14.579,0.541-14.568,21.464,0,22H245   v113.576c0.541,14.579,21.464,14.568,22,0V266.292h113.576C395.155,265.751,395.144,244.828,380.576,244.292z"
        />
      </g>
    </svg>
  );
}

PlusIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fillColor: PropTypes.string,
  path1FillColor: PropTypes.string,
  path2FillColor: PropTypes.string,
};

export default PlusIcon;
