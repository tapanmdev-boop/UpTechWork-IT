const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web App · Cloud",
    description: "Real-time trading platform processing $50M+ daily transactions with sub-100ms latency.",
    tags: ["Next.js", "AWS", "PostgreSQL"],
    gradient: "from-indigo-600 to-violet-600",
    span: "lg:col-span-2",
  },
  {
    title: "HealthCare Portal",
    category: "Mobile · Web",
    description: "Patient management system serving 500k+ users across 12 hospitals.",
    tags: ["React Native", "Node.js"],
    gradient: "from-emerald-500 to-teal-600",
    span: "",
  },
  {
    title: "E-Commerce Scale-Up",
    category: "Platform · DevOps",
    description: "Migrated legacy monolith to microservices, reducing infrastructure costs by 60%.",
    tags: ["Kubernetes", "GCP", "Redis"],
    gradient: "from-orange-500 to-rose-500",
    span: "",
  },
  {
    title: "AI Analytics Suite",
    category: "Data · ML",
    description: "Predictive analytics platform generating $4M in annual savings for logistics firm.",
    tags: ["Python", "TensorFlow", "Tableau"],
    gradient: "from-cyan-500 to-blue-600",
    span: "lg:col-span-2",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Case Studies
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Work we're{" "}
              <span className="gradient-text">proud of</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full text-sm font-semibold border border-white/10 text-slate-300 hover:border-indigo-500 hover:text-white transition-all"
          >
            View all projects →
          </a>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${p.span}`}
            >
              {/* Gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
              />
              {/* Noise overlay */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
                }}
              />
              <div className="relative z-10 p-8 h-full min-h-[280px] flex flex-col justify-end">
                <div className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
                  {p.category}
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">{p.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
