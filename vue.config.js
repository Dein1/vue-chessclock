module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
  },
};
