import { Zap } from "lucide-react";

const cols = [
  {
    title: "Services",
    links: ["Web Development", "Cloud & DevOps", "Mobile Apps", "Cybersecurity", "Data & Analytics", "IT Consulting"],
  },
  {
    title: "Company",
    links: ["About us", "Case studies", "Blog", "Careers", "Press kit"],
  },
  {
    title: "Legal",
    links: ["Privacy policy", "Terms of service", "Cookie policy", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg animated-gradient flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                UpTech<span className="gradient-text">Work</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Premium IT services for companies that refuse to settle. Strategy, engineering, and
              scale — all under one roof.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "gh"].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 UpTechWork IT. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Crafted with precision in San Francisco.
          </p>
        </div>
      </div>
    </footer>
  );
}
