import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PrivateRoute from './utils/PrivateRoute'
import Login from './pages/Login'
import Header from './component/Header'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          {/* <PrivateRoute Component={Home} path='/' exact /> */}
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<Home />} path='/' exact/>
            </Route>
            <Route element={<Login />} path='/login' />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
