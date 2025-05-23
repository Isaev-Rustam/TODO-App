import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildResolvers({
  paths,
}: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts'],
    alias: {
      '@': paths.src,
    },
  };
}
