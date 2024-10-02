
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WithHeaderLayout from './components/layout/WithHeaderLayout';
import WithoutHeaderLayout from './components/layout/WithoutHeaderLayout';
import MainPage from './components/pages/MainPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>


          <Route path="/" element={
            <WithHeaderLayout>
              <MainPage />
            </WithHeaderLayout>
          } />

          <Route path="/login" element={

            <WithoutHeaderLayout>
              kdfj
            </WithoutHeaderLayout>
          } />


        </Routes>
      </Router>


    </div>
  );
}

export default App;
