import Image from "next/image";
import Navbar from "../../componets/navbar";
import SideNav from "../../componets/side-nav";
import HomeCards from "../../componets/card";
import Traffic from "../../componets/traffic";



export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Sidebar: span 4 columns */}
          <div className="col-span-12 md:col-span-4">
            <SideNav />
          </div>

          {/* Main content: Gallery and Cards stacked in the same column */}
          <div className="col-span-12 md:col-span-8 space-y-5">
           <HomeCards/>
            <Traffic/>
          </div>
        </div>
      </div>
    </>
  );
}
