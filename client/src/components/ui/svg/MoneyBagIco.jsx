import PropTypes from "prop-types";

function MoneyBagIcon({ width = 512, height = 512, fillColor = "#33CCCC" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 512 512"
      width={width}
      height={height}
    >
      <g id="Budget">
        <path
          style={{ fill: fillColor }}
          d="M194.841,341.977c-10.751,0-19.498-8.747-19.498-19.498s8.747-19.498,19.498-19.498 s19.498,8.747,19.498,19.498c0,6.075,4.925,11,11,11s11-4.925,11-11c0-19.014-12.86-35.072-30.335-39.96v-25.501 c0-6.075-4.925-11-11-11s-11,4.925-11,11v25.409c-17.642,4.779-30.661,20.92-30.661,40.053c0,22.882,18.616,41.498,41.498,41.498 c10.751,0,19.498,8.747,19.498,19.498s-8.747,19.498-19.498,19.498s-19.498-8.747-19.498-19.498c0-6.075-4.925-11-11-11 s-11,4.925-11,11c0,19.133,13.019,35.274,30.661,40.053v16.476c0,6.075,4.925,11,11,11s11-4.925,11-11v-16.569 c17.475-4.889,30.335-20.946,30.335-39.96C236.339,360.593,217.723,341.977,194.841,341.977z"
        />
        <path d="M512,348.511c0-12.049-5.166-22.91-13.394-30.498c8.228-7.588,13.394-18.449,13.394-30.498 c0-22.882-18.616-41.498-41.498-41.498H347.494c-2.11,0-4.183,0.161-6.209,0.466c-16.519-20.448-36.258-37.266-58.126-49.624 c8.774-7.615,14.339-18.834,14.339-31.336c0-17.849-11.329-33.101-27.173-38.948l26.631-81.667c1.092-3.35,0.514-7.02-1.556-9.871 s-5.379-4.539-8.902-4.539h-51.487C230.177,12.939,214.077,0,195.004,0c-19.075,0-35.186,12.938-40.019,30.498h-51.475 c-3.523,0-6.833,1.688-8.902,4.539s-2.647,6.521-1.556,9.871l26.63,81.667c-15.844,5.846-27.172,21.098-27.172,38.948 c0,12.508,5.57,23.732,14.351,31.347c-27.337,15.468-51.692,37.995-70.115,65.176C13.05,297.004,0,338.542,0,379.008 c0,50.771,20.157,87.307,59.912,108.592c31.093,16.646,74.02,24.4,135.092,24.4c51.448,0,89.633-5.474,118.926-17.136 C321.481,505.238,333.71,512,347.494,512h123.008C493.384,512,512,493.384,512,470.502c0-12.049-5.166-22.91-13.394-30.498 c8.228-7.588,13.394-18.449,13.394-30.498c0-12.048-5.166-22.91-13.393-30.498C506.834,371.42,512,360.559,512,348.511z M490,287.515c0,10.751-8.747,19.498-19.498,19.498H347.494c-10.751,0-19.498-8.747-19.498-19.498s8.747-19.498,19.498-19.498 h123.008C481.253,268.017,490,276.764,490,287.515z M164.506,52.498c6.075,0,11-4.925,11-11c0-10.751,8.747-19.498,19.498-19.498 s19.498,8.747,19.498,19.498v30.498c0,6.075,4.925,11,11,11s11-4.925,11-11V52.498h34.839l-23.324,71.526H141.991l-23.323-71.526 H164.506z M133.974,146.026c0.01,0,0.021,0.001,0.031,0.001c0.025,0,0.05-0.003,0.075-0.003h121.846 c0.025,0,0.05,0.003,0.075,0.003c0.01,0,0.021-0.001,0.031-0.001c10.736,0.018,19.465,8.757,19.465,19.496 c0,10.745-8.738,19.488-19.481,19.497c-0.12,0-0.24-0.003-0.36,0.001H134.328c-0.101-0.003-0.202,0-0.303,0h-0.017 c-10.751,0-19.497-8.747-19.497-19.498C114.511,154.783,123.239,146.044,133.974,146.026z M195.004,490 c-57.308,0-96.935-6.926-124.708-21.796C37.798,450.805,22,421.628,22,379.008c0-36.11,11.704-73.266,32.956-104.62 c20.609-30.405,49.382-54.256,81.194-67.367h117.666c25.199,10.371,48.052,27.144,66.749,48.959 c-8.906,7.617-14.568,18.924-14.568,31.535c0,12.049,5.166,22.91,13.394,30.498c-8.228,7.588-13.394,18.449-13.394,30.498 c0,12.048,5.166,22.909,13.393,30.497c-8.228,7.588-13.393,18.449-13.393,30.498c0,12.049,5.166,22.91,13.394,30.498 c-9.117,8.28-14.508,21.233-13.214,34.274C279.549,484.982,243.879,490,195.004,490z M490,470.502 c0,10.751-8.747,19.498-19.498,19.498H347.494c-10.751,0-19.498-8.747-19.498-19.498s8.747-19.498,19.498-19.498h123.008 C481.253,451.004,490,459.751,490,470.502z M490,409.506c0,10.751-8.747,19.498-19.498,19.498H347.494 c-10.751,0-19.498-8.747-19.498-19.498s8.747-19.498,19.498-19.498h123.008C481.253,390.008,490,398.755,490,409.506z M347.494,368.008c-10.751,0-19.498-8.746-19.498-19.497s8.747-19.498,19.498-19.498h123.008c10.751,0,19.498,8.747,19.498,19.498 s-8.747,19.497-19.498,19.497H347.494z" />
      </g>
    </svg>
  );
}

MoneyBagIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fillColor: PropTypes.string,
};

export default MoneyBagIcon;
