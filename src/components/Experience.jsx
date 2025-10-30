import React from 'react';
import { Briefcase, Building2, Code, LineChart } from 'lucide-react';

const items = [
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: 'Chief Technology Officer',
    desc: 'Operating as CTO across 3 companies, driving architecture, delivery, and high-performance teams.',
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: 'MERN Stack Expert',
    desc: 'Production-grade React, Node.js, Express, and MongoDB applications with cloud-native pipelines.',
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: 'Qosmic Agency Co-builder',
    desc: 'Launching an agency focused on AI-first products, growth engineering, and technical partnerships.',
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: 'Investor & Operator',
    desc: 'Applying market insights and risk frameworks to guide product bets and long-term strategy.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience & Focus</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Blending hands-on engineering with executive leadership to ship robust, scalable systems.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/10 p-3 text-purple-200">
                  {it.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{it.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
