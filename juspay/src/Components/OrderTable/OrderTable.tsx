import { Order, StatusParserProps } from "@/Pages/OrderPage/utils";
import { getOrderList } from "@/Services/OrderPageServices";
import { formatElapsedTime } from "@/utils/utils";
import { useState, useRef } from "react";
import { Contact } from "../Contacts/Contacts";
import * as Checkbox from "@radix-ui/react-checkbox";
import "./OrderTable.css";
import { Drawer } from "vaul";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Filter, Plus, Sort } from "../IconSet";
import { CheckIcon, ChevronLeft, ChevronRight } from "lucide-react";
import OrderDetails from "../OrderDetails/OrderDetails";
import { AnimatePresence, motion } from "framer-motion";
import NewOrder from "./NewOrder";

const OrderTable = () => {
  const [orders, setOrders] = useState<Order[]>(getOrderList());
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const noOfOrders = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(orders.length / noOfOrders);
  const [newOrder, setNewOrder] = useState<boolean>(false);
  const tableControlRef = useRef<HTMLDivElement | null>(null);

  const addNewOrder = (newOrderData: Order) => {
    setOrders((prevOrders) => [...prevOrders, newOrderData]);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm("");
  };

  const handleRowCheck = (orderID: string) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(orderID)
        ? prevSelectedRows.filter((id) => id !== orderID)
        : [...prevSelectedRows, orderID]
    );
  };

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const filteredOrderDetails = orders.filter((order) => {
    const statusText = JSON.parse(order.status).text.toLowerCase();
    return (
      order.orderID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.contact.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      statusText.includes(searchTerm.toLowerCase())
    );
  });

  const sortedOrders = [...filteredOrderDetails].sort((a, b) => {
    const dateA = new Date(a.timestamp).getTime();
    const dateB = new Date(b.timestamp).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const paginatedOrders = sortedOrders.slice(
    (currentPage - 1) * noOfOrders,
    currentPage * noOfOrders
  );

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(orders.map((order) => order.orderID));
    }
    setSelectAll(!selectAll);
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const window = useWindowSize();
  const handleRowClick = (order: Order) => {
    if (window > 600) return;
    setSelectedOrder(order);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <motion.div
        ref={tableControlRef}
        layoutId="tableControls"
        className="table-controls"
      >
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 3 }}
          >
            <button
              className="table-controls-button"
              aria-label="Add new order"
              onClick={() => setNewOrder(true)}
            >
              <Plus />
            </button>
            <button
              className="table-controls-button"
              aria-label="Filter orders"
            >
              <Filter />
            </button>
            <button
              onClick={handleSort}
              className="table-controls-button"
              aria-label={`Sort orders by date ${
                sortOrder === "asc" ? "ascending" : "descending"
              }`}
            >
              <Sort />
            </button>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 3 }}
            role="search"
            className="order-search-form"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="search"
              id="search"
              placeholder="Search"
              aria-label="Search orders"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.form>
        </AnimatePresence>
      </motion.div>

      {newOrder && (
        <AnimatePresence>
          <motion.div className="fixed inset-0 bg-black/50 z-10 flex items-center flex-col">
            <motion.div
              transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
              layoutId="tableControls"
              key="new-order-controls"
              layout
              className="fixed z-20 p-4 rounded-lg max-h-[450px] overflow-y-scroll bg-white text-black dark:bg-neutral-800 dark:text-white"
              style={{
                top:
                  tableControlRef && tableControlRef.current
                    ? tableControlRef.current.getBoundingClientRect().top + 50
                    : "100px",
                left:
                  tableControlRef && tableControlRef.current
                    ? tableControlRef.current.getBoundingClientRect().left
                    : "100px",
                width:
                  tableControlRef && tableControlRef.current
                    ? tableControlRef.current.getBoundingClientRect().width
                    : "400px",
              }}
            >
              <NewOrder setNewOrder={setNewOrder} addNewOrder={addNewOrder} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      <table className="order-table">
        <thead className="table-header">
          <tr>
            <th className="ot-head">
              <Checkbox.Root
                onCheckedChange={handleSelectAll}
                checked={selectAll}
                aria-label="Select all orders"
                className="checkbox-ac"
              >
                <Checkbox.Indicator className="checkbox-indicator-ac">
                  <CheckIcon size={10} strokeWidth={2} />
                </Checkbox.Indicator>
              </Checkbox.Root>
            </th>
            <th className="ot-head cell-collapse">Order ID</th>
            <th className="ot-head">User</th>
            <th className="ot-head">Project</th>
            <th className="ot-head cell-collapse">Address</th>
            <th className="ot-head cell-collapse">Date</th>
            <th className="ot-head">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order) => (
            <tr
              key={order.orderID}
              onClick={() => handleRowClick(order)}
              aria-label={`View details for order ${order.orderID}`}
            >
              <td>
                <Checkbox.Root
                  checked={selectedRows.includes(order.orderID)}
                  onCheckedChange={() => handleRowCheck(order.orderID)}
                  aria-label={`Select order ${order.orderID}`}
                  className="checkbox-ac"
                >
                  <Checkbox.Indicator className="checkbox-indicator-ac">
                    <CheckIcon size={10} strokeWidth={2} />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </td>
              <td className="cell-collapse">{order.orderID}</td>
              <td>
                <Contact
                  name={order.contact.username}
                  src={order.contact.profileUrl}
                />
              </td>
              <td>{order.project}</td>
              <td className="cell-collapse">{order.address}</td>
              <td className="cell-collapse">
                {formatElapsedTime(order.timestamp)}
              </td>
              <td>
                <StatusParser status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-controls" aria-label="Pagination controls">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeft size={14} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
            aria-label={`Page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <Drawer.Root open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/50" />
          <Drawer.Content className="ot-drawer-content">
            <OrderDetails orderDetails={selectedOrder} />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
};

const StatusParser = ({ status }: StatusParserProps) => {
  const { text, color } = JSON.parse(status);

  return (
    <button className="ot-status-btn " style={{ color }}>
      {text}
    </button>
  );
};

export default OrderTable;
