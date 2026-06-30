"use client";

export default function Footer() {
  return (
    <footer className="bg-[#09090B] text-white py-20 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            HEISENBERG<span className="opacity-40">STUDIO</span>
          </h2>
          <p className="text-neutral-500 text-sm">© 2026 Heisenberg Studio. All rights reserved.</p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div>
            <h3 className="font-semibold mb-6">Pages</h3>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#hero" className="hover:text-white transition">Home</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="https://izumimyamura.github.io/thecatguy.github.io/#showreel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Socials</h3>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>

          {/* QR Code Section */}
          <div>
            <h3 className="font-semibold mb-6">Connect</h3>
            <div className="bg-white p-2 rounded-xl w-32 h-32">
              <img src="/qr-code.png" alt="Instagram QR" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
