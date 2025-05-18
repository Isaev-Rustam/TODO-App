export interface BuildPaths {
  entry: string;
  html: string;
  public: string;
  favicon: string;
  output: string;
  src: string;
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  isDev: boolean;
  analyzer: boolean;
}
