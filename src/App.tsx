import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './presentation/atomic';
import { Home } from './presentation/pages';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
