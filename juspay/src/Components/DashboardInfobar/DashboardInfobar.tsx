import { useDashboardContext } from "@/Context/DashboardContext";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
// import DashboardSearch from "../DashboardSearch/DashboardSearch";
import { Refresh, Star } from "../IconSet";
import InfoPannelSwitcher from "../InfoPannelSwitcher/InfoPannelSwitcher";
import SidebarSwitcher from "../SidebarSwitcher/SidebarSwitcher";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./DashboardInfobar.css";

const DashboardInfobar = () => {
  const { dashboardSettings, setDashboardSettings } = useDashboardContext();

  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const extractNameFromPath = (path: string) => {
    const segments = path.split("/");
    if (segments.length > 1) {
      const word = segments[1];
      return capitalize(word);
    }
    return "";
  };

  const toggleFav = () => {
    const currentPath = window.location.pathname;
    const name = extractNameFromPath(currentPath);

    const favoriteItem = {
      name,
      link: currentPath,
    };

    const existingFavIndex = dashboardSettings.favs.findIndex(
      (fav) => fav.link === currentPath
    );

    let updatedFavs;

    if (existingFavIndex !== -1) {
      // Remove from favorites if it already exists
      updatedFavs = dashboardSettings.favs.filter(
        (fav) => fav.link !== currentPath
      );
    } else {
      // Add to favorites
      updatedFavs = [favoriteItem, ...dashboardSettings.favs];
    }

    // Limit favorites to 2
    const limitedFavs = updatedFavs.slice(0, 2);

    setDashboardSettings({ ...dashboardSettings, favs: limitedFavs });
  };

  // Check if the current path is already a favorite
  const currentPath = window.location.pathname;
  const isFavorited = dashboardSettings.favs.some(
    (fav) => fav.link === currentPath
  );
  return (
    <div className="dashboard-infobar-wrapper">
      <div className="">
        <SidebarSwitcher />
        <button onClick={toggleFav} className="infobar-button">
          <Star fav={isFavorited} />
        </button>
        <Breadcrumb />
      </div>
      <div>
        {/* <DashboardSearch /> */}
        <ThemeSwitcher />
        <button className="infobar-button">
          <Refresh />
        </button>
        <InfoPannelSwitcher />
      </div>
    </div>
  );
};

export default DashboardInfobar;
