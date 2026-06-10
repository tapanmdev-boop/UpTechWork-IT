const testimonials = [
  {
    quote:
      "UpTechWork completely transformed our infrastructure. We went from 8-hour deployments to 12-minute CI/CD pipelines. The ROI within 6 months was exceptional.",
    author: "Sarah Chen",
    role: "CTO, Meridian Finance",
    avatar: "SC",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    quote:
      "They don't just write code — they ask the right questions. Our platform scaled from 10k to 2M users without a single major outage. Incredible team.",
    author: "James Okonkwo",
    role: "CEO, Paystack Africa",
    avatar: "JO",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "Best engineering partner we've ever worked with. Delivered a full HIPAA-compliant patient portal in 14 weeks. Communication was flawless throughout.",
    author: "Dr. Priya Sharma",
    role: "VP Product, HealthBridge",
    avatar: "PS",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    quote:
      "Our e-commerce revenue grew 340% after UpTechWork rebuilt our platform. They understood business impact, not just technical requirements.",
    author: "Marcus Lindqvist",
    role: "Founder, NordShop",
    avatar: "ML",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Client stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by{" "}
            <span className="gradient-text">industry leaders</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="group bg-white rounded-3xl p-8 border border-slate-100 card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-slate-700 text-base leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
