import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
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
import HomeAfterLogin from "./pages/HomeAfterLogin";
import Blog from "./pages/Blog";
import Business from "./pages/Business";
import UserSignUp from "./pages/auth/UserSignUp";
import VerifyEmail from "./pages/auth/VerifyEmail";
import SearchResult from "./pages/SearchResult";
import LearnMore from "./pages/LearnMore";
import Map from "./pages/Map";
import SearchDetails from "./pages/SearchDetails";
import Menu from "./pages/Menu";
import Upload from "./pages/Upload";
import Dashboard from "./pages/dashboard/Dashboard";

import DashboardLayout from "./layout/DashboardLayout";
import RestaurantDetails from "./pages/dashboard/RestaurantDetails";
import MenuDetails from "./pages/dashboard/MenuDetails";
import CommentPage from "./pages/dashboard/CommentPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {


  function PageOutlet() {
    return (
      <>
      <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

  const Routes = createBrowserRouter([
  
    {
      path: "/",
      element: <PageOutlet />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <HomeAfterLogin /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/policy", element: <Policy /> },
        { path: "/category", element: <Category /> },
        { path: "/signup", element: <Signup /> },
        { path: "/signin", element: <Signin /> },
        { path: "/signup1", element: <Signup1 /> },
        { path: "/userSignup", element: <UserSignUp /> },
        { path: "/email", element: <Email /> },
        { path: "/verifyemail", element: <VerifyEmail /> },
        { path: "/tel", element: <Tel /> },
        { path: "/desc", element: <Desc /> },
        { path: "/businessInfo", element: <BusinessInfo /> },
        { path: "/completeBiz", element: <CompleteBiz /> },
        { path: "/blog", element: <Blog /> },
        { path: "/business", element: <Business /> },
        { path: "/searchResult", element: <SearchResult /> },
        { path: "/learnMore", element: <LearnMore /> },
        { path: "/map", element: <Map /> },
        { path: "/searchDetails", element: <SearchDetails /> },
        { path: "/menu", element: <Menu /> },
        { path: "/upload", element: <Upload /> },
      ],
      errorElement: (
        <>
          <Header />
          <Error />
          <Footer />
        </>
      ),
    },

    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />
        },
        {
          path: "restaurantDetails",
          element: <RestaurantDetails />
        },
        {
          path: "menuDetails",
          element: <MenuDetails />
        },
        {
          path: "commentSection",
          element: <CommentPage />
        },
      ]
    }

  ]);

  return <RouterProvider router={Routes} />;
};
