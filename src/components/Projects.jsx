import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Agentic AI Ops Assistant',
    desc: 'Autonomous triage and remediation for production incidents with human-in-the-loop.',
    tags: ['AI Agents', 'Node', 'FastAPI', 'LLM'],
    link: '#',
  },
  {
    title: 'FinTech Insights Dashboard',
    desc: 'Real-time portfolio analytics, risk overlays, and macro alerts for active investors.',
    tags: ['React', 'MongoDB', 'Charts'],
    link: '#',
  },
  {
    title: 'Qosmic Launch Platform',
    desc: 'Landing pages, waitlists, and growth automations for AI-first products.',
    tags: ['Next.js', 'Automation', 'Growth'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-black to-[#0B0B0F] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Work</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              A snapshot of things I’ve been building across AI, web platforms, and finance.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-white/10 p-3 text-orange-200">
                  <Rocket className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a href={p.link} className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white">
                  Explore <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
