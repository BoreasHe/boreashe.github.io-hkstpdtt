import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { SiteRouter } from './components/SiteRouter';
import { DataContextProvider } from './context/DataContext';
import { NavBarContextProvider } from './context/NavBarContext';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
import DateFnsUtils from '@date-io/date-fns';

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
  },
  overrides: {
    MuiSelect: {
      root: {

      },
      select: {
        borderRadius: 10
      },
      icon: {
        color: "#A497A7"
      }
    },
    MuiInput: {
      underline: {
        "&&&:before": {
          borderBottom: "none"
        },
      }
    },
    MuiInputLabel: {
      root: {
        color: "#A497A7"
      }
    },
    MuiInputBase: {
      input: {
        color: "#A497A7"
      }
    },
    MuiList: {
      root: {
        backgroundColor: "#59525B",
        color: "#F0F9F3"
      }
    },
    MuiListSubheader: {
      root: {
        color: "#A194A3"
      }
    },
    MuiDivider: {
      root: {
        margin: "none"
      }
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <SiteRouter />
            </MuiPickersUtilsProvider>
          </DataContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
