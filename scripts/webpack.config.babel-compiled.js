module.exports = {
     entry: "./main.js",
     output: {
          path: __dirname,
          filename: "bundle.js"
     },
     module: {
          loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
     }
};

//# sourceMappingURL=webpack.config.babel-compiled.js.map