"use client";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
const Lanyard = dynamic(() => import('./components/lanyard'), { ssr: false });

const skills = [
  {
    part: "Cinematic Post-Production & Motion Design",
    tools: [
      {
        name: "DaVinci Resolve",
        features: "Industry-standard color grading (DaVinci Neural Engine), professional NLE, and Fairlight audio post-production.",
        pros: "The best color science in the industry. All-in-one suite for grading, editing, and sound mixing.",
        use: "Final color finishing and high-end cinematic projects where visual fidelity is the priority.",
      },
      {
        name: "Adobe Premiere Pro & After Effects",
        features: "Dynamic Link integration, industry-standard timeline, and massive plugin ecosystem.",
        pros: "Unmatched workflow speed for broadcasting and social content. After Effects provides precision for motion graphics and visual compositing.",
        use: "Complex multi-layered edits and VFX-heavy motion sequences.",
      },
      {
        name: "CapCut",
        features: "AI-driven effects, auto-captions, and instant trend-matching assets.",
        pros: "Extremely high velocity. Rapid-fire, mobile-first content delivered in minutes.",
        use: "Viral storytelling and short-form social media campaigns.",
      },
      {
        name: "Apple Motion & Blender",
        features: "Apple Motion offers deep macOS integration; Blender provides 3D modeling, sculpting, and physics simulations.",
        pros: "Motion is optimized for Mac performance; Blender is open-source with professional-grade 3D pipelines.",
        use: "Bespoke 3D assets and motion graphic elements beyond standard template libraries.",
      },
    ],
  },
  {
    part: "Technical Engineering & Programming",
    tools: [
      {
        name: "Logic & Algorithms",
        sub: "C, C++, Java, Python",
        features: "Memory management (C/C++), Object-Oriented structure (Java), rapid prototyping (Python).",
        pros: "C/C++ provides lowest-level system access; Python delivers readable, powerful syntax for automation and AI.",
        use: "C++ for performance-critical tasks; Python for scripting workflow automations like auto-batching video exports.",
      },
      {
        name: "Web Infrastructure",
        sub: "HTML, CSS, JavaScript, MySQL",
        features: "Semantic structure (HTML), responsive styling (CSS), interactive logic (JS), relational data management (MySQL).",
        pros: "The universal language of the web. Enables reactive, data-driven interfaces that are performant and scalable.",
        use: "Building portfolios and web-based tools with total control over performance, accessibility, and design animations.",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#09090B]">
      {/* Improved Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-white/5 blur-[200px]" />
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] bg-blue-500/5 rounded-full blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] bg-purple-500/5 rounded-full blur-[180px]" />
      </div>

      <Navbar />

      {/* Improved Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <p className="uppercase tracking-[0.35em] text-neutral-500 text-xs mb-5">
            VIDEO EDITOR • MOTION DESIGNER
          </p>
          <h1 className="text-7xl md:text-8xl font-semibold tracking-[-0.05em] leading-none">
            THE CAT GUY
          </h1>
          <p className="max-w-xl mt-8 text-neutral-400 text-lg leading-relaxed text-center">
            Creating cinematic edits, motion graphics and premium visual experiences
            for brands, creators and businesses.
          </p>
          <div className="mt-10 animate-bounce">↓</div>
        </div>
        <Lanyard />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#09090B]" />
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        {skills.map((section) => (
          <div key={section.part} className="mb-20">
            <p className="uppercase tracking-[0.3em] text-neutral-500 text-xs mb-3">
              {section.part}
            </p>
            <h2 className="text-4xl font-semibold mb-12">
              {section.part}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="mb-4">
                    <h3 className="text-white text-lg font-semibold">{tool.name}</h3>
                    {"sub" in tool && tool.sub && (
                      <p className="text-neutral-400 text-sm mt-0.5">{tool.sub}</p>
                    )}
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-neutral-500 uppercase text-xs tracking-wider font-medium">Features</span>
                      <p className="text-neutral-300 mt-1 leading-relaxed">{tool.features}</p>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase text-xs tracking-wider font-medium">Pros</span>
                      <p className="text-neutral-300 mt-1 leading-relaxed">{tool.pros}</p>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase text-xs tracking-wider font-medium">How I use it</span>
                      <p className="text-neutral-300 mt-1 leading-relaxed">{tool.use}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
