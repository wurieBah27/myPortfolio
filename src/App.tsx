import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./components/Applayout";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import SingleProjectDetails from "./pages/SingleProjectDetails";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-projects",
        element: <AllProjects />,
      },
      {
        path: "/all-projects/:projectID",
        element: <SingleProjectDetails />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />{" "}
    </>
  );
};

export default App;
