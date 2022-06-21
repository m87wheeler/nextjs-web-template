export const breakpointSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

type BreakpointType = {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
  desktopL: string;
};

export const breakpoints: BreakpointType = {
  mobileS: `only screen and (min-width: ${breakpointSizes.mobileS}px)`,
  mobileM: `only screen and (min-width: ${breakpointSizes.mobileM}px)`,
  mobileL: `only screen and (min-width: ${breakpointSizes.mobileL}px)`,
  tablet: `only screen and (min-width: ${breakpointSizes.tablet}px)`,
  laptop: `only screen and (min-width: ${breakpointSizes.laptop}px)`,
  laptopL: `only screen and (min-width: ${breakpointSizes.laptopL}px)`,
  desktop: `only screen and (min-width: ${breakpointSizes.desktop}px)`,
  desktopL: `only screen and (min-width: ${breakpointSizes.desktop}px)`,
};
