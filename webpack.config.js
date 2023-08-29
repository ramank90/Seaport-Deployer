module.exports = {
  module: {
    rules: [
      { 
        test: /\.wasm$/, // only load WASM files (ending in .wasm)
        // only files in our src/ folder
        include: path.resolve(__dirname, "src"), 
        use: [{ 
           // load and use the wasm-loader dictionary
           loader: require.resolve("wasm-loader"), 
           options: {} 
        }],
     },
      {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates style nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};