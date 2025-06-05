import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/types';

function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
export default buildDevServer;
