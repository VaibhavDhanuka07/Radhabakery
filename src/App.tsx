import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import { ScrollToTop } from './components/ScrollToTop'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import About from './pages/About'
import Classes from './pages/Classes'
import ClassDetail from './pages/ClassDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,199,255,0.46),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(255,178,178,0.24),_transparent_30%)]" />
          <Navbar />
          <main className="pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/classes/:slug" element={<ClassDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<UserDashboard />} />
              </Route>

              <Route element={<ProtectedRoute adminOnly />}>
                <Route path="/admin" element={<AdminDashboard />} />
              </Route>

              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
