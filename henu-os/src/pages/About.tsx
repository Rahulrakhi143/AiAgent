import { Bot, Zap, Globe, Cpu } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Bot,
      title: 'Automation First',
      description: 'Built from the ground up to automate your daily workflows',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'AI agents that think and act in real-time',
    },
    {
      icon: Globe,
      title: 'Multilingual',
      description: 'Work naturally in your preferred language',
    },
    {
      icon: Cpu,
      title: 'Linux Based',
      description: 'Powerful OS with built-in AI automations',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05060A] via-[#0A0F1F] to-[#05060A] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            What is HENU OS?
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto mb-8" />
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-[#12142A]/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-10 shadow-2xl shadow-purple-500/5">
            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              HENU OS is an <span className="text-purple-400 font-semibold">automation-first AI platform</span> that removes complexity from daily work.
            </p>
            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              From content creation to outreach, research, and communication — HENU thinks, acts, and automates for you.
            </p>
            <p className="text-xl leading-relaxed text-slate-300">
              It also provides a <span className="text-purple-400 font-semibold">Linux-based operating system</span> with built-in AI automations and multilingual support, allowing users to work naturally in their preferred language across workflows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#12142A]/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="w-14 h-14 mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-500/30 rounded-2xl px-8 py-6">
            <p className="text-2xl text-purple-400 font-light italic">
              "HENU hai tho, ky fikr hai……"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
