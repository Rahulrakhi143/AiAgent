import { useState } from 'react';
import { Brain, MessageSquare, Mail, Search, FileText, Smartphone, Lock } from 'lucide-react';

interface Agent {
  id: number;
  name: string;
  icon: typeof Brain;
  shortDesc: string;
  whatItDoes: string;
  whoItsFor: string;
  whyItMatters: string;
  locked?: boolean;
  link?: string; 
}

const agents: Agent[] = [
  {
    id: 1,
    name: 'Self-Guided AI Audio Tour Agent',
    icon: Brain,
    shortDesc: 'Voice-guided tours based on location',
    whatItDoes: 'Creates voice-guided tours based on location and interests.',
    whoItsFor: 'Travelers, educators, explorers.',
    whyItMatters: 'Turns places into immersive audio stories.',
    link: 'https://aiagent-nafth5ispcuwmcwxsi8la9.streamlit.app/', //
  },
  {
    id: 2,
    name: 'Blog to Podcast Agent',
    icon: MessageSquare,
    shortDesc: 'Convert articles to podcast audio',
    whatItDoes: 'Converts blog articles into podcast-style audio.',
    whoItsFor: 'Content creators, marketers.',
    whyItMatters: 'One blog, multiple audio platforms.',
    link: 'https://aiagent-hxqskr8gwqlbfmirnqydmy.streamlit.app/', //
  },
  {
    id: 3,
    name: 'AI Email GTM Outreach Agent',
    icon: Mail,
    shortDesc: 'Automated personalized outreach',
    whatItDoes: 'Finds leads and writes personalized outreach emails.',
    whoItsFor: 'Founders, sales and growth teams.',
    whyItMatters: 'Saves hours of manual prospecting.',
    link: 'https://aiagent-6rblpzocce36wy99rqntcv.streamlit.app/', //
  },
  {
    id: 4,
    name: 'Multi-Agent AI Researcher',
    icon: Search,
    shortDesc: 'AI-powered research assistant',
    whatItDoes: 'Researches trends, stories, and insights using AI agents.',
    whoItsFor: 'Writers, analysts, creators.',
    whyItMatters: 'Faster research, better decisions.',
    link: 'https://aiagent-b6en9nkfq7ajft7ze3yb7f.streamlit.app/', //
  },
  {
    id: 5,
    name: 'Resume & Job Matcher',
    icon: FileText,
    shortDesc: 'Smart resume optimization',
    whatItDoes: 'Matches resumes with job descriptions and suggests improvements.',
    whoItsFor: 'Students and job seekers.',
    whyItMatters: 'Improves hiring success rate.',
    link: 'https://aiagent-mxhhetter6pboz2ymllqpn.streamlit.app/', //
  },
  {
    id: 6,
    name: 'WhatsApp Automation Agent',
    icon: Smartphone,
    shortDesc: 'Automated messaging workflows',
    whatItDoes: 'Automates WhatsApp messaging workflows.',
    whoItsFor: 'Businesses and support teams.',
    whyItMatters: 'Faster responses, less manual work.',
    link: '', //
  },
  {
    id: 7,
    name: 'More Automations Coming',
    icon: Lock,
    shortDesc: 'Exciting new features in development',
    whatItDoes: '',
    whoItsFor: '',
    whyItMatters: '',
    locked: true,
  },
];

export default function Agents() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleAgentClick = (id: number, locked?: boolean) => {
    if (locked) return;
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05060A] via-[#0A0F1F] to-[#05060A] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            AI Agents
          </h1>
          <p className="text-xl text-slate-400">
            Powerful automation agents at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => {
            const Icon = agent.icon;
            const isExpanded = expandedId === agent.id;

            return (
              <div
                key={agent.id}
                className={`relative transition-all duration-500 ${
                  isExpanded ? 'lg:col-span-3' : ''
                }`}
              >
                <div
                  onClick={() => handleAgentClick(agent.id, agent.locked)}
                  className={`relative bg-[#12142A]/40 backdrop-blur-xl border rounded-xl overflow-hidden transition-all duration-500 ${
                    agent.locked
                      ? 'border-slate-700/30 cursor-not-allowed opacity-50'
                      : isExpanded
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
                      : 'border-purple-500/20 hover:border-purple-500/50 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10'
                  }`}
                  style={{
                    transform: isExpanded ? 'translateZ(50px)' : 'translateZ(0)',
                  }}
                >
                  {isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
                  )}

                  <div className={`p-6 ${isExpanded ? 'pb-8' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 ${
                          agent.locked
                            ? 'bg-slate-700'
                            : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
                        }`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {agent.name}
                        </h3>
                        <p className="text-slate-400 text-sm">{agent.shortDesc}</p>
                      </div>
                    </div>

                    {isExpanded && !agent.locked && (
                      <div className="mt-8 space-y-6 animate-fadeIn">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="bg-[#1A1F3C]/30 rounded-lg p-5 border border-purple-500/10">
                            <h4 className="text-purple-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                              What it does
                            </h4>
                            <p className="text-slate-300">{agent.whatItDoes}</p>
                          </div>

                          <div className="bg-[#1A1F3C]/30 rounded-lg p-5 border border-purple-500/10">
                            <h4 className="text-purple-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                              Who it's for
                            </h4>
                            <p className="text-slate-300">{agent.whoItsFor}</p>
                          </div>

                          <div className="bg-[#1A1F3C]/30 rounded-lg p-5 border border-purple-500/10">
                            <h4 className="text-purple-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                              Why it matters
                            </h4>
                            <p className="text-slate-300">{agent.whyItMatters}</p>
                          </div>
                        </div>

                        <div className="flex justify-center">
  {agent.link && (
    <a
      href={agent.link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
    >
      See How It Works
    </a>
  )}
</div>

                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
