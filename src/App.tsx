import { AnimatePresence, motion } from 'motion/react';
import {
  Shield,
  Zap,
  Lock,
  ChevronDown,
  CheckCircle2,
  ShieldOff,
  ArrowRight,
  Star,
  Download,
  ShieldCheck,
  EyeOff,
  Cpu,
  MonitorSmartphone,
  Server,
  Activity,
  Menu,
  X as CloseIcon
} from 'lucide-react';
import { useState } from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Compare', href: '#compare' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Support', href: '#support' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00FF41]/30 selection:text-[#00FF41] relative flex flex-col overflow-hidden">
      {/* Dynamic light sources from theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00FF41] opacity-[0.03] rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-[0.03] rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00FF41] rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-[#020617] rounded-full"></div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tighter uppercase">Borton</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l border-slate-800 pl-6">
              <a href="#login" className="text-xs font-bold uppercase tracking-widest hover:text-[#00FF41] text-white transition-colors">Client Login</a>
              <a href="#pricing" className="px-6 py-2 border border-slate-700 bg-transparent text-[#00FF41] rounded-full text-xs font-bold uppercase tracking-widest hover:border-[#00FF41] hover:bg-[#00FF41]/10 transition-colors">
                Free Trial
              </a>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-white/10 bg-[#020617] overflow-hidden relative z-50"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                ))}
                <hr className="border-white/10" />
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="bg-[#00FF41] text-[#020617] text-center font-bold uppercase text-xs tracking-widest px-5 py-3 rounded-md">
                  Free Trial
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF41]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-[10px] font-bold text-[#00FF41] uppercase tracking-[0.2em] mb-8">
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3" />
                Meet the new Borton Engine v4.0
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter uppercase mb-8">
              Invisible Security.<br className="hidden md:block" />
              Fast by Design.
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg mx-auto font-medium leading-relaxed mb-10">
              Borton AI predicts threats in real-time without slowing down your workflow. Zero-lag protection for your digital frontier.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing" className="px-10 py-4 bg-[#00FF41] text-[#020617] rounded-md font-bold uppercase text-sm tracking-widest shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:scale-105 transition-all flex items-center justify-center gap-2">
                Download Free <Download className="w-5 h-5" />
              </a>
              <a href="#pricing" className="px-10 py-4 border border-slate-700 rounded-md font-bold uppercase text-sm tracking-widest hover:bg-slate-800 transition-all text-white flex items-center justify-center gap-2">
                See Plans
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest text-[#00FF41]/80">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 100% Detection Rate</div>
              <div className="flex items-center gap-2"><Cpu className="w-4 h-4" /> &lt;1% CPU Impact</div>
              <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> Zero-Knowledge Privacy</div>
            </div>
          </motion.div>
        </section>

        {/* 2. SOCIAL PROOF */}
        <section className="py-16 border-y border-white/5 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">Trusted by industry leaders and 10,000+ businesses</p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Abstract company logos using basic SVGs for visual representation */}
              <div className="flex items-center gap-2 font-bold text-xl"><Activity className="w-6 h-6"/> Verta</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Server className="w-6 h-6"/> OmniCloud</div>
              <div className="flex items-center gap-2 font-bold text-xl"><MonitorSmartphone className="w-6 h-6"/> TechFlow</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Lock className="w-6 h-6"/> SecureNet</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Zap className="w-6 h-6"/> BoltSystems</div>
            </div>
          </div>
        </section>

        {/* 3. PROBLEM SECTION */}
        <section className="py-24 md:py-32 bg-[#020617] relative border-t border-slate-900">
          <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF41]/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase text-white">Legacy antivirus is broken.</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Traditional security software relies on outdated signatures, meaning they only catch threats they've seen before. Worse, they consume massive amounts of memory, constantly interrupt you with popups, and track your browsing data.
                </p>
                <ul className="space-y-4">
                  {[
                    "Bloated software drains your battery and CPU.",
                    "Reactive databases miss 40% of zero-day attacks.",
                    "Constant notifications and upselling."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CloseIcon className="w-6 h-6 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                className="relative h-[400px] w-full rounded-2xl bg-[#0C1220]/80 backdrop-blur-xl border border-slate-800/80 flex items-center justify-center p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-red-900/10 opacity-50"></div>
                <div className="bg-[#020617]/90 backdrop-blur border border-slate-700 p-6 rounded-xl shadow-2xl w-full max-w-sm relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-red-500">
                    <Activity className="animate-pulse" />
                    <span className="font-bold uppercase tracking-widest text-xs">System Overload</span>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full bg-slate-800 rounded-md h-2">
                       <motion.div initial={{width:0}} whileInView={{width:'85%'}} transition={{duration:2}} className="bg-red-500 h-2 rounded-md" />
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-500 uppercase">
                      <span>CPU Usage: 85%</span>
                      <span>LegacyAV.exe</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. SOLUTION (WHY BORTON) */}
        <section className="py-24 md:py-32 bg-[#020617] relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                className="relative h-[400px] w-full rounded-2xl bg-[#0C1220]/80 backdrop-blur-xl border-2 border-[#00FF41] flex items-center justify-center p-8 overflow-hidden order-2 md:order-1"
              >
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00FF41] opacity-[0.05] rounded-full blur-[80px] pointer-events-none" />
                <div className="bg-[#020617]/90 backdrop-blur border border-slate-700 p-6 rounded-xl shadow-[0_0_50px_rgba(0,255,65,0.1)] w-full max-w-sm relative z-10 transition-all hover:border-[#00FF41]/50">
                  <div className="flex items-center gap-3 mb-4 text-[#00FF41]">
                    <ShieldCheck />
                    <span className="font-bold uppercase tracking-widest text-xs">Borton Active Protection</span>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full bg-slate-800 rounded-md h-2">
                       <motion.div initial={{width:'100%'}} whileInView={{width:'4%'}} transition={{duration:2, ease: "circOut"}} className="bg-[#00FF41] h-2 rounded-md" />
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-500 uppercase">
                      <span>CPU Usage: 0.8%</span>
                      <span>borton_core</span>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-[#00FF41]/10 rounded border border-[#00FF41]/20 flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#00FF41]" />
                    <span className="text-[10px] font-bold text-[#00FF41] uppercase tracking-[0.2em]">System Secure</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase text-white">Designed to be invisible.</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  We rebuilt endpoint security from the kernel up. Borton uses an advanced neural network trained on millions of malicious behaviors, allowing it to predict and neutralize threats instantaneously — without needing virus definition updates.
                </p>
                <ul className="space-y-4">
                  {[
                    "Ultra-lightweight: Uses less than 1% CPU.",
                    "Heuristic AI instantly blocks unclassified zero-day threats.",
                    "No pop-ups, no scheduled scans to interrupt you."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-6 h-6 text-[#00FF41] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-24 bg-[#020617]" id="features">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter uppercase text-white">Protection in 3 simple steps</h2>
              <p className="text-slate-400">Security shouldn't require an IT degree. Borton operates silently so you can focus on what matters.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-[#00FF41]/30 to-transparent" />
              
              {[
                { icon: Download, title: "1. Download", desc: "Install our highly optimized 5MB package in under 10 seconds." },
                { icon: Cpu, title: "2. Analyze", desc: "The AI engine maps your system's normal behavior to rapidly spot anomalies." },
                { icon: ShieldCheck, title: "3. Forget", desc: "You're protected. Borton silently stops threats without notifying you." }
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="relative z-10 bg-[#0C1220]/80 backdrop-blur border border-slate-800 p-8 rounded-2xl text-center hover:border-[#00FF41]/30 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-[#020617] border border-slate-700 rounded-md flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,255,65,0.05)]">
                    <step.icon className="w-8 h-8 text-[#00FF41]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FEATURES */}
        <section className="py-24 bg-[#0C1220] border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FF41] opacity-[0.02] blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 opacity-[0.02] blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tighter uppercase text-white">Enterprise-grade capabilities</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Real-time AI Engine", desc: "Analyzes executable behaviors in microseconds, stepping in before encryption or damage occurs." },
                { icon: ShieldCheck, title: "Ransomware Rollback", desc: "Automatically backs up targeted files and restores them if a malicious process is detected." },
                { icon: EyeOff, title: "Absolute Privacy", desc: "We never upload your files. All behavioral analysis happens locally on your machine." },
                { icon: MonitorSmartphone, title: "Cross-Platform", desc: "Native agents tailored for Windows, macOS, and Linux to ensure seamless operation." },
                { icon: Lock, title: "Web Protection", desc: "Neutralizes phishing attempts and malicious scripts at the network level before rendering." },
                { icon: Server, title: "Fleet Management", desc: "Deploy Borton to thousands of enterprise endpoints with a single command line script." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-6 bg-[#020617]/50 border border-slate-800/80 rounded-2xl hover:bg-[#00FF41]/5 transition-colors">
                  <div className="w-10 h-10 shrink-0 bg-[#00FF41]/10 text-[#00FF41] rounded-sm flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{feature.title}</h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. COMPARISON */}
        <section className="py-24 bg-[#020617]" id="compare">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tighter uppercase text-white">How we stack up</h2>
            
            <div className="overflow-x-auto bg-[#0C1220]/80 backdrop-blur border border-slate-800 rounded-2xl p-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-slate-800 font-bold uppercase tracking-widest text-[#00FF41] text-xs w-1/3">Feature</th>
                    <th className="p-4 border-b border-[#00FF41]/30 text-white font-bold uppercase tracking-widest text-lg">Borton</th>
                    <th className="p-4 border-b border-slate-800 font-bold uppercase tracking-widest text-slate-500 text-xs text-right">Traditional AV</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {[
                    { label: "Zero-Day Protection", borton: "Heuristic AI", standard: "Signature-based" },
                    { label: "CPU Usage", borton: "< 1%", standard: "10-25%" },
                    { label: "Full Scan Time", borton: "Continuous", standard: "Hours" },
                    { label: "User Intrusions", borton: "Zero", standard: "Popups & Up-sells" },
                    { label: "Data Collection", borton: "None", standard: "Extensive" }
                  ].map((row, i) => (
                    <tr key={i} className="group border-b border-slate-800/50 hover:bg-[#00FF41]/5 transition-colors">
                      <td className="p-4 text-slate-300 font-bold uppercase tracking-wide text-xs">{row.label}</td>
                      <td className="p-4 text-[#00FF41] font-bold uppercase tracking-wide text-xs">{row.borton}</td>
                      <td className="p-4 text-slate-500 text-right font-medium">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. PRICING */}
        <section className="py-24 md:py-32 bg-[#020617] border-t border-slate-900" id="pricing">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter uppercase text-white">Predictable pricing</h2>
              <p className="text-slate-400 text-lg">Start for free, upgrade when you need advanced capabilities. Cancel anytime.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              {/* Basic */}
              <div className="bg-[#0C1220]/80 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Free</h3>
                <div className="mb-6"><span className="text-4xl font-bold">$0</span> <span className="text-slate-500 uppercase tracking-widest text-xs">/ forever</span></div>
                <p className="text-slate-400 mb-8 h-12 text-sm">Essential protection for secondary and light-use devices.</p>
                <a href="#download" className="block w-full py-3 px-6 text-center border border-slate-700 hover:bg-slate-800 rounded-md font-bold uppercase tracking-widest text-xs mb-8 transition-colors text-white">
                  Download Free
                </a>
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> On-demand scanning</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> Basic malware removal</li>
                  <li className="flex gap-3 text-slate-600"><CloseIcon className="w-5 h-5 shrink-0" /> Real-time active AI guard</li>
                  <li className="flex gap-3 text-slate-600"><CloseIcon className="w-5 h-5 shrink-0" /> Web & Phishing defense</li>
                </ul>
              </div>

              {/* Pro */}
              <div className="bg-[#0C1220]/80 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_50px_rgba(0,255,65,0.05)]">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00FF41] opacity-[0.05] rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block px-3 py-1 rounded-full bg-[#00FF41] border border-[#00FF41] text-[10px] font-bold text-[#020617] uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight text-[#00FF41]">Borton Pro</h3>
                <div className="mb-6"><span className="text-4xl font-bold text-white">$4.99</span> <span className="text-slate-500 uppercase tracking-widest text-xs">/ user / mo</span></div>
                <p className="text-slate-400 mb-8 h-12 text-sm">Complete, invisible protection utilizing our advanced AI neural engine.</p>
                <a href="#subscribe" className="block w-full py-3 px-6 text-center bg-[#00FF41] hover:bg-[#00FF41]/90 text-[#020617] rounded-md font-bold uppercase text-xs tracking-widest mb-8 transition-colors shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                  Start 14-Day Free Trial
                </a>
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> Everything in Free</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> Real-time AI threat detection</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> Ransomware rollback</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> Connect up to 5 devices</li>
                </ul>
              </div>

              {/* Enterprise */}
              <div className="bg-[#0C1220]/80 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Enterprise</h3>
                <div className="mb-6"><span className="text-4xl font-bold text-white">Custom</span></div>
                <p className="text-slate-400 mb-8 h-12 text-sm">Fleet deployment and compliance tools for medium to large organizations.</p>
                <a href="#contact" className="block w-full py-3 px-6 text-center border border-slate-700 hover:bg-slate-800 text-white rounded-md font-bold uppercase tracking-widest text-xs mb-8 transition-colors">
                  Contact Sales
                </a>
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> Admin Cloud Dashboard</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> Silent CLI deployment</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> Custom security policies</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0" /> Dedicated support engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. TESTIMONIALS */}
        <section className="py-24 bg-[#020617] border-t border-slate-900 relative">
          <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 text-center tracking-tighter uppercase text-white">Loved by users, feared by malware</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Sarah J.", role: "Freelance Designer", text: "I edit 4K video daily. With traditional AV, my machine crawled. Borton runs completely invisibly and caught a phishing attachment last week." },
                { name: "Marcus T.", role: "IT Director", text: "Deployed to 400 endpoints in one afternoon. The admin dashboard is pristine, and helpdesk tickets regarding slow computers dropped by 80%." },
                { name: "Elena R.", role: "Privacy Advocate", text: "There is finally an antivirus that doesn't aggressively harvest user data. Incredible UI, and the fact that it respects my privacy is unmatched." }
              ].map((t, i) => (
                <div key={i} className="bg-[#0C1220]/50 backdrop-blur border border-slate-800 hover:border-[#00FF41]/30 p-8 rounded-2xl transition-colors">
                  <div className="flex gap-1 text-[#00FF41] mb-4">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <div className="font-bold text-sm tracking-wide text-white uppercase">{t.name}</div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest mt-1">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="py-24 bg-[#020617]" id="faq">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center tracking-tighter uppercase text-white">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                { q: "Is Borton completely free?", a: "We offer a very capable Free tier that handles local scanning and core removal functions. For real-time active AI threat prevention and multi-device sync, we recommend Borton Pro." },
                { q: "Does Borton collect my browsing data?", a: "No. Unlike legacy alternatives, Borton's Zero-Knowledge architecture processes behavioral analysis locally. We do not track, store, or sell your web habits." },
                { q: "Will this conflict with Windows Defender?", a: "Borton is designed to work harmoniously alongside native OS protections or seamlessly take over as the primary endpoint security manager." },
                { q: "How is it so light on CPU?", a: "Instead of perpetually scanning massive databases of virus definitions, Borton's neural net watches for the *behavior* of malicious intent in memory, making it near-instant and incredibly lightweight." }
              ].map((item, i) => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                  <div key={i} className="bg-[#0C1220]/80 backdrop-blur border border-slate-800/80 rounded-xl overflow-hidden cursor-pointer hover:border-slate-700" onClick={() => setIsOpen(!isOpen)}>
                    <div className="px-6 py-5 flex justify-between items-center text-sm uppercase tracking-wide font-bold hover:text-[#00FF41] transition-colors text-slate-200">
                      {item.q}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00FF41]' : 'text-slate-500'}`} />
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-5 text-slate-400 leading-relaxed text-sm font-medium">
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 11. SERVICE REMOVAL TOOL & CANCELLATION (FINAL ORDERED FLOW) */}
        <section id="cancel" className="py-24 bg-[#020617] border-y border-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter uppercase text-white">Remove Borton or Cancel Your Subscription</h2>
              <p className="text-slate-400 text-lg md:text-xl">Provide transparency and user control while maintaining trust. We're sorry to see you go. Your security is always our priority.</p>
            </div>

            <div className="space-y-8">
              {/* A. SERVICE REMOVAL TOOL */}
              <div className="bg-[#0C1220]/80 backdrop-blur border border-slate-800 p-8 md:p-10 rounded-2xl shadow-2xl relative z-10 transition-all hover:border-[#00FF41]/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-md flex items-center justify-center">
                    <ShieldOff className="text-[#00FF41] w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">Download Service Removal Tool (SRM)</h3>
                </div>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl font-medium">
                  Use the official Borton Service Removal Tool to completely uninstall the software, including all residual files and system components.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <a href="https://anydesk.com/en/downloads/thank-you?dv=win_exe" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-[#00FF41]/10 hover:border hover:border-[#00FF41] text-white py-4 px-6 rounded-md font-bold uppercase tracking-widest text-xs transition-all">
                    <Download className="w-5 h-5" /> Download for Windows
                    <span className="text-[10px] font-normal text-slate-400 ml-1">(.exe)</span>
                  </a>
                  <a href="https://anydesk.com/en/downloads/thank-you?dv=mac_dmg" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-[#00FF41]/10 hover:border hover:border-[#00FF41] text-white py-4 px-6 rounded-md font-bold uppercase tracking-widest text-xs transition-all">
                    <Download className="w-5 h-5" /> Download for Mac
                    <span className="text-[10px] font-normal text-slate-400 ml-1">(.dmg)</span>
                  </a>
                </div>

                <div className="bg-[#020617] border border-slate-800 p-6 rounded-md">
                  <p className="font-bold text-xs uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#00FF41]" /> Instructions
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-slate-400 text-sm md:text-medium">
                    <li>Download the tool for your operating system above.</li>
                    <li>Run the tool as an administrator (or root).</li>
                    <li>Restart your device when prompted to finish cleanup.</li>
                  </ol>
                </div>

                {/* B. SUPPORT NUDGE */}
                <div className="mt-10 pt-8 border-t border-slate-800 text-center">
                  <p className="text-slate-300 mb-4 text-sm font-medium">Facing issues? Our support team can help resolve problems before you uninstall.</p>
                  <a href="#support" className="inline-flex items-center gap-2 text-[#00FF41] hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">
                    Contact Support <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* C. CANCELLATION FORM */}
              <div className="bg-[#0C1220]/80 backdrop-blur border border-slate-800 p-8 md:p-10 rounded-2xl relative z-10 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-900/10 blur-[50px] pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Cancel Your Subscription</h3>
                <p className="text-slate-400 text-lg mb-8 font-medium">
                  If you wish to cancel your Borton subscription, you can submit a request using the form below.
                </p>
                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdOxBkShlICsm0aJcxyngbf0MFmiQFJuq-HGECziufl7V0eQQ/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold uppercase tracking-widest text-xs py-4 px-8 rounded-md transition-colors mb-6">
                  Open Cancellation Form
                </a>
                
                <div className="flex flex-col sm:flex-row gap-6 text-slate-400 font-medium text-sm">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0"/> Requests are processed in 24 hours</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0"/> No hidden steps or complications</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-24 bg-[#0C1220] relative overflow-hidden flex flex-col justify-center min-h-[50vh]">
          <div className="absolute inset-0 bg-[#00FF41]/5 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF41] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 text-white leading-[0.95]">
              Protect Your Devices Today
            </h2>
            <a href="#download" className="inline-flex justify-center items-center gap-2 bg-[#00FF41] hover:bg-[#00FF41]/80 text-[#020617] text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-md transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]">
              Download Free
            </a>
          </div>
        </section>

      </main>

      {/* 13. FOOTER */}
      <footer className="bg-[#020617] py-16 border-t border-white/5 relative z-10" id="support">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6 text-white uppercase tracking-tighter">
                <div className="w-6 h-6 bg-[#00FF41] rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#020617] rounded-full"></div>
                </div>
                <span className="text-2xl font-bold">Borton</span>
              </div>
              <p className="text-slate-400 font-medium max-w-sm">
                Invisible, intelligent, invincible system security for modern professionals and enterprises.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Product</h4>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Support</h4>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Help Center</a></li>
                <li><a href="#cancel" className="hover:text-[#00FF41] transition-colors text-[#00FF41]/80">Service Removal Tool</a></li>
                <li><a href="#cancel" className="hover:text-[#00FF41] transition-colors text-[#00FF41]/80">Cancellation Form</a></li>
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[#00FF41] transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm font-medium text-slate-500 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Borton Security Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#00FF41] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#00FF41] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#00FF41] transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
