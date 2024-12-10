// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/layout/ProtectedRoute';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import HyperLite from './pages/bikes/HyperLite';
import UltraLite from './pages/bikes/UltraLite';
import Lite from './pages/bikes/Lite';
import BikeDetail from './pages/bikes/BikeDetail';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              
              <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />
              
              <Route path="/bikes">
                <Route path="hyperlite" element={
                  <ProtectedRoute>
                    <HyperLite />
                  </ProtectedRoute>
                } />
                <Route path="ultralite" element={
                  <ProtectedRoute>
                    <UltraLite />
                  </ProtectedRoute>
                } />
                <Route path="lite" element={
                  <ProtectedRoute>
                    <Lite />
                  </ProtectedRoute>
                } />
                <Route path=":bikeId" element={
                  <ProtectedRoute>
                    <BikeDetail />
                  </ProtectedRoute>
                } />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}