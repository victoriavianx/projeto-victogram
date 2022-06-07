import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    :root {
        --purple: #a208ff;
        --darkmagenta: #b929ff;
        --magenta: #d149ff;
        --lightmagenta: #e86aff;
        --pink: #ff8aff;
        --grey11: #1C1C1C;
        --darkgrey: #A9A9A9;
        --silver: #C0C0C0;
        --lightgrey: #D3D3D3;
        --white: #ffffff;
    }

    html, body {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    main {
        display: flex;
        max-width: 1024px;
    }

    li {
        list-style: none;
    }

    input:focus {
        outline: none;
    }

`;

export default GlobalStyle;
