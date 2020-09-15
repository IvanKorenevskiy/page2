module.exports = function(api) {
  api.cache(true);

  const presets = [
    ['@babel/env', {modules: 'commonjs', targets: {node: 12}}],
    "@babel/preset-react",
    ['@babel/typescript', {allExtensions: true}]
  ];
  const plugins = [
    ['@babel/transform-runtime', {regenerator: true}],
    'transform-typescript-metadata',
    ['@babel/proposal-decorators', {legacy: true}],
    ['@babel/proposal-class-properties', {loose: true}],
    '@babel/proposal-object-rest-spread',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          pages: './src/js/pages',
          components: './src/js/components'
        }
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
