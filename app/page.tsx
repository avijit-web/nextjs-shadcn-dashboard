import { ChartAreaGradient } from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-card text-card-foreground p-4 rounded-lg text-primary lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-card text-card-foreground p-4 rounded-lg text-primary">
        Test
      </div>
      <div className="bg-card text-card-foreground p-4 rounded-lg text-primary">
        <AppPieChart />
      </div>
      <div className="bg-card text-card-foreground p-4 rounded-lg text-primary">
        Test
      </div>
      <div className="bg-card text-card-foreground p-4 rounded-lg text-primary lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <ChartAreaGradient />
      </div>
      <div className="bg-card text-card-foreground p-4 rounded-lg text-primary">
        Test
      </div>
    </div>
  );
}
