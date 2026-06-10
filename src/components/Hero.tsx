"use client";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const badges = ["Trusted by 200+ companies", "10+ years of experience", "99% client satisfaction"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Now accepting new clients for Q3 2026
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            We build digital
            <span className="block gradient-text">solutions that scale</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From strategy to deployment, UpTechWork delivers premium IT services — web platforms,
            cloud infrastructure, and custom software that drives real business growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white animated-gradient hover:opacity-90 transition-opacity shadow-xl shadow-indigo-900/40"
            >
              Start your project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all"
            >
              <Play size={16} className="fill-current" />
              View our work
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2 text-slate-400 text-sm">
                <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "200+", label: "Projects delivered" },
            { value: "98%", label: "On-time delivery" },
            { value: "50+", label: "Team experts" },
            { value: "$2B+", label: "Client revenue generated" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm text-center"
            >
              <div className="text-3xl lg:text-4xl font-extrabold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
