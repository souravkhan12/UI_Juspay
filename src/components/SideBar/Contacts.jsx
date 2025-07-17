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

const contacts = [
  {
    name: "Natali Craig",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Koray Okumus",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
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

      <h2 className="mt-8 mb-4 font-semibold text-gray-800 dark:text-white">
        Activities
      </h2>
      <div className="relative space-y-6">
        {activities.map((activity, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            className="relative flex items-start gap-3"
          >
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
          </motion.div>
        ))}
      </div>

      <h2 className="mt-8 mb-4 text-sm font-semibold text-gray-500 dark:text-white">
        Contacts
      </h2>
      <div className="space-y-4">
        {contacts.map((contact, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-800 dark:text-white">
              {contact.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
