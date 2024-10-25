import { TrendDown, TrendUp } from "../IconSet";
import { NumberTicker } from "../NumberTicker/NumberTicker";
import "./MetricTile.css";

interface MetricTileProps {
  value: number;
  percentageChange: number;
  title: string;
  unitType?: string;
  type?: string;
}

const MetricTile: React.FC<MetricTileProps> = ({
  value,
  percentageChange,
  title,
  unitType,
  type = "1",
}) => {
  const isPositive = percentageChange >= 0;
  const absolutePercentageChange = Math.abs(percentageChange);
  const formattedPercentageChange = absolutePercentageChange.toFixed(2);
  return (
    <div className={`metric-tile-wrapper tile-style-${type}`}>
      <h3 className="metric-tile-title">{title}</h3>
      <div className="metric-tile-details-wrapper">
        <h3 className="metric-tile-value">
          {unitType && unitType !== "%" && unitType}
          <NumberTicker endValue={value} />
          {unitType && unitType === "%" && unitType}
        </h3>
        <div className="metric-tile-percentage-wrapper">
          <p
            className={`metric-tile-percentage ${
              isPositive ? "positive" : "negative"
            }`}
          >
            {isPositive
              ? `+${formattedPercentageChange}`
              : `-${formattedPercentageChange}`}
            %
          </p>
          {isPositive ? (
            <TrendUp aria-label="Trend up icon" themeSwitch={type === "2"} />
          ) : (
            <TrendDown
              aria-label="Trend down icon"
              themeSwitch={type === "2"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricTile;
