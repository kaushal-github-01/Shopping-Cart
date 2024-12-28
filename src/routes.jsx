import App from "./App";
import ErrorPage from "./ErrorPage";
import Shop from "./components/Shop";
import Homepage from "./components/Homepage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      //Define child routes within App
      { index: true, element: <Homepage /> }, //Homepage is the index route of App
      { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;
