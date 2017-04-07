module.exports = {
    entry: ['./src/main.js', './src/util.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    watch: true
};