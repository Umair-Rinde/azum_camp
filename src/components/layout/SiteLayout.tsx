import { Outlet } from "react-router-dom";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { HashScroll } from "./HashScroll";
import { JsonLd } from "@/components/seo/JsonLd";

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd />
      <HashScroll />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
