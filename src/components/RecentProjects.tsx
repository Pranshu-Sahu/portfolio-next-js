import { Share, ExternalLink } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      des: "A groundbreaking web application built with Next.js and Tailwind CSS.",
      img: "https://placehold.co/600x400/000000/FFF?text=Project+1",
      iconLists: ["Next.js", "Tailwind", "TS"],
      link: "https://github.com/",
    },
    {
      id: 2,
      title: "Project Two",
      des: "An e-commerce platform with stripe integration and sanity CMS.",
      img: "https://placehold.co/600x400/000000/FFF?text=Project+2",
      iconLists: ["Next.js", "Stripe", "Sanity"],
      link: "https://github.com/",
    },
    {
      id: 3,
      title: "Project Three",
      des: "A real-time chat application using Socket.io and React.",
      img: "https://placehold.co/600x400/000000/FFF?text=Project+3",
      iconLists: ["React", "Socket.io", "Express"],
      link: "https://github.com/",
    },
     {
      id: 4,
      title: "Project Four",
      des: "A 3D Portfolio website with interactive animations.",
      img: "https://placehold.co/600x400/000000/FFF?text=Project+4",
      iconLists: ["Three.js", "GSAP", "React"],
      link: "https://github.com/",
    },
  ];

  return (
    <div className="py-20" id="projects">
      <Reveal>
      <h1 className="heading text-white text-4xl font-bold text-center mb-16">
        A small selection of{" "}
        <span className="text-purple-400">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
           {/* Card Container */}
            <div className="relative flex flex-col items-center justify-center sm:w-[570px] w-full overflow-hidden h-full rounded-3xl bg-[#13162d] border border-white/[0.1]">
                {/* Image Section */}
                <div className="relative w-full h-[50%] overflow-hidden bg-[#13162d] rounded-t-3xl">
                     <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-grow w-full"> 
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                        {title}
                    </h1>
                    
                    <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-2">
                        {des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                            {iconLists.map((icon, index) => (
                                <div key={index} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                    <span className="text-[10px] text-white bg-blue-900 rounded-full w-full h-full flex items-center justify-center">{icon[0]}</span>
                                </div>
                            ))}
                        </div>
                        
                         <a href={link} className="flex justify-center items-center" target="_blank" rel="noreferrer">
                            <p className="flex lg:text-xl md:text-xs text-sm text-purple-400">Check Live Site</p>
                            <ExternalLink className="ms-3" color="#CBACF9" />
                        </a>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
      </Reveal>
    </div>
  );
};
