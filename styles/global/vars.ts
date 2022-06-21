import { css } from "styled-components";

export const vars = css`
  :root {
    --color-white: 255, 255, 255;
    --color-black: 0, 0, 0;

    --color-primary: 255, 0, 0;
    --color-primary-contrast: var(--color-white);
    --color-secondary: 0, 255, 0;
    --color-primary-contrast: var(--color-white);
    --color-tertiary: 0, 0, 255;
    --color-tertiary-contrast: var(--color-white);

    --font-family-sans: sans-serif;
    --font-family-serif: serif;

    --font-size-xs: clamp(0.625rem, 0.58rem + 0.227vw, 0.75rem);
    --font-size-sm: clamp(0.8125rem, 0.77rem + 0.227vw, 0.9375rem);
    --font-size-md: clamp(0.9375rem, 0.915rem + 0.114vw, 1rem);
    --font-size-lg: clamp(1rem, 0.95rem + 0.227vw, 1.125rem);
    --font-size-xl: clamp(1.125rem, 1.078rem + 0.227vw, 1.25rem);
    --font-size-h6: clamp(1.375rem, 1.33rem + 0.227vw, 1.5rem);
    --font-size-h5: clamp(1.625rem, 1.58rem + 0.227vw, 1.75rem);
    --font-size-h4: clamp(1.875rem, 1.83rem + 0.227vw, 2rem);
    --font-size-h3: clamp(2.375rem, 2.33rem + 0.227vw, 2.5rem);
    --font-size-h2: clamp(3rem, 2.91rem + 0.455vw, 3.25rem);
    --font-size-h1: clamp(5.9375rem, 5.824rem + 0.568vw, 6.25rem);

    --responsive-max: 1200px;
    --responsive-min: 320px;
    --header-height: 4rem;
  }
`;
