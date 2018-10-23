const path = require("path");
console.log(__dirname);
module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.join(__dirname,"public"),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_module/
        }]
    },
    devtool:'cheap-module-eval-source-map',//it is used for error detection
    devServer:{
        contentBase:path.join(__dirname,"public")
    }
   
};