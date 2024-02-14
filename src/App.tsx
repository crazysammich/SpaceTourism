import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { AppLayout } from "./layouts";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Destination = lazy(() => import("./pages/Destination"));
const Crew = lazy(() => import("./pages/Crew"));
const Technology = lazy(() => import("./pages/Technology"));

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
      },
      {
        path: "/crew",
        element: <Crew />,
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
