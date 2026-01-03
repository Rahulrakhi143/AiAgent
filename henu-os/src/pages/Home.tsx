import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Mail, Search, FileText, Smartphone } from 'lucide-react';

const agents = [
  { icon: Brain, name: 'AI Audio Tour', gradient: 'from-purple-500 via-pink-500 to-orange-500' },
  { icon: MessageSquare, name: 'Blog to Podcast', gradient: 'from-purple-600 via-pink-600 to-orange-600' },
  { icon: Mail, name: 'Email Outreach', gradient: 'from-purple-500 via-pink-500 to-orange-500' },
  { icon: Search, name: 'AI Researcher', gradient: 'from-purple-600 via-pink-600 to-orange-600' },
  { icon: FileText, name: 'Resume Matcher', gradient: 'from-purple-500 via-pink-500 to-orange-500' },
  { icon: Smartphone, name: 'WhatsApp Auto', gradient: 'from-purple-600 via-pink-600 to-orange-600' },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 300;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05060A] via-[#0A0F1F] to-[#05060A] text-white">
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent" />

        <div
          className="relative z-10 text-center transition-all duration-700"
          style={{
            transform: `translateY(${isScrolled ? '-50px' : '0px'})`,
            opacity: isScrolled ? 0 : 1,
          }}
        >
          <div
            className="relative mb-12"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full animate-pulse blur-3xl opacity-20" />
              <div className="absolute inset-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full shadow-2xl shadow-purple-500/30" />
              <div className="absolute inset-12 bg-[#05060A] rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  AI
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            HENU OS
          </h1>
          <p className="text-2xl text-slate-300 mb-8 font-light tracking-wide">
            HENU hai tho, ky fikr hai……
          </p>

          <Link
            to="/agents"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            See How It Works
          </Link>
        </div>

        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            transform: `translateY(${isScrolled ? '0' : '100vh'})`,
            opacity: isScrolled ? 1 : 0,
          }}
        >
          <div className="h-full flex items-center justify-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              {agents.map((agent, index) => {
                const Icon = agent.icon;
                const angle = (index / agents.length) * Math.PI * 2;
                const orbitRadius = isScrolled ? 0 : 200;
                const translateX = Math.cos(angle) * orbitRadius;
                const translateY = Math.sin(angle) * orbitRadius;

                return (
                  <Link
                    key={agent.name}
                    to="/agents"
                    className="group relative"
                    style={{
                      transform: `translate(${translateX}px, ${translateY}px)`,
                      transition: 'transform 0.7s ease-out',
                    }}
                  >
                    <div className="relative bg-[#12142A]/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div
                        className={`w-12 h-12 mb-4 bg-gradient-to-r ${agent.gradient} rounded-lg flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{agent.name}</h3>
                      <p className="text-slate-400 text-sm">Automation made simple</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
