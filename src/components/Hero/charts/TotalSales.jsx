import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#B9FBC0" },
  { name: "Sponsored", value: 154.02, color: "#A0C4FF" },
  { name: "E-mail", value: 48.96, color: "#CAF0F8" },
];

export default function TotalSales() {
  return (
    <div className="rounded-2xl bg-gray-50 p-4 dark:bg-white/10">
      <h2 className="mb-4 text-sm font-medium text-gray-800 dark:text-white">
        Total Sales
      </h2>

      <div className="flex flex-col items-center">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={4}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              fontSize: "12px",
              border: "none",
              color: "#000",
            }}
            wrapperStyle={{ outline: "none" }}
          />
        </PieChart>

        <ul className="mt-4 w-full space-y-2">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex justify-between text-xs text-gray-600 dark:text-gray-300"
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.name}
              </div>
              <span className="font-medium text-gray-700 dark:text-white">
                ${item.value.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
