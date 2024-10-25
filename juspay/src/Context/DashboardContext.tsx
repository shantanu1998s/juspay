import { createContext, useContext, useState, ReactNode } from "react";

interface RecentItem {
  name: string;
  icon: JSX.Element;
  link: string;
}

interface FavItem {
  name: string;
  link: string;
}

interface DashboardSettings {
  showInfoPannel: boolean;
  showSideBar: boolean;
  recents: RecentItem[];
  favs: FavItem[];
}

interface DashboardContextType {
  dashboardSettings: DashboardSettings;
  setDashboardSettings: (settings: DashboardSettings) => void;
}

/*
 * Provides the context for managing dashboard settings, including showing/hiding the sidebar
 * and info panel, managing recent items, and favorite links.
 */

// Default context value to avoid undefined errors
const defaultContextValue: DashboardContextType = {
  dashboardSettings: {
    showInfoPannel: true,
    showSideBar: true,
    recents: [],
    favs: [{ name: "Design Doc", link: "/" }],
  },
  setDashboardSettings: () => {},
};

const DashboardContext =
  createContext<DashboardContextType>(defaultContextValue);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardSettings, setDashboardSettings] = useState<DashboardSettings>(
    {
      showInfoPannel: true,
      showSideBar: true,
      recents: [],
      favs: [{ name: "Design Doc", link: "/" }], // add a default Route to the Design Doc (for assignment)
    }
  );

  const value = {
    dashboardSettings,
    setDashboardSettings,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to access the dashboard context
export const useDashboardContext = (): DashboardContextType => {
  return useContext(DashboardContext);
};
