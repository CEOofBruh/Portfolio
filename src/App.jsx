import React, { useState } from 'react';
import { personalInfo, skillsData, projectsData, experienceData } from './data/portfolioData';
import Contact from './Contact';

export default function App() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans scroll-smooth">
      {/* Header / Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0F17]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg text-emerald-400 tracking-tight">Joshua Codorniz</span>
          <div className="flex gap-6 text-sm text-slate-300 font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-6 max-w-3xl">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Available for New Projects
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Building High-Performing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Web Platforms & Systems</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            {personalInfo.summary}
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 text-sm">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium border border-slate-800 transition-all text-sm">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-slate-400">Applications and institutional platforms built or engineered by me.</p>
          </div>
          <div className="flex bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {['all', 'built', 'managed'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${filter === cat ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-slate-900/40 rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-all group">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">{project.type}</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{project.shortDesc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">{t}</span>
                ))}
              </div>
              <a href={project.url} target="_blank" rel="noreferrer" className="text-xs font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1 pt-2">
                Visit Site →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
        <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-emerald-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-200 text-sm border border-slate-700/50">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
        <h2 className="text-3xl font-bold text-white mb-8">Work History</h2>
        <div className="space-y-6">
          {experienceData.map((job, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl space-y-2 hover:border-slate-700/80 transition-colors">
              <span className="text-xs font-semibold text-emerald-400">{job.period}</span>
              <h3 className="text-xl font-bold text-white">{job.role}</h3>
              <p className="text-slate-400 text-sm font-medium">{job.company} — {job.location}</p>
              <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 pt-2">
                {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Joshua Isaiah Codorniz. Built with React, Vite & Tailwind CSS.</p>
      </footer>
    </div>
  );
}