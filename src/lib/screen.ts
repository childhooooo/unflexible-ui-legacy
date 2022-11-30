export const ScreenKind = {
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
} as const;
export type Screen = typeof ScreenKind[keyof typeof ScreenKind];
export const screensAsString = Object.values(ScreenKind);

export function getScreen(
  breakpoints: [number, number, number, number],
  width: number
): Screen {
  for (let i = 0; i < screensAsString.length - 1; i++) {
    if (width <= breakpoints[i]) {
      return screensAsString[i];
    }
  }

  return screensAsString[screensAsString.length - 1];
}

export function getLargerScreen(screen: Screen): Screen | null {
  const index = screensAsString.indexOf(screen);

  if (index < 0 || index > screensAsString.length - 1) {
    return null;
  } else {
    return screensAsString[index + 1];
  }
}

export type ValuesForScreens<T> = { [key in Screen]?: T };

export function getValueOfScreen<T>(
  values: ValuesForScreens<T>,
  screen: Screen
): T | null {
  const value = values[screen];
  if (value !== undefined) {
    return value;
  }

  const largerScreen = getLargerScreen(screen);
  if (!largerScreen) {
    return null;
  }

  return getValueOfScreen(values, largerScreen);
}
