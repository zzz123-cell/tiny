module.exports = {
  plugins: [
    require("postcss-css-variables")(
      {
        preserve: true
      }
    ),
    require('autoprefixer')({
      flexbox: "no-2009"
    }),
    require("postcss-flexbugs-fixes")
  ] 
};