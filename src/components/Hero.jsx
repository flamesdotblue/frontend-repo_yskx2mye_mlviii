import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Globe, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient and vignette overlay that doesn't block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-purple-300" />
          <span className="text-white/80">MERN • Agentic AI • FinTech</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Building AI-driven products and scalable web experiences
        </h1>
        <p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">
          I’m a MERN stack developer diving deep into agentic-AI. Strong investing acumen, acting CTO across 3 companies, and co-building the Qosmic agency — with many more plans in motion.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Contact Me
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View Projects
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/15 bg-white/5 p-3 transition hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/15 bg-white/5 p-3 transition hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://yourdomain.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Website"
            className="rounded-full border border-white/15 bg-white/5 p-3 transition hover:bg-white/10"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
