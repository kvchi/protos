import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { businessBehaviorData } from "../../data/businessBehavior.jsx";
import CustomLegend from "./CustomLegend";

export default function BehaviorChart() {
  return (
    <div className="w-full h-[200px] md:h-[260px] md:p-4 ">
     <div className="flex justify-end">
         <CustomLegend />
     </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={businessBehaviorData}
          barSize={20}
          barGap={8}
          margin={{ top: 5, right: 5, left: 10, bottom: 20 }}
        >
          <XAxis
            dataKey="month"
            interval={0}
            tick={{ fontSize: 11, fill: "green" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis hide />

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              fontSize: "12px",
            }}
          />

          <Bar dataKey="reviews" stackId="a" fill="#0E375F" name="reviews" />
          <Bar dataKey="visited" stackId="a" fill="#355F7A" />
          <Bar
            dataKey="views"
            stackId="a"
            fill="#8FB6D9"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
