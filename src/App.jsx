import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer";
import Error from "./components/Error";



import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";

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


