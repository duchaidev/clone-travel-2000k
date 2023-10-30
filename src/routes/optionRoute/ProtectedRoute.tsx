import { Outlet, Navigate } from "react-router-dom"

interface Props {
  path: string
}

function ProtectedRoute({ path }: Props) {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to={path} />
}

export default ProtectedRoute