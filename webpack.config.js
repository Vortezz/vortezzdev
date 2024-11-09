const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif|svg|jpeg)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
						}
					},
				],
				type: "javascript/auto"
			},
		]
	},
	throwIfNamespace: false,
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	}
};