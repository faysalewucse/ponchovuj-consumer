import { TopNavbar } from "@/components/top-nav/TopNavbar";
import { TopSecondNavbar } from "@/components/top-second-nav/TopSecondNavbar";

export default function Home() {
  return (
    <main>
      <div className="border-b hidden md:block">
        <TopNavbar />
      </div>
      <TopSecondNavbar />
    </main>
  );
}
