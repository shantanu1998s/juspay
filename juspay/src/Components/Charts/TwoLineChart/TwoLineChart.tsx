"use client";
import "../charts.css";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

interface ChartDataItem {
  month: string;
  revenue: number;
  spending: number;
}

interface TwoLineChartProps {
  chartData: ChartDataItem[];
}

const chartConfig: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--line-chart-1)",
  },
  spending: {
    label: "Spending",
    color: "var(--line-chart-2)",
  },
};

export function TwoLineChart({ chartData }: TwoLineChartProps) {
  return (
    <Card className="charts-card">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="ml-[-40px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={4} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="revenue"
              type="monotone"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="spending"
              type="monotone"
              stroke="var(--color-spending)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
