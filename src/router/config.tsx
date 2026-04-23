import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ContactSales from "../pages/contact-sales/page";
import SignUp from "../pages/signup/page";
import SignIn from "../pages/signin/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact-sales",
    element: <ContactSales />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
