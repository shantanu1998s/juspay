import { Drawer } from "vaul";
import { BellIcon } from "../IconSet";

import "./InfoPannelSwithcer.css";
import Contacts from "../Contacts/Contacts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useDashboardContext } from "../../Context/DashboardContext";
import Activities from "../Activities/Activities";
import Notifications from "../Notifications/Notifications";

const InfoPannelSwitcher = () => {
  const { dashboardSettings, setDashboardSettings } = useDashboardContext();
  const windowSize = useWindowSize();
  const isDesktop = windowSize > 1000;

  const toggleInfoPannel = () => {
    setDashboardSettings({
      ...dashboardSettings,
      showInfoPannel: !dashboardSettings.showInfoPannel,
    });
  };

  return isDesktop ? (
    <button className="infobar-button" onClick={() => toggleInfoPannel()}>
      <BellIcon />
    </button>
  ) : (
    <>
      <Drawer.Root direction="right">
        <Drawer.Trigger className="infobar-button">
          <BellIcon />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="infopannel-vaul-content-wrapper">
            <div className="infopannel-vaul-content ">
              <Notifications />
              <Activities />
              <Contacts />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
  //   return (
  //     <Drawer.Root direction="right">
  //       <Drawer.Trigger className="infobar-button">
  //         <BellIcon />
  //       </Drawer.Trigger>
  //       <Drawer.Portal>
  //         <Drawer.Overlay className="fixed inset-0 bg-black/40" />
  //         <Drawer.Content className="infopannel-vaul-content-wrapper">
  //           <div className="infopannel-vaul-content ">
  //             <Contacts />
  //           </div>
  //         </Drawer.Content>
  //       </Drawer.Portal>
  //     </Drawer.Root>
  //   );
};

export default InfoPannelSwitcher;
