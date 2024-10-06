
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WithHeaderLayout from './components/layout/WithHeaderLayout';
import WithoutHeaderLayout from './components/layout/WithoutHeaderLayout';
import MainPage from './components/pages/MainPage';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import HotDeals from './components/pages/HotDeals';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
        contrastText: '#fff',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: '#ff1744',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
      allVariants: {
        color: '#000000',
      },
      button: {
        fontWeight: 'bold',
        textTransform: 'none',
        backgroundColor: 'ButtonFace'
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={
              <WithHeaderLayout>
                <MainPage />
              </WithHeaderLayout>
            } />
            <Route path='/hotDeals' element={
              <WithHeaderLayout>
                <HotDeals />
              </WithHeaderLayout>

            } />

            <Route path="/login" element={

              <WithoutHeaderLayout>
              </WithoutHeaderLayout>
            } />


          </Routes>
        </Router>


      </div>

    </ThemeProvider>

  );
}

export default App;
