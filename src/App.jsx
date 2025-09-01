import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer";
import Error from "./components/Error";



import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Category from "./pages/Category";
import Signup from "./pages/Signup";
import Signup1 from "./pages/Signup1";
import Email from "./pages/Email";
import Tel from "./pages/Tel";
import Desc from "./pages/Desc";
import BusinessInfo from "./pages/BusinessInfo";
import CompleteBiz from "./pages/CompleteBiz";
import Signin from "./pages/Signin";

 export default function App() {

  function PageOutlet() {
    return (
    <>
      <Header /> 
      <Outlet />
      <Footer />
    </>
  )
  }

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <PageOutlet />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/policy",
          element: <Policy />
        },
        {
          path: "/category",
          element: <Category />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/signin",
          element: <Signin />
        },
        {
          path: "/signup1",
          element: <Signup1 />
        },
        {
          path: "/email",
          element: <Email />
        },
        {
          path: "/tel",
          element: <Tel />
        },
        {
          path: "/desc",
          element: <Desc />
        },
        {
          path: "/businessInfo",
          element: <BusinessInfo />
        },
        {
          path: "/completeBiz",
          element: <CompleteBiz />
        },
      ],
      errorElement: (
        <>
        <Header />
        <Error />
        <Footer />
        </>
      ),
    }
  ]);

  return (
    <RouterProvider router={Routes} />
  ); 
};


