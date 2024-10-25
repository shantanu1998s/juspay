import { Status } from "@/Pages/OrderPage/utils";
import { useEffect, useState } from "react";

const NewOrder = ({ setNewOrder, addNewOrder }: any) => {
  const generateOrderId = () => {
    const prefix = "CM";
    const randomNum = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    return `#${prefix}${randomNum}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    addNewOrder(formData);

    setNewOrder(false);
  };

  const [formData, setFormData] = useState({
    orderID: "",
    contact: {
      username: "ByeWind",
      profileUrl: "/images/ContactImages/NataliCrai",
    },
    project: "",
    address: "",
    status: Status.InProgress,
  });

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, orderID: generateOrderId() }));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
    <div className="w-full h-full p-2 z-30">
      <form onSubmit={handleSubmit} className="space-y-4 outline-none">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              New Order
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {new Date().toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {formData.orderID}
            </span>
            <span
              className="block mt-1 px-2 py-1 rounded-full text-xs font-semibold"
              style={getStatusStyle(Status.Approved)}
            >
              {JSON.parse(formData.status).text}
            </span>
          </div>
        </div>
        <div className="border-b border-dashed border-gray-200 dark:border-gray-700 mx-6"></div>

        <div>
          <label htmlFor="project" className="block mb-2">
            Project
          </label>
          <input
            type="text"
            id="project"
            name="project"
            value={formData.project}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md h-[28px]"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full h-[28px] rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 blue-button rounded-md"
        >
          Create Order
        </button>
      </form>

      <button className="w-full px-4 py-2" onClick={(e) => handleSubmit(e)}>
        <u>Cancel</u>
      </button>
    </div>
  );
};

export default NewOrder;
