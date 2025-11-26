import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-lg font-bold">
              HR
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">
                HireReady<span className="text-indigo-400">AI</span>
              </p>
              <p className="text-xs text-slate-400">
                Interview Prep, Reimagined
              </p>
            </div>
          </div>

          {/* Nav links (desktop) */}
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-indigo-400">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-indigo-400">
              How it works
            </a>
            <a href="#benefits" className="hover:text-indigo-400">
              For Students
            </a>
            <a href="#faq" className="hover:text-indigo-400">
              FAQ
            </a>
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-700 px-4 py-1.5 text-sm text-slate-200 hover:border-indigo-400 hover:text-indigo-300 md:inline-flex">
              Login
            </button>
            <button className="rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        {/* …rest of the sections (hero, features, how-it-works, benefits, footer)
            can be pasted here exactly from the big code I gave you earlier */}
      </main>
    </div>
  );
};

export default LandingPage;

