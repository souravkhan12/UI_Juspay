import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useDarkMode } from "../../../context/useDarkMode";

export default function RevenueChart() {
  const { isDarkMode } = useDarkMode();

  const data = [
    { month: "Jan", current: 12, previous: 8 },
    { month: "Feb", current: 10, previous: 16 },
    { month: "Mar", current: 9, previous: 14 },
    { month: "Apr", current: 14, previous: 10 },
    { month: "May", current: 18, previous: 12 },
    { month: "Jun", current: 20, previous: 22 },
  ];

  return (
    <div className="rounded-xl bg-gray-50 dark:bg-white/5">
      <div className="mb-4 flex items-center justify-between p-7">
        <h2 className="text-sm font-semibold text-gray-800 dark:text-white">
          Revenue
        </h2>
        <div className="flex gap-4 text-xs text-gray-600 dark:text-white">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-black" />
            Current Week{" "}
            <span className="font-semibold text-black dark:text-white">
              $58,211
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-blue-300" />
            Previous Week{" "}
            <span className="font-semibold text-black dark:text-white">
              $68,768
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ right: 24 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 30]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#93C5FD"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke={`${isDarkMode ? "#93C5FD" : "black"}`}
            strokeWidth={3}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
