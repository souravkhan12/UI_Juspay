import { motion } from "motion/react";
import { LucideBug } from "lucide-react";
import { FaUser, FaBroadcastTower } from "react-icons/fa";

const notifications = [
  {
    icon: <LucideBug />,
    message: "You have a bug that needs...",
    time: "Just now",
  },
  {
    icon: <FaUser />,
    message: "New user registered",
    time: "59 minutes ago",
  },
  {
    icon: <LucideBug />,
    message: "You have a bug that needs...",
    time: "12 hours ago",
  },
  {
    icon: <FaBroadcastTower />,
    message: "Andil Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

export default function NotificationPanel() {
  return (
    <div className="w-full max-w-sm">
      <h2 className="mb-4 font-semibold text-gray-800 dark:text-white">
        Notifications
      </h2>
      <div className="space-y-4">
        {notifications.map((notif, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            className="flex items-start gap-5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-lg">
              {notif.icon}
            </div>
            <div>
              <p className="text-sm leading-tight text-gray-800 dark:text-white">
                {notif.message}
              </p>
              <p className="text-xs text-gray-500">{notif.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
