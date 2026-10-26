import React, { useState } from 'react';
import { Mail, ExternalLink, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from './data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Work Together
        </h2>
        <p className="text-slate-400 text-base leading-relaxed">
          Whether you need a custom WordPress platform, GoHighLevel automation funnel, or a fast React application, feel free to reach out.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-sm"
          >
            <Mail className="w-4 h-4" /> Send Email
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium border border-slate-800 transition-all flex items-center justify-center gap-2 text-sm"
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Email Copied!
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-slate-400" /> Copy Email Address
              </>
            )}
          </button>
        </div>

        <div className="pt-6 flex justify-center gap-6 text-slate-400 text-sm font-medium">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            LinkedIn <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={personalInfo.behance}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            Behance <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}