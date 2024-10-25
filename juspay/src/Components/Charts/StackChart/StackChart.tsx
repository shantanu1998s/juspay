"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", projections: 186, actuals: 80 },
  { month: "February", projections: 305, actuals: 200 },
  { month: "March", projections: 237, actuals: 120 },
  { month: "April", projections: 73, actuals: 190 },
  { month: "May", projections: 209, actuals: 130 },
  { month: "June", projections: 214, actuals: 140 },
];

const chartConfig = {
  projections: {
    label: "Projections",
    color: "var(--stacked-chart-1)",
  },
  actuals: {
    label: "Actuals",
    color: "var(--stacked-chart-2)",
  },
} satisfies ChartConfig;

const StackedChart = () => {
  return (
    <Card className="charts-card">
      <CardHeader>
        <CardTitle>Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent className="ml-[-30px]">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={4}
              tickFormatter={(value) => `${value}M`}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="projections"
              stackId="a"
              fill="var(--color-projections)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill="var(--color-actuals)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default StackedChart;
