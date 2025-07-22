import CommerceDashboard from "./Components/CommerceDashboard";
import CommerceTabs from "./Components/CommerceTabs";
import Header from "./Components/Header";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 mx-4 mt-6 rounded-2xl border border-gray-100 ">
      <Header/>
      <CommerceTabs />
      <CommerceDashboard />
    </div>
  );
}
