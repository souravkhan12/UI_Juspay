import Header from "../Header";
import StatsCards from "./Cards/StatsCards";
import ProjectionChart from "./charts/ProjectionChart";
import RevenueChart from "./charts/RevenueChart";
import RevenueByLocation from "./charts/RevenueByLocation";
import TotalSales from "./charts/TotalSales";
import TopSellingProducts from "./charts/TopSellingProducts";

function Hero() {
  return (
    <div className="relative border-r border-l border-gray-200 dark:border-[#FFFFFF]/10">
      <Header />
      <h1 className="absolute p-10 text-sm font-medium dark:text-white">
        eCommerce
      </h1>
      <div className="mt-15 p-7">
        <div className="flex flex-col gap-[28px] space-y-10">
          <div className="grid grid-cols-[1fr_1fr] gap-3">
            <StatsCards />
            <ProjectionChart />
          </div>
          <div className="grid grid-cols-[1fr_25%] gap-3">
            <RevenueChart />
            <RevenueByLocation />
          </div>
          <div>
            <div className="grid grid-cols-[1fr_25%] gap-3">
              <TopSellingProducts />
              <TotalSales />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
