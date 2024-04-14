
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
});
