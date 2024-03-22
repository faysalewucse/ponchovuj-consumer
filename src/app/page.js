import MainNavbar from "@/components/navbars/MainNavbar";
import { TopNavbar } from "@/components/navbars/top-nav/TopNavbar";
import { TopSecondNavbar } from "@/components/navbars/top-second-nav/TopSecondNavbar";

export default function Home() {
  return (
    <main>
      <div className="border-b hidden md:block">
        <TopNavbar />
      </div>
      <TopSecondNavbar />
      <MainNavbar />
    </main>
  );
}
