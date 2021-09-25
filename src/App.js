import './App.css';
import Header from './components/Header';
import { Container } from './components/styled/Container.styled';
import { ThemeProvider } from 'styled-components'
import GlobalStyles, { darktTheme, lightTheme } from './components/styled/Global';
import content from './content'
import { Card } from './components/Card';
import Footer from './components/Footer';
import useDarkMode from './components/styled/useDarkMode';
import Toggle from './components/Toggle';

// const theme = {
//   colors: {
//     header: '#ebfbff',
//     body: '#fff',
//     footer: '#003333'
//   },
//   mobile: '768px',
  
// }
function App() {
  const [theme , toggleMode] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darktTheme
  console.log(theme);
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleMode={toggleMode}/>
        <Header />
        <Container>
          
          {content.map((item, index)=>(
            <Card key={index} item={item}/>
            // <p>{item.title}</p>
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
