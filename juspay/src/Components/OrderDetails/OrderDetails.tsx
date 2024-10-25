enum Status {
  InProgress = '{"text": "In Progress", "color": "rgba(149, 164, 252, 1)"}',
  Complete = '{"text": "Complete", "color": "#70B3A0"}',
  Pending = '{"text": "Pending", "color": "#ADD8E6"}',
  Approved = '{"text": "Approved", "color": "#F8CE7F"}',
  Rejected = '{"text": "Rejected", "color": "#B4B4B4"}',
}

interface OrderDetails {
  orderID: string;
  contact: {
    username: string;
    profileUrl: string;
  };
  project: string;
  address: string;
  timestamp: string;
  status: Status;
}

export default function OrderDetails({
  orderDetails,
}: {
  orderDetails: OrderDetails | null;
}) {
  if (orderDetails === null) return;

  const getStatusStyle = (status: Status) => {
    const { color } = JSON.parse(status);
    return {
      backgroundColor: color,
      color: getContrastColor(color),
    };
  };

  const getContrastColor = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

  return (
    <div className="w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Order Details
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {new Date(orderDetails.timestamp).toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {orderDetails.orderID}
            </span>
            <span
              className="block mt-1 px-2 py-1 rounded-full text-xs font-semibold"
              style={getStatusStyle(orderDetails.status)}
            >
              {JSON.parse(orderDetails.status).text}
            </span>
          </div>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-200 dark:border-gray-700 mx-6"></div>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={orderDetails.contact.profileUrl}
                alt={orderDetails.contact.username}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {orderDetails.contact.username}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Client</p>
            </div>
          </div>
          <div className="text-right">
            <h4 className="font-semibold text-gray-800 dark:text-white">
              Project
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {orderDetails.project}
            </p>
          </div>
        </div>
        <div className="border-b border-dashed border-gray-200 dark:border-gray-700"></div>
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
            Delivery Address
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {orderDetails.address}
          </p>
        </div>
      </div>
    </div>
  );
}
