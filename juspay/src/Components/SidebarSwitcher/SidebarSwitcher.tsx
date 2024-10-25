import { Drawer } from "vaul";
import { Sidebar } from "../IconSet";
import UserDetails from "../UserDetails/UserDetails";
import { dashboardDirectory, pageDirectory } from "../DashboardSidebar/data";
import Directory from "../Directory/Directory";
import "./SidebarSwitcher.css";
import { useDashboardContext } from "../../Context/DashboardContext";
import { useWindowSize } from "../../hooks/useWindowSize";
import QuickOptions from "../QuickOptions/QuickOptions";

/*
 * The SidebarSwitcher component toggles the display of the dashboard's sidebar.
 * It switches between desktop view and mobile drawer view based on the screen size.
 *
 * If the windowSize is greater than 1000px, the <Sidebar /> is rendered,
 * Otherwise a Drawer Component is used to render the info
 */

const SidebarSwitcher: React.FC = () => {
  const { dashboardSettings, setDashboardSettings } = useDashboardContext();
  const windowSize = useWindowSize();
  const isDesktop = windowSize > 1000;

  const toggleSidebar = () => {
    setDashboardSettings({
      ...dashboardSettings,
      showSideBar: !dashboardSettings.showSideBar,
    });
  };

  return isDesktop ? (
    <button
      className="infobar-button"
      onClick={toggleSidebar}
      aria-label="Toggle Sidebar"
    >
      <Sidebar />
    </button>
  ) : (
    <Drawer.Root direction="left">
      <Drawer.Trigger className="infobar-button" aria-label="Open Sidebar">
        <Sidebar />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="sidebar-vaul-content-wrapper">
          <div className="sidebar-vaul-content">
            <UserDetails />
            <QuickOptions />
            <div className="dashboard-sidebar-group">
              <header className="dashboard-sidebar-group-title">
                <h2>Dashboards</h2>
              </header>
              <Directory directory={dashboardDirectory} />
            </div>
            <div className="dashboard-sidebar-group">
              <header className="dashboard-sidebar-group-title">
                <h2>Pages</h2>
              </header>
              <Directory directory={pageDirectory} />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default SidebarSwitcher;
