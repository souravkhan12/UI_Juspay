import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ProjectionChart() {
  const data = [
    { name: "Jan", actual: 20, projection: 24 },
    { name: "Feb", actual: 22, projection: 25 },
    { name: "Mar", actual: 21, projection: 23 },
    { name: "Apr", actual: 25, projection: 28 },
    { name: "May", actual: 15, projection: 18 },
    { name: "Jun", actual: 23, projection: 25 },
  ];

  return (
    <div className="rounded-xl bg-gray-50 dark:bg-white/5">
      <h2 className="mb-4 px-3 py-2 text-sm font-semibold text-gray-800 dark:text-white">
        Projections vs Actuals
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ right: 24 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 30]} tick={{ fontSize: 12 }} />
          <Bar dataKey="actual" stackId="a" fill="#93C5FD" barSize={20} />
          <Bar
            dataKey="projection"
            stackId="a"
            fill="#BFDBFE"
            barSize={20}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
