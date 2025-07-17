import React from "react";
import { FiCalendar, FiMoreHorizontal, FiSearch } from "react-icons/fi";
import Header from "../Header";
import { LucidePlus, ChevronLeft, ChevronRight } from "lucide-react";

const orders = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "https://i.pravatar.cc/40?img=6",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: "https://i.pravatar.cc/40?img=7",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const statusStyles = {
  "In Progress": "text-blue-600 dark:text-blue-400",
  Complete: "text-green-500 dark:text-green-400",
  Pending: "text-cyan-500 dark:text-cyan-400",
  Approved: "text-yellow-500 dark:text-yellow-400",
  Rejected: "text-gray-400 dark:text-gray-500",
};

export default function OrderTable() {
  return (
    <div className="min-h-screen text-gray-700 dark:text-gray-100">
      <Header />

      <div className="p-6 text-sm">
        <div className="flex items-center justify-between rounded-md bg-[#f9fafb] px-4 py-3 dark:bg-[#ffffff]/5">
          <div className="flex items-center space-x-4">
            <button className="text-xl text-gray-600 dark:text-gray-300">
              <LucidePlus />
            </button>
            <button className="text-xl text-gray-600 dark:text-gray-300">
              ⇅
            </button>
          </div>

          <div className="relative">
            <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none dark:border-gray-600 dark:bg-[#ffffff]/5 dark:text-white"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-b-lg pt-10">
          <table className="w-full table-fixed">
            <thead>
              <tr className="text-left text-gray-400 dark:text-white/40">
                <th className="px-4 py-3">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-100 dark:border-gray-700"
                >
                  <td className="px-4 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-4 text-gray-700 dark:text-gray-100">
                    {order.id}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={order.user.avatar}
                        alt={order.user.name}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <span className="text-gray-700 dark:text-gray-100">
                        {order.user.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">{order.project}</td>
                  <td className="px-4 py-4">{order.address}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <FiCalendar className="text-base" />
                      {order.date}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`flex items-center gap-1 ${statusStyles[order.status]}`}
                    >
                      <span className="text-xs">●</span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <FiMoreHorizontal className="text-lg text-gray-500 dark:text-gray-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-end gap-2 pr-2 text-sm text-gray-500 dark:text-gray-400">
          <ChevronLeft />
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`rounded px-3 py-1 transition ${
                n === 1
                  ? "bg-[#1C1C1C]/5 text-black dark:bg-white/10 dark:text-white"
                  : "hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {n}
            </button>
          ))}
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}
