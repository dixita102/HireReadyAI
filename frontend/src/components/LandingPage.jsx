import { FaCheckCircle } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-white">

      {/* ================= NAVBAR ================= */}
      <header className="flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-sm w-full sticky top-0 z-20">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl tracking-tight font-bold text-gray-900">
          HireReady<span className="text-purple-600">AI</span>
        </h1>

        {/* Desktop Login / Signup */}
        <div className="hidden md:flex gap-4 whitespace-nowrap items-center">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 border border-purple-600 text-purple-600 rounded-xl transition hover:bg-purple-100"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 bg-purple-600 text-white rounded-xl transition hover:bg-purple-700 shadow"
          >
            Signup
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </header>

      {/* ================= MOBILE NAV ================= */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-white shadow animate-fadeDown">
          <button
            onClick={() => navigate("/login")}
            className="w-40 px-4 py-2 border border-purple-600 text-purple-600 rounded-xl hover:bg-purple-100"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="w-40 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
          >
            Signup
          </button>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="relative px-6 md:px-16 py-20 md:py-32">
        <div className="absolute inset-0 w-[600px] h-[600px] bg-purple-200 opacity-40 blur-[150px] -z-10"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your Career, <span className="text-purple-600">Supercharged</span> with AI
            </h2>

            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Job-ready resumes and portfolio polish in minutes, not hours.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 text-lg">
              <li>🚀 ATS-Optimized Output</li>
              <li>🎯 Targeted Job Alignment</li>
              <li>🤖 Smart Resume Suggestions</li>
              <li>📊 Real-Time Scoring</li>
            </ul>

            <div className="mt-10 flex gap-6">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition shadow-md">
                Get Started
              </button>
              <button className="px-8 py-3 text-purple-600 border border-purple-600 rounded-xl hover:bg-purple-100">
                🎥 Watch Demo
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 animate-float">
            <div className="bg-white shadow-lg p-6 rounded-2xl w-52 text-center hover:scale-105 transition">
              <p className="font-semibold text-purple-600">Resume Score</p>
              <h1 className="text-4xl font-bold mt-2">88%</h1>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-2xl w-52 text-center hover:scale-105 transition">
              <p className="font-semibold text-purple-600">Completion</p>
              <h1 className="text-4xl font-bold mt-2">76%</h1>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 md:px-16 py-20 md:py-28 bg-gradient-to-b from-purple-50 to-white">
        <h2 className="text-center text-4xl font-bold">
          Build a <span className="text-purple-600">Beautiful Resume</span>
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-xl mx-auto text-lg">
          No confusing editors. No formatting stress. Just clean, professional output.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[ 
              { label: "AI Writing Assistance", bg: "bg-pink-100" },
              { label: "Secure Cloud Storage", bg: "bg-green-100" },
              { label: "Live Resume Score Updates", bg: "bg-orange-100" }
            ].map((item, i) => (
              <div key={i} className={`${item.bg} p-5 rounded-2xl border hover:shadow-lg transition`}>
                <h4 className="font-semibold text-gray-900">{item.label}</h4>
                <p className="text-gray-600 text-sm">Fast, accurate and tailored suggestions.</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-200 w-full h-64 rounded-2xl flex items-center justify-center border shadow-inner">
            <span className="text-gray-500">Coming Soon Preview</span>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="px-6 md:px-16 py-20 md:py-28">
        <h2 className="text-center text-4xl font-bold">
          Transparent <span className="text-purple-600">Pricing</span>
        </h2>

        <p className="text-center text-gray-600 mt-3 text-lg">
          Start for free. Upgrade only when you're ready.
        </p>

        <div className="mt-14 flex flex-col md:flex-row gap-12 justify-center">
          
          {/* Free Card */}
          <div className="bg-green-50 w-80 p-8 rounded-2xl border shadow hover:scale-[1.02] transition">
            <h3 className="text-2xl font-bold text-gray-900">Free</h3>
            <p className="text-gray-700 mt-2">₹0 / forever</p>
            <ul className="mt-6 space-y-3 text-gray-800">
              <li><FcCheckmark /> Basic Templates</li>
              <li><FcCheckmark /> AI Summary</li>
              <li><FcCheckmark /> PDF Export</li>
            </ul>
            <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full transition">
              Start Free
            </button>
          </div>

          {/* Pro Card */}
          <div className="bg-orange-50 w-80 p-8 rounded-2xl border shadow relative hover:scale-[1.03] transition">
            <span className="absolute top-3 right-3 bg-purple-100 px-3 py-1 text-xs rounded-xl font-semibold text-purple-700 shadow">
              Best Value
            </span>

            <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
            <p className="text-gray-700 mt-2">₹59 / month</p>

            <ul className="mt-6 space-y-3 text-gray-800">
              <li><FaCheckCircle className="inline text-purple-600" /> Premium Templates</li>
              <li><FaCheckCircle className="inline text-purple-600" /> Unlimited Downloads</li>
              <li><FaCheckCircle className="inline text-purple-600" /> Full AI Tools</li>
            </ul>

            <button className="mt-10 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg w-full transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-r from-purple-300 to-purple-100 py-14 px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-10 text-gray-800 text-sm">
          <div>
            <h3 className="font-semibold text-lg mb-3">HireReadyAI</h3>
            <p className="text-gray-600">
              Helping you get hired faster with smart resume automation.
            </p>
          </div>

          {[ "Product", "Resources", "Company" ].map((section) => (
            <div key={section}>
              <h4 className="font-semibold mb-3">{section}</h4>
              <p>Home</p>
              <p>Pricing</p>
              <p>Support</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-700">
          © {new Date().getFullYear()} HireReadyAI. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
