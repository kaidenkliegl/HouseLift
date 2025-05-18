import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import SpotGrid from "./components/SpotGrid";
import SpotPage from "./components/SpotPage/SpotPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateSpot from "./components/CreateSpot";
import ManageSpots from "./components/ManageSpots";
import EditSpot from "./components/ManageSpots/EditForm";

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SpotGrid />,
      },
      {
        path: "/spots/:id",
        element: <SpotPage />,
      },
      {
        path: "/spots/new",
        element: (
          <ProtectedRoute>
            <CreateSpot />
          </ProtectedRoute>
        ),
      },
      {
        path: "/spots/current",
        element: (
          <ProtectedRoute>
            <ManageSpots />
          </ProtectedRoute>
        ),
      },

      {
        path: "/spots/:id/edit",
        element: (
          <ProtectedRoute>
           <EditSpot/>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
