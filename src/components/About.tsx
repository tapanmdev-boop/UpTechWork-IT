import { Award, Users, Globe, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Award, title: "Award-winning", desc: "Recognized by Clutch, Deloitte Fast 500, and Forbes Tech." },
  { icon: Users, title: "50+ experts", desc: "Specialized engineers, designers, and strategists on your side." },
  { icon: Globe, title: "Global reach", desc: "Serving clients across North America, Europe, and Asia-Pacific." },
  { icon: TrendingUp, title: "Growth-first", desc: "Every decision mapped to measurable business outcomes." },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
              {/* Placeholder visual */}
              <div className="absolute inset-0 animated-gradient opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-7xl font-black mb-2">10+</div>
                  <div className="text-xl font-semibold opacity-90">Years of excellence</div>
                </div>
              </div>
              {/* Corner accent cards */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span className="font-semibold">Client satisfaction</span>
                    <span className="font-bold">99%</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/20">
                    <div className="h-full w-[99%] rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-lg font-bold">
                ✓
              </div>
              <div>
                <div className="text-xs text-slate-400">ISO Certified</div>
                <div className="text-sm font-bold text-slate-800">27001:2022</div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-4">
              About UpTechWork
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Technology partners, not just{" "}
              <span className="gradient-text">vendors</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Founded in 2014, UpTechWork has grown from a boutique dev shop into a full-service IT
              powerhouse. We embed ourselves in your team, understand your goals deeply, and deliver
              solutions that outlast trends.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center mb-3">
                      <Icon size={17} className="text-indigo-600" />
                    </div>
                    <div className="text-sm font-bold text-slate-800 mb-1">{h.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{h.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
