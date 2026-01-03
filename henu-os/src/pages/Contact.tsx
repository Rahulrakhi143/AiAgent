import { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Frontend only - no backend configured)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contact@henuos.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05060A] via-[#0A0F1F] to-[#05060A] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-400">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#12142A]/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-white">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1A1F3C]/50 border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1A1F3C]/50 border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1A1F3C]/50 border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  placeholder="Tell us what you're thinking..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-[#12142A]/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">Quick Actions</h2>

              <div className="space-y-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full px-6 py-4 bg-[#1A1F3C]/50 border border-purple-500/20 hover:border-purple-500/50 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold">WhatsApp</div>
                    <div className="text-sm text-slate-400">Chat with us instantly</div>
                  </div>
                </button>

                <button
                  onClick={handleEmail}
                  className="w-full px-6 py-4 bg-[#1A1F3C]/50 border border-purple-500/20 hover:border-purple-500/50 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold">Email</div>
                    <div className="text-sm text-slate-400">contact@henuos.com</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-[#12142A]/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Office Hours</h3>
              <div className="space-y-2 text-slate-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
