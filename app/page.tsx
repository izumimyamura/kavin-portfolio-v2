"use client";
import dynamic from "next/dynamic";
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
    <main className="relative min-h-screen bg-[#1a1a1a] overflow-x-hidden">
      {/* Hero / Lanyard Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center">
          <h1 className="text-white text-6xl font-bold tracking-tight">THE CAT GUY</h1>
        </div>
        <Lanyard />
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        {skills.map((section) => (
          <div key={section.part} className="mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
              {section.part.includes("1") ? "Part 01" : "Part 02"}
            </p>
            <h2 className="text-white text-3xl font-semibold mb-10 border-b border-neutral-700 pb-4">
              {section.part.replace("Part 1: ", "").replace("Part 2: ", "")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-neutral-800/60 border border-neutral-700 rounded-2xl p-6 hover:border-neutral-500 transition-colors duration-300"
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

        {/* Summary Grid */}
        <div className="mt-4 border border-neutral-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-neutral-800/80 text-xs font-semibold uppercase tracking-wider text-neutral-500 px-6 py-3 border-b border-neutral-700">
            <span>Skill Set</span>
            <span>Key Tools</span>
            <span>Core Value</span>
          </div>
          {[
            { set: "Motion", tools: "Resolve, AE, Blender", value: "Visual Perfection & 3D Depth" },
            { set: "Engineering", tools: "Python, Java, MySQL", value: "Scalable Logic & Data Integrity" },
          ].map((row, i) => (
            <div
              key={row.set}
              className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-neutral-800/40" : "bg-neutral-800/20"}`}
            >
              <span className="text-white font-medium">{row.set}</span>
              <span className="text-neutral-400">{row.tools}</span>
              <span className="text-neutral-300">{row.value}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
