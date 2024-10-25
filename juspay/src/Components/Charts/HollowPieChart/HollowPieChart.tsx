"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";
import { capitalizeWords } from "@/utils/utils";

interface ChartDataItem {
  type: string;
  sales: number;
  fill: string;
}

interface HollowPieChartProps {
  chartData: ChartDataItem[];
}

export function HollowPieChart({ chartData }: HollowPieChartProps) {
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0);
  }, [chartData]);

  const chartConfig: ChartConfig = React.useMemo(() => {
    const config: ChartConfig = {
      visitors: {
        label: "Visitors",
      },
    };
    chartData.forEach((item, index) => {
      config[item.type] = {
        label: item.type.charAt(0).toUpperCase() + item.type.slice(1),
        color: `hsl(var(--chart-${index + 1}))`,
      };
    });
    return config;
  }, [chartData]);

  return (
    <Card className="charts-card">
      <CardHeader style={{ marginBottom: "-30px" }}>
        <CardTitle>Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="type"
              innerRadius={60}
              outerRadius={70}
              cornerRadius={5}
              paddingAngle={4}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalAmount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Sales
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="grid grid-cols-2 gap-4 h-full w-full text-xs">
          {chartData.map((data, index) => (
            <>
              <div
                style={{ color: `hsl(var(--chart-${index + 1}))` }}
                className="flex w-full items-center justify-between font-semibold"
              >
                <p>{capitalizeWords(data.type)}</p>
                <p>${data.sales}</p>
              </div>
            </>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
