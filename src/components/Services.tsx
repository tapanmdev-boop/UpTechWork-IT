import { Code2, Cloud, Shield, Smartphone, BarChart3, Settings } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "High-performance web applications built with modern frameworks — React, Next.js, and Node.js — designed to convert and scale.",
    color: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "End-to-end cloud architecture on AWS, GCP, and Azure with CI/CD pipelines, container orchestration, and 99.9% uptime SLAs.",
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform iOS & Android apps with React Native. Seamless UX, offline-first architecture, and App Store optimization.",
    color: "from-violet-500 to-pink-500",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, penetration testing, compliance frameworks (SOC2, ISO 27001), and ongoing threat monitoring.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Transform raw data into strategic insights. We build data pipelines, BI dashboards, and ML models that drive decisions.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description:
      "Strategic technology roadmaps, digital transformation advisory, and fractional CTO services tailored to your growth stage.",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-4">
            What we do
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Services built for{" "}
            <span className="gradient-text">ambitious teams</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We cover the full technology stack so you can focus on building your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="card-hover group p-8 rounded-3xl border border-slate-100 bg-white cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center mb-6`}
                >
                  <Icon size={22} className={s.iconColor} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">{s.description}</p>
                <div className="mt-6 flex items-center gap-1 text-indigo-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <span className="ml-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
