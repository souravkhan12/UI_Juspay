import { HiArrowTrendingUp } from "react-icons/hi2";

export default function StatsCards() {
  const stats = [
    {
      label: "Customers",
      value: "3,781",
      change: "+11.01%",
      bg: "bg-[#E3F5FF]", // same in both modes
      textColor: "text-black dark:text-black",
    },
    {
      label: "Orders",
      value: "1,219",
      change: "-0.03%",
      bg: "bg-gray-50 dark:bg-white/5",
      textColor: "text-black dark:text-white",
    },
    {
      label: "Revenue",
      value: "$695",
      change: "+15.03%",
      bg: "bg-gray-100 dark:bg-white/5",
      textColor: "text-black dark:text-white",
    },
    {
      label: "Growth",
      value: "30.1%",
      change: "+6.08%",
      bg: "bg-[#E5ECF6]", // same in both modes
      textColor: "text-black dark:text-black",
    },
  ];

  const isPositive = (change) => change.startsWith("+");

  return (
    <div className="grid h-[252px] max-w-sm grid-cols-2 gap-4">
      {stats.map((item, idx) => {
        const changeColor = isPositive(item.change)
          ? "text-green-600 dark:text-green-600"
          : "text-red-600 dark:text-red-600";

        return (
          <div
            key={idx}
            className={`rounded-xl ${item.bg} flex flex-col gap-2 p-4`}
          >
            <span className={`text-sm ${item.textColor}`}>{item.label}</span>
            <div className="flex items-center justify-between">
              <span className={`text-2xl font-semibold ${item.textColor}`}>
                {item.value}
              </span>
              <div className={`flex items-center gap-1 text-xs ${changeColor}`}>
                <span>{item.change}</span>
                <HiArrowTrendingUp className="text-sm" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
