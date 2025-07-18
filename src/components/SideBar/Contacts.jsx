import { motion } from "motion/react";
import { LucideBug } from "lucide-react";
import { FaUser, FaBroadcastTower } from "react-icons/fa";

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
