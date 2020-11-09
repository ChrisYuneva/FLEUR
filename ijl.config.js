const pkg = require('./package')

module.exports = {
    apiPath: "stubs/api",
    webpackConfig: {
        "output": {
            "publicPath": `/static/repos/${pkg.version}/`
        }
    },
}
