import Image from "next/image";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="h-screen w-screen p-5">
      <Dashboard/>
    </div>
  );
}
