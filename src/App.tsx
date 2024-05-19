import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { crewLoader, destinationLoader } from "./pages";

import { AppLayout } from "./layouts";
const Home = lazy(() => import("./pages/Home/Home"));
const Destination = lazy(() => import("./pages/Destination/Destination"));
const Crew = lazy(() => import("./pages/Crew/Crew"));
const Technology = lazy(() => import("./pages/Technology/Technology"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
        loader: destinationLoader,
      },
      {
        path: "/crew",
        element: <Crew />,
        loader: crewLoader,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
