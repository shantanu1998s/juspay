import { Route, Routes } from "react-router-dom";
import DashboardInfobar from "../../Components/DashboardInfobar/DashboardInfobar";
import DefaultPage from "../DefaultPage/DefaultPage";
import OrderPage from "../OrderPage/OrderPage";
import {
  DashboardProvider,
  useDashboardContext,
} from "../../Context/DashboardContext";

import "./Dashboard.css";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import InfoPannel from "../../Components/InfoPannel/InfoPannel";
import LandingPage from "../LandingPage/LandingPage";

/*
 * The Dashboard component provides the layout and routing for dashboard-related pages.
 * It conditionally renders the sidebar, info panel, and main content based on the dashboard settings.
 */
const Dashboard: React.FC = () => {
  const { dashboardSettings } = useDashboardContext();

  return (
    <div className="dashboard-wrapper">
      {dashboardSettings?.showSideBar && <DashboardSidebar />}
      <div className="dashboard-content-wrapper">
        <DashboardInfobar />
        <section className="dashboard-content">
          <Routes>
            <Route path="" element={<LandingPage />} />
            <Route path="default" element={<DefaultPage />} />
            <Route path="orders" element={<OrderPage />} />
          </Routes>
        </section>
      </div>
      {dashboardSettings?.showInfoPannel && <InfoPannel />}
    </div>
  );
};

/*
 * A wrapper component to wrap the Dashboard inside a DashboardContent
 * The DashboardContext manages Dashboard Settings like showSidebar, showInfoPannel etc.
 *
 * The DashboardContext ensures that the Dashboard remains
 * interactive and responsive for smaller screens
 */
const DashboardWrapper: React.FC = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default DashboardWrapper;
