import React, { useEffect, useState } from "react";
import { formatElapsedTime } from "../../utils/utils";
import "./Activities.css";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import UserAvatar from "../UserAvatar";
import { ActivityData, ActivityProps, initialActivities } from "./utils";

const ActivityList: React.FC = () => {
  const [activityItems, setActivityItems] =
    useState<ActivityData[]>(initialActivities);
  const [recentActivityTime, setRecentActivityTime] = useState<string | null>(
    null
  );
  const [hasActivityBeenAdded, setHasActivityBeenAdded] = useState(false);

  const handleAddActivity = () => {
    if (!hasActivityBeenAdded) {
      const activityEntry: ActivityData = {
        title: "New project onboarded",
        timestamp: new Date().toISOString(),
        src: "/images/ContactImages/KorayOkumus.png",
      };
      setActivityItems([activityEntry, ...activityItems]);
      setRecentActivityTime(activityEntry.timestamp);
      setHasActivityBeenAdded(true);
    }
  };

  useEffect(() => {
    if (!hasActivityBeenAdded) {
      const timeoutId = setTimeout(() => {
        handleAddActivity();
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [activityItems, hasActivityBeenAdded]);

  useEffect(() => {
    if (recentActivityTime) {
      const clearTime = setTimeout(() => {
        setRecentActivityTime(null);
      }, 5000);

      return () => clearTimeout(clearTime);
    }
  }, [recentActivityTime]);

  return (
    <section
      className="info-group-wrapper"
      aria-labelledby="activity-list-heading"
    >
      <header className="info-group-header">
        <h2 id="activity-list-heading">Activities</h2>
      </header>
      <AnimatePresence initial={false}>
        <ul role="list" className="info-group-list">
          {activityItems.map((activity) => (
            <ActivityCard
              key={activity.timestamp}
              title={activity.title}
              timestamp={activity.timestamp}
              src={activity.src}
              isNew={activity.timestamp === recentActivityTime}
            />
          ))}
        </ul>
      </AnimatePresence>
    </section>
  );
};

const ActivityCard: React.FC<ActivityProps> = ({
  title,
  timestamp,
  src,
  isNew,
}) => {
  return (
    <motion.li
      initial={{ height: 0, opacity: 0, scale: 0.5 }}
      animate={{ height: 46, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
      className="activity-wrapper"
      role="listitem"
      aria-label={`Activity: ${title}, ${formatElapsedTime(timestamp)}`}
      onClick={() =>
        toast("Activity expanded. Feature under development...")
      }
    >
      <div className="activity-avatar-wrapper">
        <UserAvatar src={src} username="Unavailable" />
        <span className="activity-bar" aria-hidden="true"></span>
      </div>
      <div className="activity-details">
        <p
          className={`activity-title ellipsis-clip ${
            isNew ? "shimmer-effect" : ""
          }`}
        >
          {title}
        </p>
        <p className="activity-timestamp">{formatElapsedTime(timestamp)}</p>
      </div>
    </motion.li>
  );
};

export default ActivityList;
