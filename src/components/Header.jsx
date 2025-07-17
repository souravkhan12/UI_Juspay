import { FaStar, FaBell } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import {
  LucideRotateCcw,
  LucideSun,
  PanelLeft,
  PanelRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/useDarkMode";
import { motion } from "motion/react";
import { LucideMoon } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white p-3 dark:border-[#FFFFFF]/10 dark:bg-[#1e1e1e]">
      <div className="flex items-center gap-3">
        <IconWrap>
          <PanelRight className="w-4 text-gray-500 dark:text-white" />
        </IconWrap>
        <IconWrap>
          <FaStar className="text-gray-500 dark:text-white" />
        </IconWrap>
        <span
          className="cursor-pointer text-sm text-gray-500 transition hover:text-black dark:hover:text-white"
          onClick={() => navigate("/")}
        >
          Dashboards
        </span>
        <span className="text-sm text-gray-400">/</span>
        <span className="text-sm text-black dark:text-white">Default</span>
      </div>

      <div className="flex items-center gap-4">
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="flex items-center rounded-md bg-gray-100 px-2 py-1 dark:bg-[#FFFFFF]/10"
        >
          <HiOutlineSearch className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-24 bg-transparent text-sm text-black outline-none placeholder:text-gray-400 dark:text-white"
          />
          <span className="ml-2 text-xs text-gray-400">⌘/</span>
        </motion.div>

        <motion.button
          onClick={toggleDarkMode}
          whileTap={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="cursor-pointer rounded-full p-2"
        >
          {isDarkMode ? (
            <LucideMoon className="w-4 text-gray-500" />
          ) : (
            <LucideSun className="w-4 text-gray-500" />
          )}
        </motion.button>

        <IconWrap>
          <LucideRotateCcw className="w-4 text-gray-500" />
        </IconWrap>
        <IconWrap>
          <FaBell className="text-gray-500" />
        </IconWrap>
        <IconWrap>
          <PanelLeft className="w-4 text-gray-500" />
        </IconWrap>
      </div>
    </div>
  );
}

// Reusable wrapper for icon microinteractions
const IconWrap = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="cursor-pointer rounded p-1 transition hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    {children}
  </motion.div>
);
