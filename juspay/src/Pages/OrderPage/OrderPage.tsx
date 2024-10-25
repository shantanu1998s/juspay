import "./OrderPage.css";

import OrderTable from "@/Components/OrderTable/OrderTable";

const OrderPage = () => {
  return (
    <div className="order-page-wrapper mb-[200px]">
      <div className="page-header">
        <h2>Order List</h2>
      </div>

      <OrderTable />
    </div>
  );
};

export default OrderPage;
