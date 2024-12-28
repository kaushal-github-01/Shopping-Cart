import App from "./App";
import ErrorPage from "./ErrorPage";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      //Define child routes within App
      { index: true, element: <Homepage /> }, //Homepage is the index route of App
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
