"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "./SpotlightCard";
import { Mail, Copy, Check, Send, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactBento() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { dict, language } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Window Box */}
        <SpotlightCard glowColor="violet" className="p-0 overflow-hidden bg-[#0c0e17]/90">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#0f111a]/90">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-zinc-400">
                contact@steven.dev
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ready for input</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 sm:p-10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                <Terminal className="w-3.5 h-3.5" />
                <span>{dict.contact.sectionBadge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                &gt; {dict.contact.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300">
                  {language === "es" ? "de Alto Impacto" : "Together"}
                </span>
              </h2>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {dict.contact.status}
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs sm:text-sm font-medium transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>$ send --message</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-200 hover:text-white font-mono text-xs sm:text-sm transition-all hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">{dict.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>$ copy --email</span>
                  </>
                )}
              </button>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-300 hover:text-white transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Interactive Terminal Message Form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="font-mono text-[11px] text-zinc-500 pb-2 border-b border-white/[0.05] flex items-center justify-between">
                <span>quick_message.sh</span>
                <span>ESC to cancel</span>
              </div>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs text-center flex flex-col items-center gap-2">
                  <Check className="w-6 h-6 text-emerald-400 animate-bounce" />
                  <span className="font-semibold">{dict.contact.sentSuccess}</span>
                  <span className="text-zinc-400 text-[11px]">
                    {language === "es"
                      ? "Responderé a tu correo a la brevedad posible."
                      : "I will reply to your email promptly."}
                  </span>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        --from-name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={dict.contact.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        --reply-to
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={dict.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      --payload-body
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder={dict.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-mono text-xs font-medium border border-white/[0.1] hover:border-violet-500/40 transition-all"
                  >
                    <span>$ {dict.contact.sendButton}</span>
                    <Send className="w-3.5 h-3.5 text-violet-400" />
                  </button>
                </>
              )}
            </form>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
