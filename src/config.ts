export type UnflexibleProviderConfig = {
  breakpoints: {
    l: number;
    m: number;
    s: number;
    xs: number;
  };
};

export const defaultConfig: UnflexibleProviderConfig = {
  breakpoints: {
    l: 1442,
    m: 1069,
    s: 768,
    xs: 481,
  },
};
