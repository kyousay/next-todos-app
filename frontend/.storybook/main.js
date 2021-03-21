const path = require('path');

module.exports = {
  "stories": ["../components/**/__stories__/*.stories.tsx"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  webpackFinal: async config => {
    config.module.rules.push({
      test: /.module\.s?css$/,
      include: path.resolve(__dirname, '../components'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          }
        },
        'sass-loader']
    });

    return config;
  }
}
