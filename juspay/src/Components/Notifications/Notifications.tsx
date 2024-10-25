import React, { useEffect, useState } from "react";
import { formatElapsedTime } from "../../utils/utils";
import "./Notifications.css";
import { Subscribe } from "../IconSet";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { NotificationData, NotificationProps } from "./notificationTypes";
import { initialNotifications } from "./utils";
import { Skeleton } from "../ui/skeleton";

/*
 * Responsible for fetching all the notifications data
 * and rendering each individual notification.
 * Simulates a network call with a delay.
 */
const fetchNotifications = async (): Promise<NotificationData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialNotifications);
    }, 2000);
  });
};

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [newNotificationTimestamp, setNewNotificationTimestamp] = useState<
    string | null
  >(null);
  const [areNotificationsLoading, setAreNotificationsLoading] =
    useState<boolean>(true);
  const [isNotificationAdded, setIsNotificationAdded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
        setAreNotificationsLoading(false);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchData();
  }, []);

  const addNotification = () => {
    if (!isNotificationAdded) {
      const newNotification: NotificationData = {
        title: "Natali subscribed to you",
        timestamp: new Date().toISOString(),
        icon: <Subscribe />,
      };
      setNotifications([newNotification, ...notifications]);
      setNewNotificationTimestamp(newNotification.timestamp);
      setIsNotificationAdded(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      addNotification();
    }, 5000);

    return () => clearTimeout(timer);
  }, [notifications]);

  useEffect(() => {
    if (newNotificationTimestamp) {
      const timer = setTimeout(() => {
        setNewNotificationTimestamp(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [newNotificationTimestamp]);

  return (
    <section
      className="info-group-wrapper"
      aria-labelledby="notifications-heading"
    >
      <header className="info-group-header">
        <h2 id="notifications-heading">Notifications</h2>
      </header>
      <AnimatePresence initial={false} mode="popLayout">
        {areNotificationsLoading ? (
          <ul className="info-group-list">
            {Array(3)
              .fill(0)
              .map(() => (
                <li className="notification-wrapper" key={Math.random()}>
                  <Skeleton className="notification-wrapper" />
                </li>
              ))}
          </ul>
        ) : (
          <ul role="list" className="info-group-list">
            {notifications.map((notification) => (
              <Notification
                key={notification.timestamp}
                title={notification.title}
                icon={notification.icon}
                timestamp={notification.timestamp}
                isNew={notification.timestamp === newNotificationTimestamp}
              />
            ))}
          </ul>
        )}
      </AnimatePresence>
    </section>
  );
};

const Notification: React.FC<NotificationProps> = ({
  icon,
  timestamp,
  title,
  isNew,
}) => {
  return (
    <motion.li
      initial={{ height: 0, opacity: 0, scale: 0.5 }}
      animate={{ height: 46, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
      className="notification-wrapper"
      role="listitem"
      onClick={() =>
        toast("Notification Expanded. Feature under implementation...")
      }
    >
      <div className="notification-icon-wrapper" aria-hidden="true">
        {icon}
      </div>
      <div className="notification-details">
        <p
          className={`notification-title ellipsis-clip ${
            isNew ? "shimmer-effect" : ""
          }`}
        >
          {title}
        </p>
        <p className="notification-timestamp">{formatElapsedTime(timestamp)}</p>
      </div>
    </motion.li>
  );
};

export default Notifications;
