"use client";
import React from "react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import('./components/lanyard'), { ssr: false });

export default function Home() {
  const skills = [
    { name: "DaVinci Resolve", cat: "Video Editing", desc: "Industry-standard color grading and non-linear editing for cinematic storytelling." },
    { name: "Adobe Premiere Pro", cat: "Video Editing", desc: "Precision editing workflows for high-end production and seamless integration." },
    { name: "Apple Motion", cat: "Motion Graphics", desc: "Real-time motion design integrated perfectly with the Apple ecosystem." },
    { name: "After Effects", cat: "Motion Graphics", desc: "Advanced visual effects and complex motion compositions for high-impact media." },
    { name: "Full Stack Development", cat: "Programming", desc: "Proficient in C, C++, Java, Python, HTML/CSS, JS, and MySQL for robust backend/frontend systems." }
  ];

  return (
    <main className="relative min-h-screen">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-8xl font-semibold tracking-tighter text-black mb-4">Kavin.</h1>
        <p className="text-xl text-gray-500">Creative Technologist & Editor</p>
        <Lanyard />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-semibold tracking-tight mb-16">Expertise.</h2>
        <div className="space-y-24">
          {skills.map((skill, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start border-t border-black/10 pt-12">
              <div>
                <span className="text-sm font-bold tracking-widest uppercase text-gray-400">{skill.cat}</span>
                <h3 className="text-3xl font-medium mt-2">{skill.name}</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
