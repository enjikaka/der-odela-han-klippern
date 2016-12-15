const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
	 module: {
    rules: [
      {
				test: /\.(js)$/,
				use: 'closure-compiler-web-loader'
			}
    ]
  }
};
