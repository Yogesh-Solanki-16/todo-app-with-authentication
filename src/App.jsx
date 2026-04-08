import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={token ? <Navigate to="/products" /> : <Login />} />
        <Route path="/register" element={token ? <Navigate to="/products" /> : <Register />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to={token ? "/products" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
