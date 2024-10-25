interface ProgressBarProps {
  val: number;
  totalVal: number;
}

const ProgressBar = ({ val, totalVal }: ProgressBarProps) => {
  // Calculate the percentage
  const percentage = (val / totalVal) * 100;

  return (
    <div
      style={{
        backgroundColor: "var(--stacked-chart-2)",
        borderRadius: "5px",
        height: "4px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        margin: "2px 0",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: "rgba(168, 197, 218, 1)",
          height: "100%",
          borderRadius: "2px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
