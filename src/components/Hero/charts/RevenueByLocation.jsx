export default function RevenueByLocation() {
  const locations = [
    { city: "New York", value: 72 },
    { city: "San Francisco", value: 39 },
    { city: "Sydney", value: 25 },
    { city: "Singapore", value: 61 },
  ];

  return (
    <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/5">
      <h2 className="mb-4 text-sm font-semibold text-gray-800 dark:text-white">
        Revenue by Location
      </h2>

      <div className="mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1200px-World_map_blank_without_borders.svg.png"
          alt="World Map"
          className="h-32 w-full rounded object-cover"
        />
      </div>

      <div className="space-y-2">
        {locations.map((loc, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-xs text-gray-700 dark:text-white">
              {loc.city}
            </span>
            <div className="flex items-center">
              <div className="h-1 w-full rounded bg-blue-100">
                <div
                  className="h-1 rounded bg-blue-400"
                  style={{ width: `${loc.value}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-800 dark:text-white">
                {loc.value}K
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
