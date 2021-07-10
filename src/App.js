import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors'
import Layout from '../src/components/Layout'

function App() {
  const [dark, setdark] = useState(false)
  const theme = createTheme({
    palette: {
      primary: {
        main: '#468B45'
      },
      secondary: purple,
      type: dark? 'dark' : 'light'
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }
  })
  
  const toggle= () =>setdark(!dark)
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout toggle={toggle}>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>

  );
}

export default App;
