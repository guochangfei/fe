const cfg = require("./config");
module.exports = {
    // webpack-dev-server 相关配置
    devServer: {
        host: "local.test.com",
        https: false,
        port: process.env.PORT || cfg.port,
        proxy: "", // 设置代理

    },
}