import Activities from "../Activities/Activities";
import Contacts from "../Contacts/Contacts";
import Notifications from "../Notifications/Notifications";
import "./InfoPannel.css";

/*
 * The InfoPannel is the pannel on the right and houses the Notifications, Activities and Components.
 * For smaller screens the same content is rendered by the InfoPannelSwitcher inside the Drawer Component
 */

const InfoPannel: React.FC = () => {
  return (
    <aside className="infopannel-wrapper">
      <Notifications />
      <Activities />
      <Contacts />
    </aside>
  );
};

export default InfoPannel;
