import { Navigate, Outlet } from "react-router";

export const UserProvider = ({ login }) => {
  if (!login) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};
