import { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

function buildResolvers({ paths }: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: { ...paths.alias },
  };
}
export default buildResolvers;
