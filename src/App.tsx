import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './presentation/atomic';
import { Home } from './presentation/pages';
import { ApolloContextProvider } from './presentation/context';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApolloContextProvider>
        <Home />
        <GlobalStyle />
      </ApolloContextProvider>
    </ThemeProvider>
  );
}

export default App;
