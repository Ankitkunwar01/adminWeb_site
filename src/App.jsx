import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/Dashboard';
import MediaPage from './pages/Media';
import PortfolioReleasePage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import Login from './pages/auth/Login';
import { NotificationProvider } from './context/NotificationContext';
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

// Public Route Component (redirect to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return !isLoggedIn ? children : <Navigate to="/" replace />;
};

function AppContent() {
  return (
    <Routes>
      {/* Public Route */}  
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      
      {/* Protected Routes */}
      <Route path="/*" element={
        <ProtectedRoute>
          <NotificationProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/media" element={<MediaPage />} />
                <Route path="/portfolio" element={<PortfolioReleasePage  />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Layout>
          </NotificationProvider>
        </ProtectedRoute>
      } />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
