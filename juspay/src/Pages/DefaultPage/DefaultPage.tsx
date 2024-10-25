import { useState, useEffect, useRef } from "react";
import "./DefaultPage.css";
import { TwoLineChart } from "@/Components/Charts/TwoLineChart/TwoLineChart";
import Map from "@/Components/IconSet/Map";
import { HollowPieChart } from "@/Components/Charts/HollowPieChart/HollowPieChart";
import SalesTable from "@/Components/DefaultPageComponents/SalesTable/SalesTable";
import ProgressBar from "@/Components/ProgressBar/ProgressBar";

import MetricTile from "@/Components/MetricTile/MetricTile";
import { useDashboardContext } from "@/Context/DashboardContext";
import StackedChart from "@/Components/Charts/StackChart/StackChart";

const salesChartData = [
  { type: "direct", sales: 300.54, fill: "var(--color-direct)" },
  { type: "affiliate", sales: 135.18, fill: "var(--color-affiliate)" },
  { type: "sponsor", sales: 154.02, fill: "var(--color-sponsor)" },
  { type: "email", sales: 48.96, fill: "var(--color-email)" },
];

const revenueData = [
  { location: "New York", revenue: "72" },
  { location: "San Francisco", revenue: "39" },
  { location: "Sydney", revenue: "25" },
  { location: "Singapore", revenue: "61" },
];

const DefaultPage = () => {
  const { dashboardSettings } = useDashboardContext();
  const [showCompactDashboard, setShowCompactDashboard] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      if (wrapperRef.current) {
        setShowCompactDashboard(wrapperRef.current.offsetWidth < 700);
      }
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, [dashboardSettings.showInfoPannel, dashboardSettings.showSideBar]);

  return (
    <div
      ref={wrapperRef}
      className="default-page-wrapper w-full  flex flex-col items-center"
    >
      <div className="default-page-content w-full h-full max-w-[900px] flex flex-col items-center gap-[28px] ">
        <div className="page-header">
          <h2>eCommerce</h2>
        </div>

        <QuickMenu />
        <RevenueMetrics showCompactDashboard={showCompactDashboard} />

        {showCompactDashboard && (
          <div className="flex flex-col items-center justify-between gap-[28px] w-full">
            <HollowPieChart chartData={salesChartData} />
            <div className="w-full df-info-card">
              <div className="info-card-header">
                <h2>Top Selling Products</h2>
              </div>
              <div className="w-full flex items-center justify-center">
                <Map />
              </div>
              <div className="w-full text-[12px]">
                {revenueData.map((data) => (
                  <div className="w-full py-[5px]">
                    <h2 className="w-full flex items-center justify-between">
                      <span>{data.location}</span>
                      <span>{data.revenue}K</span>
                    </h2>
                    <ProgressBar val={Number(data.revenue)} totalVal={100} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <SalesMetrics showCompactDashboard={showCompactDashboard} />
      </div>
    </div>
  );
};

const QuickMenu = () => {
  const { dashboardSettings } = useDashboardContext();
  const [isWideEnough, setIsWideEnough] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      if (wrapperRef.current) {
        setIsWideEnough(wrapperRef.current.offsetWidth >= 760);
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [dashboardSettings]);

  return (
    <div
      ref={wrapperRef}
      className="metrics-wrapper"
      style={{ flexDirection: isWideEnough ? "row" : "column" }}
    >
      <div
        className={`metrics-wrapper-row ${isWideEnough ? "w-1/2" : "w-full"}`}
      >
        <div className="grid grid-cols-2 gap-6 h-full">
          <div>
            <MetricTile
              title="Customers"
              value={3781}
              percentageChange={11.01}
              type="1"
            />
          </div>
          <div>
            <MetricTile
              title="Orders"
              value={1219}
              percentageChange={-0.03}
              type="2"
            />
          </div>
          <div>
            <MetricTile
              title="Revenue"
              value={675}
              percentageChange={11.01}
              type="2"
              unitType="$"
            />
          </div>
          <div>
            <MetricTile
              title="Growth"
              value={30.21}
              percentageChange={6.08}
              type="3"
              unitType="%"
            />
          </div>
        </div>
      </div>
      <div
        className={`metrics-wrapper-row ${isWideEnough ? "w-1/2" : "w-full"}`}
      >
        <StackedChart />
      </div>
    </div>
  );
};

const RevenueMetrics = ({
  showCompactDashboard,
}: {
  showCompactDashboard: boolean;
}) => {
  const chartData = [
    { month: "January", revenue: 186, spending: 80 },
    { month: "February", revenue: 305, spending: 200 },
    { month: "March", revenue: 237, spending: 120 },
    { month: "April", revenue: 73, spending: 130 },
    { month: "June", revenue: 214, spending: 140 },
  ];

  return (
    <div className="metrics-wrapper">
      <div
        className={`${showCompactDashboard ? "w-full" : "w-2/3"}
        }`}
      >
        <TwoLineChart chartData={chartData} />
      </div>
      {!showCompactDashboard && (
        <div className="w-1/3 df-info-card">
          <div className="info-card-header">
            <h2>Revenue by Locations</h2>
          </div>
          <div className="w-full flex items-center justify-center">
            <Map />
          </div>
          <div className="w-full text-[12px]">
            {revenueData.map((data) => (
              <div className="w-full py-[5px]">
                <h2 className="w-full flex items-center justify-between">
                  <span>{data.location}</span>
                  <span>{data.revenue}K</span>
                </h2>
                <ProgressBar val={Number(data.revenue)} totalVal={100} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SalesMetrics = ({
  showCompactDashboard,
}: {
  showCompactDashboard: boolean;
}) => {
  return (
    <div className="metrics-wrapper">
      <div
        className={`df-info-card ${showCompactDashboard ? "w-full" : "w-2/3"}`}
      >
        <div className="info-card-header">
          <h2>Top Selling Products</h2>
        </div>
        <SalesTable />
      </div>
      {!showCompactDashboard && (
        <div className="w-1/3">
          <HollowPieChart chartData={salesChartData} />
        </div>
      )}
    </div>
  );
};

export default DefaultPage;
