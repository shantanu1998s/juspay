import { Order, Status } from "@/Pages/OrderPage/utils";

const orderDetails: Order[] = [
  {
    orderID: "#CM981",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/NataliCraig.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: new Date().toISOString(),
    status: Status.InProgress,
  },
  {
    orderID: "#CM932",
    contact: {
      username: "Kate Morrison",
      profileUrl: "/images/ContactImages/KateMorrison.png",
    },
    project: "CRM Admin pages",
    address: "Larry San Fransisco",
    timestamp: "2024-09-11T14:22:05Z",
    status: Status.Pending,
  },
  {
    orderID: "#CM983",
    contact: {
      username: "Drew Cano",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    timestamp: "2024-09-12T09:03:45Z",
    status: Status.Complete,
  },
  {
    orderID: "#CM984",
    contact: {
      username: "Orlando Diggs",
      profileUrl: "/images/ContactImages/OrlandoDiggs.png",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    timestamp: "2024-09-13T16:17:10Z",
    status: Status.Approved,
  },
  {
    orderID: "#CM985",
    contact: {
      username: "Andi Lane",
      profileUrl: "/images/ContactImages/AndiLane.png",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    timestamp: "2024-09-14T18:30:55Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM982",
    contact: {
      username: "Kate Morrison",
      profileUrl: "/images/ContactImages/KateMorrison.png",
    },
    project: "CRM Admin pages",
    address: "Larry San Fransisco",
    timestamp: "2024-09-11T14:22:05Z",
    status: Status.Rejected,
  },
  {
    orderID: "#CM987",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/NataliCraig.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-16T08:10:15Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM988",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/NataliCraig.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-17T13:25:40Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM989",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Customer Support",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-18T12:05:30Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM990",
    contact: {
      username: "Orlando Diggs",
      profileUrl: "/images/ContactImages/OrlandoDiggs.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-19T15:50:20Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM991",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-20T09:40:00Z",
    status: Status.InProgress,
  },
  {
    orderID: "#CM992",
    contact: {
      username: "Natali Craig",
      profileUrl: "/images/ContactImages/DrewCano.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    timestamp: "2024-09-21T07:30:45Z",
    status: Status.InProgress,
  },
];

function randomizeTimestamps(orderDetails: Order[]): Order[] {
  const now = new Date();

  // Function to generate a random timestamp within a given range in hours
  const getRandomTimestamp = (
    hoursAgoMin: number,
    hoursAgoMax: number
  ): string => {
    const minTime = now.getTime() - hoursAgoMax * 60 * 60 * 1000; // min time in ms
    const maxTime = now.getTime() - hoursAgoMin * 60 * 60 * 1000; // max time in ms
    const randomTime = Math.random() * (maxTime - minTime) + minTime; // random time in ms
    return new Date(randomTime).toISOString();
  };

  return orderDetails.map((order, index) => {
    let newTimestamp: string;

    // Randomize based on index for simplicity, you can adjust this distribution logic
    if (index % 3 === 0) {
      // Last 6 hours
      newTimestamp = getRandomTimestamp(0, 6);
    } else if (index % 3 === 1) {
      // Between 6 and 12 hours ago
      newTimestamp = getRandomTimestamp(6, 12);
    } else if (index % 3 === 2) {
      // Between 12 and 24 hours ago
      newTimestamp = getRandomTimestamp(12, 24);
    } else {
      // Beyond 24 hours, up to 48 hours ago
      newTimestamp = getRandomTimestamp(24, 48);
    }

    // Return a new object with the updated timestamp, keeping other fields intact
    return {
      ...order,
      timestamp: newTimestamp,
    };
  });
}

export function getOrderList() {
  return randomizeTimestamps(orderDetails);
}
