export const TextTagKind = {
  P: "p",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  Ul: "ul",
  Ol: "ol",
  A: "a",
  Small: "small",
  Strong: "strong",
} as const;
export type TextTag = typeof TextTagKind[keyof typeof TextTagKind];
export const textTagsAsString = Object.values(TextTagKind);

export type ValuesForTextTags<T> = { [key in TextTag]?: T };

export function getValueOfTextTag<T>(
  values: ValuesForTextTags<T>,
  textTag: TextTag
): T | null {
  return values[textTag] || null;
}
