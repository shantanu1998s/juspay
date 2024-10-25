export interface NotificationData {
  title: string;
  timestamp: string;
  icon: React.ReactNode;
}

export interface NotificationProps {
  icon: React.ReactNode;
  timestamp: string;
  title: string;
  isNew: boolean;
}
