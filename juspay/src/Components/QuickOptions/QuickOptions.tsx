import { useDashboardContext } from "@/Context/DashboardContext";
import "./QuickOptions.css";
import * as Tabs from "@radix-ui/react-tabs";
import { useNavigate } from "react-router-dom";

/*
 * QuickOptions are a set of quick navigation options present in the side navbar
 *
 * It uses the DashboardContent to store and render the last two visited pages
 * and any Page that is favourited by the user.
 *
 *
 * TODO: The component currently uses Tailind CSS for quick styling,
 * To maintain consistency across the app, I would have used Vanilla CSS if given more time
 *
 * https://www.figma.com/design/XBEbJlKyCR4kdwlhJvzAUS/UI-Developer-Assignment?node-id=2-10420&node-type=frame&t=FyXORb76TtQbTIO6-11
 */

const QuickOptions = () => {
  const { dashboardSettings } = useDashboardContext();
  const navigate = useNavigate();
  return (
    <div className="quick-options-wrapper ">
      <Tabs.Root defaultValue="favs">
        <Tabs.List className="quick-options-tab-buttons">
          <Tabs.Trigger className="quick-options-tab-button" value="favs">
            Favourites
          </Tabs.Trigger>
          <Tabs.Trigger className="quick-options-tab-button" value="recents">
            Recents
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="favs" className="quick-options-tab-content">
          {dashboardSettings.favs.length > 0 ? (
            <ul className="w-full ">
              {dashboardSettings.favs.map((item, index) => (
                <li key={index} className="recent-item">
                  <button
                    onClick={() => navigate(item.link)}
                    className="w-full"
                  >
                    <div className="w-[5px] h-[5px] bg-yellow-500 rounded-full"></div>
                    <p>{item.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center w-full py-4 text-sm opacity-45 select-none">
              No Favorities to show
            </div>
          )}
        </Tabs.Content>
        <Tabs.Content value="recents" className="quick-options-tab-content ">
          {dashboardSettings.recents.length > 0 ? (
            <ul className="w-full ">
              {dashboardSettings.recents.map((item, index) => (
                <li key={index} className="recent-item">
                  <button
                    onClick={() => navigate(item.link)}
                    className="w-full"
                  >
                    <div style={{ width: "16px" }}>{item.icon}</div>
                    <p>{item.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center w-full py-4 text-sm opacity-45 select-none">
              No Recents to show
            </div>
          )}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default QuickOptions;
