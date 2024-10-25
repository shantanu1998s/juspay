export interface ActivityData {
  title: string;
  timestamp: string;
  src: string;
}

export interface ActivityProps {
  title: string;
  timestamp: string;
  src: string;
  isNew: boolean;
}

const initialActivities: ActivityData[] = [
  {
    title: "Released a new version",
    timestamp: new Date().toISOString(),
    src: "/images/ContactImages/DrewCano.png",
  },
  {
    title: "Fixed a critical bug",
    timestamp: "2024-09-22T09:30:15.000Z",
    src: "/images/ContactImages/AndiLane.png",
  },
  {
    title: "Deployed to production",
    timestamp: "2024-09-18T07:45:00.000Z",
    src: "/images/ContactImages/KateMorrison.png",
  },
  {
    title: "Code review completed",
    timestamp: "2024-08-29T20:20:12.000Z",
    src: "/images/ContactImages/OrlandoDiggs.png",
  },
  {
    title: "Merged PR into main",
    timestamp: "2024-07-01T10:12:30.000Z",
    src: "/images/ContactImages/KorayOkumus.png",
  },
];

export { initialActivities };
