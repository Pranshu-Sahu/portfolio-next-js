import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { About } from "@/components/About";
import { RecentProjects } from "@/components/RecentProjects";
import { Contact } from "@/components/Contact";
import { House, User, Briefcase, Mail } from "lucide-react";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/", icon: <House /> },
    { name: "About", link: "#about", icon: <User /> },
    { name: "Projects", link: "#projects", icon: <Briefcase /> },
    { name: "Contact", link: "#contact", icon: <Mail /> },
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        <Contact />
        <footer className="w-full pt-20 pb-10">
             <p className="text-white-200 md:text-base text-sm md:font-normal font-light text-center text-gray-400">
                 Copyright © 2026 Developer
             </p>
        </footer>
      </div>
    </main>
  );
}
