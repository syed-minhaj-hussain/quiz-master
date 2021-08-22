import { Route, Navigate } from "react-router-dom";
export type PrivateRouteType = {
  auth: boolean;
  element: React.ReactElement;
  path: string;
};
export const PrivateRoute = ({ auth, element, path }: PrivateRouteType) => {
  return (
    <>
      {auth ? (
        <Route path={path} element={element} />
      ) : (
        <Navigate to="/login" state={{ from: path }} replace />
      )}
    </>
  );
};
