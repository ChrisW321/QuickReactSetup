module.exports = {
    context: __dirname + '/client',
    entry: './app.jsx',
    module: {
        rules: [
            {
                test: /\jsx?$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'es2015']
                },
            },
            {
                test: /\.css/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
};
