"use client";
import React from "react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import('./components/lanyard'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-12">
        <Lanyard />
        <div className="z-20 max-w-xl">
          <h1 className="text-8xl font-bold tracking-tighter">THE CAT GUY</h1>
          <p className="text-2xl text-zinc-500 mt-4">Editor & Motion Designer</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-12 py-32 space-y-24">
        <div>
          <h2 className="text-4xl font-bold mb-8 text-zinc-300">Cinematic Post-Production</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            I craft high-impact visuals using <span className="text-white font-medium">DaVinci Resolve</span>, 
            <span className="text-white font-medium"> Adobe Premiere Pro & After Effects</span>, 
            <span className="text-white font-medium"> CapCut</span>, and advanced motion graphics via 
            <span className="text-white font-medium"> Apple Motion & Blender</span>.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8 text-zinc-300">Technical Engineering</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            I bridge the gap between creative and functional code. Proficient in 
            <span className="text-white font-medium"> C, C++, Java, and Python</span> for logic, 
            and <span className="text-white font-medium"> HTML, CSS, JavaScript, and MySQL</span> for 
            web infrastructure. Precision is the foundation of my workflow.
          </p>
        </div>
      </section>
    </main>
  );
}
