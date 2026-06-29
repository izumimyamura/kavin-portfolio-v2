"use client";
import React from "react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import('./components/lanyard'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Lanyard />

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center px-12 pointer-events-none">
        <h1 className="text-8xl font-bold tracking-tighter">THE CAT GUY</h1>
        <p className="text-2xl text-zinc-500 mt-4">Editor & Motion Designer</p>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-12 pb-32 space-y-32">
        
        {/* Editing Section */}
        <section>
          <h2 className="text-5xl font-bold mb-16 text-zinc-300">Cinematic Post-Production</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard title="DaVinci Resolve" desc="Industry-leading color grading and node-based audio/video post-production." />
            <SkillCard title="Adobe Suite (PR & AE)" desc="Standard for professional cutting, motion graphics, and visual effects compositing." />
            <SkillCard title="CapCut" desc="AI-optimized workflow for high-velocity social media content." />
            <SkillCard title="Apple Motion & Blender" desc="Advanced 3D modeling and performance-optimized motion assets." />
          </div>
        </section>

        {/* Development Section */}
        <section>
          <h2 className="text-5xl font-bold mb-16 text-zinc-300">Technical Engineering</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard title="C, C++, Java & Python" desc="High-performance backend logic, memory management, and rapid algorithmic prototyping." />
            <SkillCard title="Web Infrastructure" desc="Full-stack architecture using HTML, CSS, JavaScript, and MySQL for scalable data-driven apps." />
          </div>
        </section>
      </div>
    </main>
  );
}

function SkillCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-zinc-500 transition-colors">
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}
