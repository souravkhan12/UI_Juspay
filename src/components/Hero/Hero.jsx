import { motion } from "motion/react";
import Header from "../Header";
import StatsCards from "./Cards/StatsCards";
import ProjectionChart from "./charts/ProjectionChart";
import RevenueChart from "./charts/RevenueChart";
import RevenueByLocation from "./charts/RevenueByLocation";
import TotalSales from "./charts/TotalSales";
import TopSellingProducts from "./charts/TopSellingProducts";

function Hero() {
  return (
    <motion.div 
      className="relative border-r border-l border-gray-200 dark:border-[#FFFFFF]/10"
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7 }}
    >
      <Header />
      <motion.h1 
        className="absolute p-10 text-sm font-medium dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        eCommerce
      </motion.h1>
      <div className="mt-15 p-7">
        <div className="flex flex-col gap-[28px] space-y-10">
          <motion.div 
            className="grid grid-cols-[1fr_1fr] gap-3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <StatsCards />
            <ProjectionChart />
          </motion.div>
          <motion.div 
            className="grid grid-cols-[1fr_25%] gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <RevenueChart />
            <RevenueByLocation />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="grid grid-cols-[1fr_25%] gap-3">
              <TopSellingProducts />
              <TotalSales />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;

