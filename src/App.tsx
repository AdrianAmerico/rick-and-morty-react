import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './presentation/atomic';
import { ApolloContextProvider } from './presentation/context';
import { RouterProvider } from 'react-router-dom';
import { router } from './main/routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApolloContextProvider>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ApolloContextProvider>
    </ThemeProvider>
  );
}

export default App;
