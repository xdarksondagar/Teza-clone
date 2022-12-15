const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const dirAssets = path.resolve(__dirname, "src/assets");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const folders = [
  "./src/pages/index.html",
  "./src/pages/about.html",
  "./src/pages/service.html",
  "./src/pages/service-details.html",
  "./src/pages/casestudy.html",
  "./src/pages/casestudy-details.html",
  "./src/pages/blog.html",
  "./src/pages/blog-details.html",
  "./src/pages/contact.html",
  "./src/pages/team.html",
  "./src/pages/pricing.html",
  "./src/pages/faq.html",
  "./src/pages/testimonial.html"
];

const mapFolders = folders.map((file, idx) => {
  let filename = folders[idx].split("/");
  return new HtmlWebpackPlugin({
    template: file,
    inject: true,
    chunks: ["app", "styles"],
    filename: filename[3]
  });
});

module.exports = {
  mode: "development",
  entry: {
    app: "./src/js/index.js",
    styles: "./src/scss/index.scss"
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist"
  },
  plugins: [
    ...mapFolders,
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ""
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ["raw-loader", "glslify-loader"]
      }
    ]
  }
};
