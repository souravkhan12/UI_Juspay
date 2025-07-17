import {
  Home,
  ShoppingCart,
  BookOpen,
  User,
  Users,
  FileText,
  MessageCircle,
  Dot,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence, easeInOut } from "motion/react";
import { useState } from "react";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)", x: -10 }}
      animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ duration: 0.4, ease: easeInOut }}
      className="flex h-screen flex-col space-y-6 bg-white p-10 dark:bg-[#1e1e1e]"
    >
      <div
        className="flex cursor-pointer items-center space-x-3"
        onClick={() => navigate("/")}
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="h-10 w-10 rounded-full"
        />
        <span className="dark:text-white">ByeWind</span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex space-x-4 pb-2 text-sm">
          <button className="text-gray-400 dark:text-[#FFFFFF]/40">
            Favorites
          </button>
          <button className="text-gray-400 dark:text-[#FFFFFF]/20">
            Recently
          </button>
        </div>
        <span className="flex items-center text-sm text-gray-500 dark:text-white">
          <Dot className="text-gray-900 dark:text-gray-400" />
          Overview
        </span>
        <span className="flex items-center text-sm text-gray-500 dark:text-white">
          <Dot className="text-gray-900 dark:text-gray-400" />
          Projects
        </span>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <h3 className="mb-2 text-xs text-gray-400 uppercase dark:text-[#FFFFFF]/40">
            Dashboards
          </h3>
          <div className="space-y-2">
            <MenuItem
              icon={<Home size={16} />}
              label="Default"
              path="/default"
              currentPath={location.pathname}
              navigate={navigate}
            />
            <MenuItem icon={<ShoppingCart size={16} />} label="eCommerce" />
            <MenuItem icon={<BookOpen size={16} />} label="Projects" />
            <MenuItem icon={<BookOpen size={16} />} label="Online Courses" />
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-xs text-gray-400 uppercase dark:text-[#FFFFFF]/40">
            Pages
          </h3>
          <div className="space-y-2">
            <ExpandableMenuItem
              icon={<User size={16} />}
              label="User Profile"
              subItems={[
                "Edit Profile",
                "Activity Log",
                "Security",
                "Preferences",
              ]}
            />
            <ExpandableMenuItem
              icon={<Users size={16} />}
              label="Account"
              subItems={["Plans", "Billing Info", "Subscription", "Usage"]}
            />
            <ExpandableMenuItem
              icon={<Users size={16} />}
              label="Corporate"
              subItems={["Team", "Structure", "Reports", "Contacts"]}
            />
            <ExpandableMenuItem
              icon={<FileText size={16} />}
              label="Blog"
              subItems={["All Posts", "New Post", "Drafts", "Categories"]}
            />
            <ExpandableMenuItem
              icon={<MessageCircle size={16} />}
              label="Social"
              subItems={["Feed", "Friends", "Messages", "Settings"]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MenuItem({ icon, label, path, navigate, currentPath }) {
  const isActive = path && currentPath === path;

  const handleClick = () => {
    if (path) navigate(path);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`flex w-full cursor-pointer items-center space-x-2 rounded-lg px-2 py-2 text-left transition ${
        isActive
          ? "bg-gray-100 font-semibold dark:bg-white/10"
          : "hover:bg-gray-50 dark:hover:bg-[#FFFFFF]/10"
      }`}
    >
      <span
        className={`${
          isActive
            ? "text-gray-700 dark:text-[#FFFFFF]/20"
            : "text-gray-400 dark:text-[#FFFFFF]/20"
        }`}
      >
        {isActive ? <HiChevronDown /> : <HiChevronRight />}
      </span>
      <span className="text-gray-900 dark:text-[#FFFFFF]">{icon}</span>
      <span className="text-gray-900 dark:text-[#FFFFFF]">{label}</span>
    </motion.button>
  );
}

function ExpandableMenuItem({ icon, label, subItems }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.98 }}
        className="flex w-full cursor-pointer items-center space-x-2 rounded-lg px-2 py-2 text-left hover:bg-gray-50 dark:hover:bg-[#FFFFFF]/10"
      >
        <span className="text-gray-400 dark:text-[#FFFFFF]/20">
          {open ? <HiChevronDown /> : <HiChevronRight />}
        </span>
        <span className="text-gray-900 dark:text-[#FFFFFF]">{icon}</span>
        <span className="text-gray-900 dark:text-[#FFFFFF]">{label}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-1 ml-6 space-y-1 text-sm text-gray-600 dark:text-gray-300"
          >
            {subItems.map((sub, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-white/10"
              >
                {sub}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
