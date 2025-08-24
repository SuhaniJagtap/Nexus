import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Star, Users, Globe, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const AestheticWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'contact', name: 'Contact' }
  ];

  const NavigationBar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nexus
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  currentPage === page.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  setCurrentPage(page.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                  currentPage === page.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center justify-center">
      <div className="relative overflow-hidden w-full">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                backgroundColor: `hsl(${280 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`,
                animationDelay: `${Math.random() * 5}s`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
              }}
            />
          ))}
        </div>

        {/* Moving particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`moving-${i}`}
              className="absolute rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: `hsl(${300 + Math.random() * 60}, 80%, 70%)`,
                animationDelay: `${Math.random() * 10}s`,
                animation: `drift ${8 + Math.random() * 12}s linear infinite`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 px-6 py-32">
          <div className="max-w-7xl mx-auto text-center">
            <div 
              className="transform transition-all duration-1000"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                Welcome to
                <br />
                <span className="text-white">Nexus</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
                Where innovation meets elegance. We craft digital experiences that captivate, engage, and inspire.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-4 shadow-2xl shadow-purple-500/25"
                >
                  Discover More 
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="px-10 py-5 border-2 border-purple-500 rounded-full text-purple-400 font-semibold text-xl hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-purple-500/10"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Nexus
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a collective of creative minds, dedicated to pushing the boundaries of digital innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in 2020, Nexus emerged from a vision to bridge the gap between cutting-edge technology and exceptional user experience. We believe in creating digital solutions that not only meet functional requirements but also inspire and delight.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team combines expertise in design, development, and strategy to deliver solutions that drive real business results while maintaining the highest standards of aesthetic excellence.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
              <div className="text-center">
                <Globe size={80} className="text-purple-400 mx-auto mb-4" />
                <p className="text-white text-xl">Global Reach</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Star, title: 'Excellence', desc: 'Committed to delivering exceptional quality in every project' },
            { icon: Users, title: 'Collaboration', desc: 'Working closely with clients to achieve shared success' },
            { icon: Globe, title: 'Innovation', desc: 'Pioneering new approaches to digital experiences' }
          ].map((item, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <item.icon size={48} className="text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-900/20 to-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Web Development',
              description: 'Custom websites and applications built with cutting-edge technologies.',
              features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'Performance Optimization']
            },
            {
              title: 'UI/UX Design',
              description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
              features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
            },
            {
              title: 'Brand Strategy',
              description: 'Comprehensive branding solutions that establish strong market presence.',
              features: ['Brand Identity', 'Logo Design', 'Style Guides', 'Marketing Materials']
            },
            {
              title: 'Digital Marketing',
              description: 'Data-driven marketing strategies to reach and engage your target audience.',
              features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics']
            },
            {
              title: 'E-commerce',
              description: 'Complete online store solutions that drive sales and customer satisfaction.',
              features: ['Payment Integration', 'Inventory Management', 'Customer Analytics', 'Mobile Optimization']
            },
            {
              title: 'Consulting',
              description: 'Strategic guidance to help you navigate the digital landscape effectively.',
              features: ['Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Growth Strategy']
            }
          ].map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-green-500/20 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-green-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PortfolioPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our finest work and the impact we've created for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'TechFlow Platform',
              category: 'Web Application',
              description: 'A comprehensive project management platform for tech teams.',
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Luxe Fashion',
              category: 'E-commerce',
              description: 'Premium fashion brand online store with AR try-on features.',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'GreenEarth Initiative',
              category: 'Non-profit Website',
              description: 'Environmental awareness platform with donation integration.',
              color: 'from-green-500 to-teal-500'
            },
            {
              title: 'FinanceFlow',
              category: 'Financial App',
              description: 'Personal finance management with AI-powered insights.',
              color: 'from-yellow-500 to-orange-500'
            },
            {
              title: 'MindfulSpace',
              category: 'Wellness Platform',
              description: 'Meditation and mindfulness app with guided sessions.',
              color: 'from-indigo-500 to-purple-500'
            },
            {
              title: 'DataViz Pro',
              category: 'Analytics Dashboard',
              description: 'Real-time data visualization tool for enterprises.',
              color: 'from-red-500 to-pink-500'
            }
          ].map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className={`w-full h-64 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center`}>
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Globe size={32} />
                    </div>
                    <p className="text-sm opacity-80">{project.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-2">{project.category}</p>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-cyan-900/20 to-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@nexus.design' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-cyan-500/20 hover:bg-white/10 transition-all duration-300">
                  <contact.icon size={24} className="text-cyan-400" />
                  <div>
                    <p className="text-cyan-400 font-semibold">{contact.label}</p>
                    <p className="text-white">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[Github, Twitter, Linkedin].map((Icon, index) => (
                  <button key={index} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <div className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'portfolio': return <PortfolioPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavigationBar />
      <main>{renderPage()}</main>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) scale(1.1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-40px) translateX(-5px) scale(0.9);
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-20px) translateX(-15px) scale(1.05);
            opacity: 0.4;
          }
        }
        
        @keyframes drift {
          0% { 
            transform: translateY(100vh) translateX(-50px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% { 
            transform: translateY(-100px) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      
    </div>
  );
};

export default AestheticWebsite; 