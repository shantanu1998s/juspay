import { Bug, Subscribe, User } from "../IconSet";
import { NotificationData } from "./notificationTypes";

const initialNotifications: NotificationData[] = [
  {
    title: "You have a bug that needs resolution",
    timestamp: new Date().toISOString(),
    icon: <Bug />,
  },
  {
    title: "New user registered",
    timestamp: "2024-09-22T09:30:15.000Z",
    icon: <User />,
  },
  {
    title: "Andi Lane subscribed to you",
    timestamp: "2024-09-18T07:45:00.000Z",
    icon: <Subscribe />,
  },
];

export { initialNotifications };
