import { Outlet } from "react-router-dom";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import Header from "../components/Header";

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <DashboardFooter />
    </>
  );
}
