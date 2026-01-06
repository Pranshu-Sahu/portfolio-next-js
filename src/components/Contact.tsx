"use client";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { MagicButton } from "./ui/MagicButton";
import { Navigation } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export const Contact = () => {
    return (
        <section id="contact" className="py-20 w-full relative overflow-hidden">
             <Reveal>
             <div className="flex flex-col lg:flex-row items-start justify-between gap-10 z-10 relative container mx-auto px-5">
                 <div className="flex flex-col gap-6 max-w-lg">
                      <h1 className="heading text-4xl font-bold text-white leading-tight">
                         Ready to take <span className="text-purple-400">your</span> digital presence to the next level?
                      </h1>
                      <p className="text-white-200 md:mt-10 my-5 text-center lg:text-left text-lg text-gray-400">
                          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                      </p>
                      
                      <div className="flex gap-4 items-center flex-wrap justify-center lg:justify-start">
                          <a href="https://github.com/Pranshu-Sahu" target="_blank" className="p-4 border border-white/[0.2] rounded-lg bg-black-100/50 hover:bg-purple-900/20 cursor-pointer transition">
                              <Github className="text-white" />
                          </a>
                          <a href="https://www.linkedin.com/in/pranshusahu862/" target="_blank" className="p-4 border border-white/[0.2] rounded-lg bg-black-100/50 hover:bg-purple-900/20 cursor-pointer transition">
                              <Linkedin className="text-white" />
                          </a>
                           <a href="https://x.com/sahupranshu637" target="_blank" className="p-4 border border-white/[0.2] rounded-lg bg-black-100/50 hover:bg-purple-900/20 cursor-pointer transition">
                              <Twitter className="text-white" />
                          </a>
                           <a href="mailto:sahupranshu637@gmail.com" className="p-4 border border-white/[0.2] rounded-lg bg-black-100/50 hover:bg-purple-900/20 cursor-pointer transition">
                              <Mail className="text-white" />
                          </a>
                      </div>
                 </div>

                 <div className="w-full max-w-md bg-black-100 border border-white/[0.1] rounded-2xl p-8 shadow-xl">
                      <form className="flex flex-col gap-6">
                          <h3 className="text-2xl font-bold text-white mb-2">Contact Me</h3>
                          <div className="flex flex-col gap-2">
                              <label className="text-sm font-medium text-gray-300">Name</label>
                              <input type="text" placeholder="Your name" className="bg-[#1C1F2E] border border-white/[0.1] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500" />
                          </div>
                           <div className="flex flex-col gap-2">
                              <label className="text-sm font-medium text-gray-300">Email</label>
                              <input type="email" placeholder="Your email" className="bg-[#1C1F2E] border border-white/[0.1] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500" />
                          </div>
                           <div className="flex flex-col gap-2">
                              <label className="text-sm font-medium text-gray-300">Message</label>
                              <textarea rows={5} placeholder="Your message" className="bg-[#1C1F2E] border border-white/[0.1] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500" />
                          </div>
                          
                          <button type="submit" className="bg-purple-600 text-white rounded-lg p-3 font-bold mt-2 hover:bg-purple-700 transition w-full shadow-lg shadow-purple-900/20" onClick={(e) => { e.preventDefault(); console.log("Form Submitted"); }}>
                              Send Message
                          </button>
                      </form>
                 </div>
             </div>
             </Reveal>
        </section>
    );
};
