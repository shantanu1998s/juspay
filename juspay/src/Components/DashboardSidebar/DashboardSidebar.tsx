import UserDetails from "../UserDetails/UserDetails";
import "./DashboardSidebar.css";
import Directory from "../Directory/Directory";
import { dashboardDirectory, pageDirectory } from "./data";
import QuickOptions from "../QuickOptions/QuickOptions";

/*
 *  The DashboardSidebar component provides the sidebar structure for the dashboard.
 *  It includes user details, quick options like favs and recent,
 *  and varoius navigation links.
 *
 *  For smaller screens, the same content is rendered in a Drawer Component from <SidebarSwitcher />
 */

const DashboardSidebar: React.FC = () => {
  return (
    <aside className="dashboard-sidebar">
      <UserDetails />
      <QuickOptions />

      <section className="dashboard-sidebar-group">
        <header className="dashboard-sidebar-group-title">
          <h2>Dashboards</h2>
        </header>
        <Directory directory={dashboardDirectory} />
      </section>

      <section className="dashboard-sidebar-group">
        <header className="dashboard-sidebar-group-title">
          <h2>Pages</h2>
        </header>
        <Directory directory={pageDirectory} />
      </section>
    </aside>
  );
};

export default DashboardSidebar;
