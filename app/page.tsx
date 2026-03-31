"use client";

import { 
  Mail, 
  ArrowRight, 
  Cpu, 
  Globe, 
  ExternalLink,
  ChevronRight,
  User,
  Phone,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Brand icons were removed in Lucide 1.0+, defining them manually
const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function PortfolioPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-mesh selection:bg-brand-primary selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled ? "glass border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-white group">
            <span className="text-brand-primary">Digital</span>folio
          </Link>
          
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-white/70">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="px-5 py-2 glass rounded-full hover:bg-white/10 transition-all">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="max-w-4xl lg:w-3/5">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border-white/5 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in">
                <span className="flex h-2 w-2 rounded-full bg-brand-primary mr-2 animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="text-5xl lg:text-8xl font-black text-white leading-tight mb-8">
                Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Complex Problems</span> into Elegant Solutions.
              </h1>
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
                Super Senior Full-Stack Developer specialized in building scalable EdTech, Healthcare, and Management systems that drive efficiency and user growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#projects" 
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-brand-primary hover:bg-blue-600 text-white font-bold transition-all shadow-xl shadow-blue-500/20 group"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex gap-4">
                  <SocialIcon icon={<Github className="w-5 h-5" />} href="https://github.com" />
                  <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://linkedin.com" />
                  <SocialIcon icon={<Mail className="w-5 h-5" />} href="mailto:hello@example.com" />
                </div>
              </div>
            </div>
            
            {/* Visual Representation of Problems to Solutions */}
            <div className="lg:w-2/5 relative animate-fade-in">
              <div className="relative z-10 aspect-square glass rounded-[3rem] p-4 border-white/10 overflow-hidden group">
                <Image 
                  src="/hero-visual.png" 
                  alt="Problems to Solutions Visual" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20 mix-blend-overlay"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/20 blur-[100px] -z-0 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-secondary/20 blur-[100px] -z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Strip */}
      <div className="border-y border-white/5 glass">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <StatItem number={5} suffix="+" label="Years of Experience" />
            <StatItem number={40} suffix="+" label="Projects Completed" />
            <StatItem number={99} suffix="%" label="Happy Clients" />
            <StatItem number={10} suffix="+" label="Awards Winning" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass border-white/5 relative z-10">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                >
                  <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/20 blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-secondary/20 blur-3xl -z-0"></div>
            </div>
            <div>
              <h2 className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">About Me</h2>
              <h3 className="text-4xl font-bold text-white mb-6">Expertise in scalable system architecture.</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                I am a senior full-stack developer with a track record of delivering high-impact solutions for educational and healthcare institutions. My focus is on automating manual workflows and building performance-driven platforms that solve real-world inefficiencies.
              </p>
              
              <div className="grid gap-6">
                <SkillItem 
                  title="Full-Stack Engineering" 
                  desc="Next.js, Flutter, Node.js, and Distributed Systems" 
                  icon={<Globe className="w-6 h-6 text-brand-primary" />} 
                />
                <SkillItem 
                  title="Infrastructure & Database" 
                  desc="Firebase, PostgreSQL, and Scalable API Design" 
                  icon={<Cpu className="w-6 h-6 text-brand-secondary" />} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 lg:py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Portfolio</h2>
              <h3 className="text-4xl font-bold text-white mb-2">Featured Projects</h3>
              <p className="text-white/60">Selected works that showcase design and technical depth.</p>
            </div>
            <Link href="#all-projects" className="text-white hover:text-brand-primary transition-colors flex items-center group font-medium">
              View All Work <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-1 gap-12 lg:gap-20">
            <ProjectCard 
              title="NEET MentorX" 
              category="Mobile Learning Application" 
              image="/projects/neet.png" 
              problem="Students preparing for NEET often lack a structured system for practice, revision, and performance tracking, leading to inefficient preparation."
              solution="Developed a mobile application that provides organized study materials, test series, and performance analytics to support effective learning."
              features={["Practice tests & PYQs", "Notes & Flashcards", "Performance analytics", "Clean UI"]}
              tech="Flutter, Firebase, APIs, Figma"
              outcome="Improved student engagement and enabled structured preparation with measurable performance insights."
            />
            <ProjectCard 
              title="School Management System" 
              category="Web Administrative Platform" 
              image="/projects/school.png" 
              problem="Manual handling of student records, attendance, and reports leads to errors and inefficiencies."
              solution="Developed a web-based system that automates school management processes including attendance and timetables."
              features={["Student/Staff management", "Attendance tracking", "Timetable management", "Reports dashboard"]}
              tech="Web Frameworks, Firebase, APIs, UI/UX"
              outcome="Reduced manual work and improved operational efficiency for educational institutions."
            />
            <ProjectCard 
              title="Hospital Management System" 
              category="Healthcare Workflow App" 
              image="/projects/hospital.png" 
              problem="Hospitals face delays and inefficiencies due to manual record management."
              solution="Developed a system to manage OP, Pharmacy, and Lab operations digitally to streamline healthcare workflows."
              features={["OP patient management", "Pharmacy inventory", "Lab report management", "Workflow automation"]}
              tech="Web & Mobile, Firebase, API Integration"
              outcome="Improved hospital efficiency and reduced operational delays significantly."
            />
            <ProjectCard 
              title="Learning Management System (LMS)" 
              category="Online Education Platform" 
              image="/projects/lms.png" 
              problem="Institutions need a centralized system to manage courses and track student progress effectively."
              solution="Developed an LMS platform that enables content delivery, assessments, and detailed analytics."
              features={["Course management", "Progress tracking", "Assessments", "Admin dashboard"]}
              tech="Web & Mobile, Firebase, UI/UX Design"
              outcome="Enhanced learning experience and improved management of educational programs."
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 lg:py-48 px-6">
        <div className="w-full">
          <div className="max-w-7xl mx-auto glass p-8 lg:p-20 rounded-[4rem] border-white/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 p-8 text-brand-primary/5 -z-0">
              <Mail className="w-64 h-64 rotate-12" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
              {/* Left Side: Content */}
              <div className="space-y-8 text-left">
                <div>
                  <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                    Let&apos;s build something <span className="text-brand-primary text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">epic</span> together.
                  </h2>
                  <p className="text-white/50 text-lg lg:text-xl leading-relaxed max-w-md">
                    Open for collaborations, interesting freelance projects or simply to say hi. 
                    Fill out the form and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-4 text-white/70 group">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Email Me</p>
                      <p className="text-lg font-medium">hello@ragul.dev</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <SocialIcon icon={<Github className="w-5 h-5" />} href="#" />
                    <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="#" />
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="glass p-8 lg:p-10 rounded-[2rem] border-white/5 bg-white/[0.01]">
                <form className="space-y-6 text-left">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Person Name</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-primary/50 group-focus-within:text-brand-primary group-focus-within:scale-110 transition-all duration-300">
                        <User className="w-5 h-5" />
                      </div>
                      <input 
                        id="name"
                        type="text" 
                        placeholder="Your full name" 
                        className="w-full pl-16 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Gmail Address</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-primary/50 group-focus-within:text-brand-primary group-focus-within:scale-110 transition-all duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input 
                        id="email"
                        type="email" 
                        placeholder="yourname@gmail.com" 
                        className="w-full pl-16 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-primary/50 group-focus-within:text-brand-primary group-focus-within:scale-110 transition-all duration-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input 
                        id="phone"
                        type="tel" 
                        placeholder="+91 00000 00000" 
                        className="w-full pl-16 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="reason" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Reason for reaching</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-6 w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-primary/50 group-focus-within:text-brand-primary group-focus-within:scale-110 transition-all duration-300">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea 
                        id="reason"
                        rows={3}
                        placeholder="What can we build together?" 
                        className="w-full pl-16 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-brand-primary/50 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all font-medium resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full py-5 rounded-2xl bg-brand-primary hover:bg-blue-600 text-white font-bold transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] group flex items-center justify-center gap-3 text-lg"
                    >
                      Submit Inquiry
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-sm">
            © 2026 Ragul. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-semibold text-white/30 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">Dribbble</Link>
            <Link href="#" className="hover:text-white transition-colors">Behance</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components
function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <Link 
      href={href} 
      className="p-4 glass rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all active:scale-95"
    >
      {icon}
    </Link>
  );
}

function StatItem({ number, suffix, label }: { number: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const increment = number / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= number) {
            setCount(number);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      } else {
        setCount(0); // Reset when moving out of view
      }
    }, { threshold: 0.1 });

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div className="flex flex-col gap-1" ref={countRef}>
      <span className="text-4xl font-black text-white">{count}{suffix}</span>
      <span className="text-xs uppercase tracking-widest text-white/40 font-bold">{label}</span>
    </div>
  );
}

function SkillItem({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="flex gap-5 p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-all group">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ProjectCard({ 
  title, 
  category, 
  image, 
  problem, 
  solution, 
  features, 
  tech, 
  outcome 
}: { 
  title: string, 
  category: string, 
  image: string, 
  problem: string,
  solution: string,
  features: string[],
  tech: string,
  outcome: string
}) {
  return (
    <div className="group grid lg:grid-cols-2 gap-8 items-center bg-white/[0.02] p-8 lg:p-12 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/20 transition-all">
      <div className="aspect-square lg:aspect-video rounded-3xl glass border-white/5 overflow-hidden relative group-hover:scale-[1.02] transition-all duration-700">
         <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40"></div>
      </div>
      <div>
        <div className="mb-6">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">{category}</span>
          <h4 className="text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h4>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">The Problem</p>
              <p className="text-white/60 text-sm leading-relaxed">{problem}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">The Solution</p>
              <p className="text-white/60 text-sm leading-relaxed">{solution}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {features.map((f, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white/5 text-white/40 rounded-full border border-white/5">
              {f}
            </span>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Tech Stack</p>
              <p className="text-white text-xs font-medium">{tech}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Outcome</p>
              <p className="text-brand-primary text-xs font-bold italic">{outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
