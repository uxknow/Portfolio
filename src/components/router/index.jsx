import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { ProjectPage } from "../../pages/project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":slug",
        element: <ProjectPage />,
      },
    ],
  }
]);
