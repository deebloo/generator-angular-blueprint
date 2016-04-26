const FILES = require('./build/FILES');
const root = __dirname;

module.exports = {
	context: root,
	resolve: {
		root: [
			`${root}/`,
			`${root}/src`,
			`${root}/src/common`,
			`${root}/src/app`,
			`${root}/src/app/views`,
			`${root}/src/app/components`,
			`${root}/src/app/services`
		]
	},
	entry: `${FILES.src}/bootstrap.js`,
	output: {
		path: `${FILES.dev}/scripts`,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
            },
			{
				test: /\.(html)$/,
				loader: 'raw',
				exclude: /node_modules/
			}
        ]
	}
};