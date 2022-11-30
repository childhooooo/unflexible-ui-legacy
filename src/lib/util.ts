import { Screen, ValuesForScreens, getValueOfScreen } from "./screen";
import { ValuesForTextTags, TextTag, getValueOfTextTag } from "./textTag";

export function selectValueOfScreen<T>(
  initialValues: ValuesForScreens<T> | null | undefined,
  propsValues: ValuesForScreens<T> | null | undefined,
  screen: Screen
): T | null {
  const propsValue = propsValues
    ? getValueOfScreen<T>(propsValues, screen)
    : null;

  if (propsValue) {
    return propsValue;
  }

  const initialValue = initialValues
    ? getValueOfScreen<T>(initialValues, screen)
    : null;

  return initialValue;
}

export function selectValueOfTag<T>(
  initialValues: ValuesForTextTags<T> | null | undefined,
  propsValues: ValuesForTextTags<T> | null | undefined,
  tag: TextTag
): T | null {
  const propsValue = propsValues
    ? getValueOfTextTag<T>(propsValues, tag)
    : null;

  if (propsValue) {
    return propsValue;
  }

  const initialValue = initialValues
    ? getValueOfTextTag<T>(initialValues, tag)
    : null;

  return initialValue;
}

export function selectValueOfTagOfScreen<T>(
  initialValues: ValuesForTextTags<ValuesForScreens<T>> | null | undefined,
  propsValues: ValuesForTextTags<ValuesForScreens<T>> | null | undefined,
  tag: TextTag,
  screen: Screen
): T | null {
  const propsValuesOfTextTag = propsValues
    ? getValueOfTextTag<ValuesForScreens<T>>(propsValues, tag)
    : null;

  const propsValue = propsValuesOfTextTag
    ? getValueOfScreen<T>(propsValuesOfTextTag, screen)
    : null;

  if (propsValue) {
    return propsValue;
  }

  const initialValuesOfTextTag = initialValues
    ? getValueOfTextTag<ValuesForScreens<T>>(initialValues, tag)
    : null;

  const initialValue = initialValuesOfTextTag
    ? getValueOfScreen<T>(initialValuesOfTextTag, screen)
    : null;

  return initialValue;
}
