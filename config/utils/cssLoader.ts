import { BuildOptions } from 'config/types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export function buildCssLoader({ isDev }: BuildOptions): RuleSetRule {
  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[local]' : '[hash:base64:8]',
      },
    },
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['autoprefixer', !isDev && 'cssnano'],
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      postcssLoader,
    ],
  };

  return cssLoader;
}
