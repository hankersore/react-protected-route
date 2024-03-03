// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Login from './Login'
import PrivateRoutes from './PrivateRoutes'
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/" exact />
              <Route element={<Products />} path="/products" />
            </Route>
            <Route element={<Login />} path="/login" />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;