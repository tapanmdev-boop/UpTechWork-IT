"use client";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Get in touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Let's build something
              <span className="block gradient-text">remarkable together</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Tell us about your project. We'll get back to you within 24 hours with a tailored
              proposal — no generic pitches, no pushy sales.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "hello@uptechwork.io" },
                { icon: Phone, label: "+1 (555) 012-3456" },
                { icon: MapPin, label: "San Francisco · London · Singapore" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-400 text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-slate-400 text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Service needed
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option>Web Development</option>
                    <option>Cloud & DevOps</option>
                    <option>Mobile Apps</option>
                    <option>Cybersecurity</option>
                    <option>Data & Analytics</option>
                    <option>IT Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Project details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white animated-gradient hover:opacity-90 transition-opacity shadow-lg shadow-indigo-900/30"
                >
                  Send message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
