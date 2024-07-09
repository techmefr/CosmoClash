import PropTypes from "prop-types";

function HomeIcon({
  width = 512,
  height = 512,
  fillColor = "#FFFFFF",
  path1FillColor = fillColor,
  path2FillColor = fillColor,
  path3FillColor = fillColor,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 511.992 511.992"
      width={width}
      height={height}
    >
      <g>
        <path
          style={{ fill: fillColor }}
          d="M509.268,282.184L267.385,5.852c-2.088-2.386-5.106-3.755-8.277-3.755c-3.156,0-6.162,1.356-8.25,3.724L2.742,287.14c-6.238,6.975-1.129,18.363,8.245,18.276c3.047,0,6.08-1.259,8.254-3.724l43.863-49.732v246.935c0,6.075,4.925,11,11,11h369.534c6.075,0,11-4.925,11-11V253.174l38.077,43.5c4.002,4.572,10.951,5.033,15.522,1.032C512.808,293.704,513.27,286.755,509.268,282.184z M432.637,487.895H85.104V227.016L259.077,29.762l173.561,198.279V487.895z"
        />
        <g>
          <g>
            <path
              style={{ fill: path1FillColor }}
              d="M255.207,450.393c-3.895,0-7.503-2.062-9.479-5.419l-77.74-132.031l0,0c-42.352-70.277,4.112-162.129,87.949-162.489c83.761,0.123,130.658,92.917,87.542,162.786c0.001,0-78.832,131.799-78.832,131.799C262.66,448.361,259.075,450.393,255.207,450.393z M186.946,301.78l68.335,116.059L324.6,301.946c8.614-14.401,13.167-30.883,13.167-47.663c0-45.121-36.709-81.83-81.83-81.83C189.01,172.876,153.253,246.04,186.946,301.78z"
            />
          </g>
          <g>
            <path
              style={{ fill: path2FillColor }}
              d="M255.207,299.913c-24.13,0-43.761-19.631-43.761-43.761c2.404-58.055,85.127-58.037,87.522,0C298.968,280.282,279.337,299.913,255.207,299.913z M255.207,234.392c-11.999,0-21.761,9.762-21.761,21.761c1.195,28.869,42.331,28.86,43.522,0C276.968,244.153,267.206,234.392,255.207,234.392z"
            />
          </g>
        </g>
        <path
          style={{ fill: path3FillColor }}
          d="M129.217,61.261c-0.577-14.585-21.42-14.593-22,0c0,0,0,107.422,0,107.422l22-24.944V61.261z"
        />
      </g>
    </svg>
  );
}

HomeIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fillColor: PropTypes.string,
  path1FillColor: PropTypes.string,
  path2FillColor: PropTypes.string,
  path3FillColor: PropTypes.string,
};

export default HomeIcon;
