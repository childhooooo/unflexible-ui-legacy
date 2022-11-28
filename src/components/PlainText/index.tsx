import React from 'react';
import { styled } from '@linaria/react';

export interface PlainTextProps {
  text?: string;
  children?: React.ReactNode;
}

export const PlainText = ({ text, children }: PlainTextProps) => {
  return (
    <Component>
      {text ? <div dangerouslySetInnerHTML={{ __html: text }}></div> : children}
    </Component>
  );
};

interface ComponentProps {}

const styledTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'ul', 'ol', 'a', 'small', 'strong'].reduce(
  (acc, tag) => {
    return (
      acc +
      `
${tag} {
  margin: var(--unflexible-ui-core-plain-text-${tag}-margin);
  font-size: var(--unflexible-ui-core-plain-text-${tag}-size);
  color: var(--unflexible-ui-core-plain-text-${tag}-color);
  font-weight: var(--unflexible-ui-core-plain-text-${tag}-weight);
  font-family: var(--unflexible-ui-core-plain-text-${tag}-family);
  line-height: var(--unflexible-ui-core-plain-text-${tag}-line-height);
  text-align: var(--unflexible-ui-core-plain-text-${tag}-align);
  letter-spacing: var(--unflexible-ui-core-plain-text-${tag}-letter-spacing);
}`
    );
  },
  ''
);

const Component = styled.div<ComponentProps>`
  :global() {
    :root {
      --unflexible-ui-core-plain-text-p-size: 1rem;
      --unflexible-ui-core-plain-text-h1-size: 2rem;
      --unflexible-ui-core-plain-text-h2-size: 1.75rem;
      --unflexible-ui-core-plain-text-h3-size: 1.5rem;
      --unflexible-ui-core-plain-text-h4-size: 1.25rem;
      --unflexible-ui-core-plain-text-h5-size: 1rem;
      --unflexible-ui-core-plain-text-ul-size: 1rem;
      --unflexible-ui-core-plain-text-ol-size: 1rem;
      --unflexible-ui-core-plain-text-a-size: 1rem;
      --unflexible-ui-core-plain-text-small-size: 0.75rem;
      --unflexible-ui-core-plain-text-strong-size: 1rem;

      --unflexible-ui-core-plain-text-p-weight: 400;
      --unflexible-ui-core-plain-text-h1-weight: 700;
      --unflexible-ui-core-plain-text-h2-weight: 700;
      --unflexible-ui-core-plain-text-h3-weight: 700;
      --unflexible-ui-core-plain-text-h4-weight: 700;
      --unflexible-ui-core-plain-text-h5-weight: 700;
      --unflexible-ui-core-plain-text-ul-weight: 400;
      --unflexible-ui-core-plain-text-ol-weight: 400;
      --unflexible-ui-core-plain-text-a-weight: 400;
      --unflexible-ui-core-plain-text-small-weight: 400;
      --unflexible-ui-core-plain-text-strong-weight: 700;

      --unflexible-ui-core-plain-text-p-align: left;
      --unflexible-ui-core-plain-text-h1-align: left;
      --unflexible-ui-core-plain-text-h2-align: left;
      --unflexible-ui-core-plain-text-h3-align: left;
      --unflexible-ui-core-plain-text-h4-align: left;
      --unflexible-ui-core-plain-text-h5-align: left;
      --unflexible-ui-core-plain-text-ul-align: left;
      --unflexible-ui-core-plain-text-ol-align: left;
      --unflexible-ui-core-plain-text-a-align: left;
      --unflexible-ui-core-plain-text-small-align: left;
      --unflexible-ui-core-plain-text-strong-align: left;

      --unflexible-ui-core-plain-text-p-color: #333333;
      --unflexible-ui-core-plain-text-h1-color: #333333;
      --unflexible-ui-core-plain-text-h2-color: #333333;
      --unflexible-ui-core-plain-text-h3-color: #333333;
      --unflexible-ui-core-plain-text-h4-color: #333333;
      --unflexible-ui-core-plain-text-h5-color: #333333;
      --unflexible-ui-core-plain-text-ul-color: #333333;
      --unflexible-ui-core-plain-text-ol-color: #333333;
      --unflexible-ui-core-plain-text-a-color: #0000ee;
      --unflexible-ui-core-plain-text-small-color: #333333;
      --unflexible-ui-core-plain-text-strong-color: #ee0000;

      --unflexible-ui-core-plain-text-p-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-h1-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-h2-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-h3-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-h4-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-h5-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-ul-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-ol-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-a-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-small-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      --unflexible-ui-core-plain-text-strong-family: 'Helvetica Neue', Arial, Meiryo,
        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;

      --unflexible-ui-core-plain-text-p-line-height: 1.75;
      --unflexible-ui-core-plain-text-h1-line-height: 1.75;
      --unflexible-ui-core-plain-text-h2-line-height: 1.75;
      --unflexible-ui-core-plain-text-h3-line-height: 1.75;
      --unflexible-ui-core-plain-text-h4-line-height: 1.75;
      --unflexible-ui-core-plain-text-h5-line-height: 1.75;
      --unflexible-ui-core-plain-text-ul-line-height: 1.75;
      --unflexible-ui-core-plain-text-ol-line-height: 1.75;
      --unflexible-ui-core-plain-text-a-line-height: 1.75;
      --unflexible-ui-core-plain-text-small-line-height: 1.75;
      --unflexible-ui-core-plain-text-strong-line-height: 1.75;

      --unflexible-ui-core-plain-text-p-margin: 1rem 0 1rem 0;
      --unflexible-ui-core-plain-text-h1-margin: 2rem 0 1rem 0;
      --unflexible-ui-core-plain-text-h2-margin: 2rem 0 1rem 0;
      --unflexible-ui-core-plain-text-h3-margin: 2rem 0 1rem 0;
      --unflexible-ui-core-plain-text-h4-margin: 2rem 0 1rem 0;
      --unflexible-ui-core-plain-text-h5-margin: 2rem 0 1rem 0;
      --unflexible-ui-core-plain-text-ul-margin: 1rem 0 1rem 0;
      --unflexible-ui-core-plain-text-ol-margin: 1rem 0 1rem 0;
      --unflexible-ui-core-plain-text-a-margin: auto;
      --unflexible-ui-core-plain-text-small-margin: auto;
      --unflexible-ui-core-plain-text-strong-margin: auto;

      --unflexible-ui-core-plain-text-p-letter-spacing: 0;
      --unflexible-ui-core-plain-text-h1-letter-spacing: 0;
      --unflexible-ui-core-plain-text-h2-letter-spacing: 0;
      --unflexible-ui-core-plain-text-h3-letter-spacing: 0;
      --unflexible-ui-core-plain-text-h4-letter-spacing: 0;
      --unflexible-ui-core-plain-text-h5-letter-spacing: 0;
      --unflexible-ui-core-plain-text-ul-letter-spacing: 0;
      --unflexible-ui-core-plain-text-ol-letter-spacing: 0;
      --unflexible-ui-core-plain-text-a-letter-spacing: 0;
      --unflexible-ui-core-plain-text-small-letter-spacing: 0;
      --unflexible-ui-core-plain-text-strong-letter-spacing: 0;

      --unflexible-ui-core-plain-text-li-padding: 0.25rem 0;
      --unflexible-ui-core-plain-text-image-width: 100%;
      --unflexible-ui-core-plain-text-iframe-width: 100%;
    }
  }

  width: 100%;

  ${styledTags}

  li {
    padding: var(--unflexible-ui-core-plain-text-li-padding);
  }

  ul,
  ol {
    padding-left: 1.5rem;
  }

  figure,
  img {
    max-width: 100%;
    width: var(----unflexible-ui-core-plain-text-image-width);
    vertical-align: middle;
  }

  iframe {
    max-width: 100%;
    width: var(----unflexible-ui-core-plain-text-iframe-width);
    vertical-align: middle;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;
