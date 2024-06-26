const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
})

module.exports = {
  devServer: {
    proxy:{
      "/api": {
        target:"http://localhost:3000"
      }
    }
  }
}