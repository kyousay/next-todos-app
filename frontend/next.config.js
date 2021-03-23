module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: 'http://todo_backend:4000/:path*',
      },
    ];
  },
};
