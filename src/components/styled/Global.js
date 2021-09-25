import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

*{
    box-sizing: border-box;
}
body{
    background: ${(({ theme }) => theme.colors.body)};
    color: ${(({ theme }) => theme.colors.text)};
    // color: hsl(192, 100%, 9%);
    font-family: 'Lato', sans-serif;
    font-size: 1.15rem;
    margin: 0;
    transition: all .5s linear;
}
p{
    opacity: 0.6;
    line-height: 1.5;
}
img{
    max-width: 100%;
}
`
export const lightTheme = {
    // body: '#fff',
    // text: '#121212',
    // primary: '#6200ee',
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
        text: '#002D38',
    },
    mobile: '768px',
    card: {
        text: 'black',
        bg: '#fff'
    },

}

export const darktTheme = {
    // body: '#121212',
    // text: '#fff',
    // primary: '#bb86fc',
    colors: {
        header: '#16213E',
        // body: '#121212',
        body: '#0F3460',
        footer: '#16213E',
        text: '#fff',
    },
    mobile: '768px',
    card: {
        text: 'red',
        bg: '#1A1A2E'
    },

}

export default GlobalStyles