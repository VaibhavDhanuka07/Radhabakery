import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ adminOnly = false }: { adminOnly?: boolean }) {
  const location = useLocation()
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}
