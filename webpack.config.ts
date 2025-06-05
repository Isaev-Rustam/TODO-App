import path from 'path';

import webpack from 'webpack';

import buildWebpack from './config/buildWebpack';
import { BuildMode, BuildPaths } from './config/types/types';

interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    public: path.resolve(__dirname, 'public'),
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public'),
      '@atoms': path.resolve(__dirname, 'src', 'components', 'atoms'),
      '@molecules': path.resolve(__dirname, 'src', 'components', 'molecules'),
      '@organisms': path.resolve(__dirname, 'src', 'components', 'organisms'),
    },
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    isDev: env.mode === 'development',
    paths,
    analyzer: Boolean(env.analyzer),
  });

  return config;
};
