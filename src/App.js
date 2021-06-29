import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { SiteRouter } from './components/SiteRouter';
import { DataContextProvider } from './context/DataContext';
import { NavBarContextProvider } from './context/NavBarContext';

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#2C292D",
    },
    primary: {
      main: "#514B53"
    },
    secondary: {
      main: "#F0F9F3"
    },
  },
  typography: {
    fontFamily: "AdobeClean",
    h6: {
      fontWeight: 700
    }
  }
});

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <DataContextProvider>
            <NavBarContextProvider>
              <SiteRouter />
            </NavBarContextProvider>
          </DataContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
