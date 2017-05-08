module.exports = {
    entry: {
        path: __dirname + '/app',
        filename: 'app.js'
    },
    output: {
        path: __dirname + '/app/static',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js/, loaders: ['babel-loader']}
        ]
    }
}
