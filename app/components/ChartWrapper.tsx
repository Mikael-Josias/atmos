import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChart, CartesianGrid, XAxis } from "recharts";

interface IChartContainer {
  children: React.ReactNode;
  title: string;
  chartConfig: ChartConfig;
  chartData: object[] | undefined;
  dataKey: string;
}

export default function ChartWrapper({
  children,
  title,
  chartConfig,
  chartData,
  dataKey,
}: IChartContainer) {
  return (
    <div className="flex flex-col w-full gap-6 lg:gap-6">
      <span className="text-sm w-full lg:text-xl font-bold text-cement_600 dark:text-gray-100">
        {title}
      </span>
      <ChartContainer config={chartConfig} className="w-full">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={dataKey}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={true}
            content={<ChartTooltipContent indicator="dot" />}
          />
          {children}
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
