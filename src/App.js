import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Sidebar from './components/SideBar'
import Usuarios from './components/Usuarios'
import Routes from './routes'
import './css/dashboard.css'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196F3'
    }
  }
})
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
