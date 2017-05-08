module.exports = {
    entry: [
        './app/app.js'
    ],
    output: {
        publicPath: 'app/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js/, loaders: ['babel-loader']},
            {test: /\.css/, loaders: ['style-loader', 'css-loader']}
        ]
    }
}
