import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { vars } from "./vars";

export const Global = createGlobalStyle`
    ${reset};
    ${vars};

    html, body, #__next {
        width: 100%;
        height: 100vh;
        font-family: var(--font-family-sans);
        text-rendering: geometricPrecision;
        overflow: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-family-serif);
        font-weight: 400;
        letter-spacing: .05em;
        line-height: 1.25;
        text-transform: uppercase;
    }


    p, span, li {
        line-height: 1.5;
    }
`;
