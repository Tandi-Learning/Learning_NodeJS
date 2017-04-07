module.exports = {
    entry: ['./src/main.js', './src/util.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    watch: true,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'jshint-loader'
            }
        ],
        rules: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }                    
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.es6']
    }
};