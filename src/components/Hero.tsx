import { Navigation } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";
import { MagicButton } from "./ui/MagicButton";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white bg-grid-black absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative z-10 my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/[0.2] shadow-2xl">
                <Image 
                  src="/profile.jpg" 
                  alt="Profile" 
                  fill
                  className="object-cover"
                  style={{ objectPosition: '60% 10%' }}
                  priority
                />
              </div>
            </div>

            <h2 className="uppercase tracking-widest text-xs text-center text-[#E4ECFF] max-w-80">
                Dynamic Web Magic with Next.js
            </h2>
            
            <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Transforming Concepts into <span className="text-purple-400">Seamless User Experiences</span>
            </h1>

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
                Hi, I'm a Next.js Developer based in India.
            </p>

            <a href="#projects">
                <MagicButton 
                    title="See my Work"
                    icon={<Navigation size={16} />}
                    position="right"
                />
            </a>
        </div>
      </div>
    </div>
  );
};
