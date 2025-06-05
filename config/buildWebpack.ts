import { Configuration } from 'webpack';

import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';
import buildPlugins from './buildPlugins';
import { BuildOptions } from './types/types';

function buildWebpack(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
export default buildWebpack;
