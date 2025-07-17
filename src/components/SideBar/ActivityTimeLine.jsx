const activities = [
  {
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    message: "You have a bug that needs...",
    time: "Just now",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    message: "Released a new version",
    time: "59 minutes ago",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    message: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    message: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    message: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

export default function ActivityTimeLine() {
  return (
    <div className="w-full max-w-sm">
      <h2 className="mb-4 font-semibold text-gray-800 dark:text-white">
        Activities
      </h2>
      <div className="relative space-y-6">
        {activities.map((activity, idx) => (
          <div key={idx} className="relative flex items-start gap-3">
            <img
              src={activity.avatar}
              alt="avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm leading-tight text-gray-800 dark:text-white">
                {activity.message}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            {idx !== activities.length - 1 && (
              <div className="absolute top-10 left-4 h-8 w-px bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
