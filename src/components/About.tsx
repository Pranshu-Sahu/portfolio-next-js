import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { Reveal } from "./ui/Reveal";

export const About = () => {
    const items = [
        { quote: "Next.js", name: "Framework", title: "Expert" },
        { quote: "React.js", name: "Library", title: "Expert" },
        { quote: "Tailwind CSS", name: "Styling", title: "Expert" },
        { quote: "TypeScript", name: "Language", title: "Expert" },
        { quote: "Shadcn UI", name: "Components", title: "Advanced" },
        { quote: "Mongoose", name: "Database", title: "Intermediate" },
    ];
    return (
        <section id="about" className="py-20 relative">
             <Reveal>
             <h1 className="heading text-white text-center mb-10 text-4xl font-bold">
                My <span className="text-purple-400">Tech Stack</span>
             </h1>
             <div className="h-[50vh] flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards items={items} direction="right" speed="slow" />
             </div>
             </Reveal>
        </section>
    );
};
