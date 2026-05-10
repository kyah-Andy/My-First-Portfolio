/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Award, 
  Database, 
  BarChart3, 
  Code2, 
  Cloud, 
  ChevronRight,
  Download,
  Calendar,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  X,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Chatbot from './components/Chatbot';

const AndyPortfolio = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showJourneyModal, setShowJourneyModal] = useState(false);

  const skills = [
    { category: "Data Engineering", items: ["Azure Data Factory", "Azure Databricks", "Azure SQL", "ETL Pipelines", "Azure Storage", "Azure Key Vault"] },
    { category: "Data Science & Analytics", items: ["Python", "SQL", "Exploratory Data Analysis (EDA)", "Statistical Modeling", "Numpy/Pandas", "Excel"] },
    { category: "Business Intelligence", items: ["Power BI", "DAX", "Data Modeling", "SSIS/SSRS/SSAS", "Insight Visualization"] },
    { category: "Professional", items: ["Problem-Solving", "Analytical Thinking", "Strategic Planning", "Project Management"] }
  ];

  const certifications = [
    { 
      name: "Python Developer Certification", 
      issuer: "FreeCodeCamp", 
      date: "March 16, 2026", 
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      image: "https://github.com/kyah-Andy/Images_Profile/blob/main/Python%20Certification%20(Freecodecamp).png?raw=true"
    },
    { 
      name: "PL-300: Power BI Data Analyst Associate", 
      issuer: "Microsoft", 
      date: "June 26, 2023", 
      icon: <BarChart3 className="w-6 h-6 text-yellow-600" />,
      image: "https://github.com/kyah-Andy/Images_Profile/blob/main/PowerBi%20Data%20Analyst%20Associates.png?raw=true"
    },
    { 
      name: "AI-102: Azure AI Engineer Associate", 
      issuer: "Microsoft", 
      date: "December 27, 2024", 
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      image: "https://github.com/kyah-Andy/Images_Profile/blob/main/Azure%20AI%20Engineer%20Associates.png?raw=true"
    },
    { 
      name: "AZ-900: Microsoft Azure Fundamentals", 
      issuer: "Microsoft", 
      date: "April 17, 2023", 
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      image: "https://github.com/kyah-Andy/Images_Profile/blob/main/Azure%20Fundamentals.png?raw=true"
    },
    { 
      name: "AI-900: Azure AI Fundamentals", 
      issuer: "Microsoft", 
      date: "April 4, 2024", 
      icon: <Cloud className="w-6 h-6 text-indigo-500" />,
      image: "https://github.com/kyah-Andy/Images_Profile/blob/main/Azure%20AI%20Fundamentals.png?raw=true"
    }
  ];

  const LogoSlider = () => {
    return (
      <div className="bg-surface-bg border-y border-white/5 py-10 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-bg to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-bg to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
          className="flex whitespace-nowrap gap-16 items-center w-max"
        >
          {[...certifications, ...certifications].map((cert, idx) => (
            <div key={idx} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <img 
                 src={cert.image} 
                 alt={cert.name} 
                 className="h-12 w-auto object-contain"
                 referrerPolicy="no-referrer"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=100&auto=format&fit=crop";
                 }}
               />
               <div className="flex flex-col">
                 <span className="text-xs font-bold text-text-primary leading-tight">{cert.name}</span>
                 <span className="text-[10px] text-text-secondary font-medium">{cert.issuer}</span>
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  const experience = [
    {
      role: "App/Cloud Support Engineer (L2)",
      company: "Accenture, Inc.",
      location: "Taguig, Philippines",
      period: "Feb 2023 – Jan 2026",
      description: "Served as the escalation point for performance-related investigations on the client’s Data Platform. Collaborated with Microsoft Engineers for deep-dive root cause analysis.",
      highlights: [
        "Managed Azure resources including VMs, ADF, Databases, and Databricks.",
        "Monitored and resolved ADF pipeline failures.",
        "Facilitated deployment processes using SSMS and DevOps tools.",
        "Participated in Avanade FY 22 Data and Analytics Bootcamp (ETL, SQL, PBI)."
      ]
    },
    {
      role: "OSP Design Engineer",
      company: "Wuhan Fiberhome International Technologies",
      location: "Makati City, Philippines",
      period: "July 2020 – April 2022",
      description: "Optimized design processes using advanced CAD software, ensuring compliance with industry and client standards.",
      highlights: [
        "Improved project efficiency through streamlined design processes.",
        "Collaborated with cross-functional teams for final product integration.",
        "Conducted design assessments and alternative model evaluations."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-surface-bg text-text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-surface-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-text-primary tracking-tight">ANDY S. RAZON</span>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-text-secondary">
              <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-brand-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-brand-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-brand-primary transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-brand-primary transition-colors">Certifications</a>
            </div>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-brand-primary text-surface-bg px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4 border border-brand-primary/20">
                  Data Scientist | Data Engineer | BI Analyst
                </span>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
                  Hi there! 👋 <span className="text-brand-primary">I’m Andy.</span>
                </h1>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl">
                  I am a versatile data professional specializing in the full data lifecycle—from architecting scalable ETL pipelines and managing cloud-based data platforms to performing complex statistical analysis and delivering intuitive business intelligence solutions. 
                  <br /><br />
                  With a background in cloud support engineering and advanced certifications, I focus on bridging the gap between technical infrastructure and strategic, data-driven insights.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-text-secondary text-sm">
                    <MapPin className="w-4 h-4 mr-2" /> Rizal, Philippines
                  </div>
                  <div className="flex items-center text-text-secondary text-sm">
                    <Mail className="w-4 h-4 mr-2" /> andyrazon3@gmail.com
                  </div>
                  <div className="flex items-center text-text-secondary text-sm">
                    <Phone className="w-4 h-4 mr-2" /> 09208975952
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/andy-razon-9b9817255" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-text-secondary text-sm hover:text-brand-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn Profile
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-surface-card ring-1 ring-white/5">
                  <img 
                    src="https://github.com/kyah-Andy/Images_Profile/blob/main/profile%20pic.jpg?raw=true" 
                    alt="Andy Razon" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 bg-surface-card p-6 rounded-2xl shadow-xl border border-white/5 hidden sm:block">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-primary/20 rounded-xl text-brand-primary">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium">Power BI Expert</p>
                      <p className="text-lg font-bold text-text-primary">PL-300 Certified</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <LogoSlider />

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-surface-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Functional & Technical Expertise</h2>
              <p className="text-text-secondary">A robust toolkit bridging data engineering, advanced analytics, and strategic business intelligence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-white/5 bg-surface-card/40"
                >
                  <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, sIdx) => (
                      <span key={sIdx} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Work History</h2>
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-white/10">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-primary border-4 border-surface-bg shadow-sm" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                      <p className="text-brand-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center text-text-secondary text-sm bg-surface-card px-3 py-1 rounded-full border border-white/5">
                      <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                    </div>
                  </div>
                  <p className="text-text-secondary mb-4 max-w-3xl">{exp.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary mr-2 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-surface-bg text-text-primary border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Showcasing end-to-end data transformation, visualization, and analytical capabilities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1: Telecom Churn */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-slate-800 relative overflow-hidden">
                  <img 
                    src="https://github.com/kyah-Andy/Telecom_Customer_Churn_Analysis/blob/main/image/telco_churn_analysis.png?raw=true" 
                    alt="Telecom Customer Churn Analysis" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-bg to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-brand-primary text-surface-bg rounded-full text-[10px] font-bold uppercase tracking-wider">Python + SQL</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-text-primary">Telecom Customer Churn Analysis</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    An in-depth analysis of customer behavior to predict and prevent churn. This project involves data cleaning, exploratory data analysis (EDA), and identifying key factors that influence customer retention in the telecommunications sector.
                  </p>
                  <a 
                    href="https://github.com/kyah-Andy/Telecom_Customer_Churn_Analysis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors font-semibold"
                  >
                    View Repository <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Project 2: Superstore Dashboard */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-slate-800 relative overflow-hidden">
                  <img 
                    src="https://github.com/kyah-Andy/powerbi-superstore-dashboard/blob/main/images/DashboardPreview.png?raw=true" 
                    alt="Power BI Superstore Dashboard" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-bg to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-brand-primary text-surface-bg rounded-full text-[10px] font-bold uppercase tracking-wider">Power BI + Power Query</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-text-primary">Power BI Superstore Dashboard</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    A comprehensive retail analytics solution visualizing $14.92M in sales. Features advanced data modeling, DAX measures, and interactive visualizations to track performance across regions, segments, and categories.
                  </p>
                  <a 
                    href="https://github.com/kyah-Andy/powerbi-superstore-dashboard" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors font-semibold"
                  >
                    View Repository <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Project 3: End-to-End Azure ETL */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-slate-800 relative overflow-hidden">
                  <img 
                    src="https://github.com/kyah-Andy/End-to-End-Azure-ETL/blob/main/Architecture/Screenshot%202026-04-30%20110252.png?raw=true" 
                    alt="End-to-End Azure ETL" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558494949-ef8b56821803?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-bg to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-brand-primary text-surface-bg rounded-full text-[10px] font-bold uppercase tracking-wider">Azure ADF + Databricks + SQL</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-text-primary">End-to-End Azure ETL</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    A comprehensive data engineering project implementing a full ETL pipeline. Demonstrates automated data movement, complex transformations, and secure storage using Azure Data Factory, Databricks, and Azure SQL Database.
                  </p>
                  <a 
                    href="https://github.com/kyah-Andy/End-to-End-Azure-ETL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors font-semibold"
                  >
                    View Repository <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-surface-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedCert(cert)}
                  className="p-6 rounded-2xl border border-white/5 bg-surface-card/40 flex items-start gap-4 cursor-pointer group transition-all hover:bg-surface-card hover:shadow-xl"
                >
                  <div className="p-3 bg-surface-bg rounded-xl shadow-sm group-hover:bg-brand-primary/10 transition-colors">
                    {/* Simplified icon updates to match theming */}
                    {React.cloneElement(cert.icon as React.ReactElement, { className: "w-6 h-6 text-brand-primary" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors">{cert.name}</h3>
                    <p className="text-sm text-text-secondary mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <div className="inline-block px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-bold rounded uppercase border border-brand-primary/20">
                        {cert.date}
                      </div>
                      <span className="text-[10px] font-semibold text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        View <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Modal */}
        <AnimatePresence>
          {showContactModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="fixed inset-0 z-[100] bg-surface-bg/90 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-surface-card rounded-3xl overflow-hidden max-w-md w-full shadow-2xl relative p-8 border border-white/10"
              >
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="absolute top-4 right-4 p-2 text-text-secondary hover:text-brand-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-4 border border-brand-primary/20">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">Get in Touch</h3>
                  <p className="text-text-secondary">I'm always open to new opportunities and collaborations.</p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="mailto:andyrazon3@gmail.com"
                    className="flex items-center gap-4 p-4 bg-surface-bg/50 rounded-2xl hover:bg-surface-bg hover:text-brand-primary transition-all group border border-white/5"
                  >
                    <div className="p-3 bg-surface-card rounded-xl shadow-sm group-hover:bg-brand-primary group-hover:text-surface-bg transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">Email</p>
                      <p className="font-bold">andyrazon3@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:09208975952"
                    className="flex items-center gap-4 p-4 bg-surface-bg/50 rounded-2xl hover:bg-surface-bg hover:text-brand-primary transition-all group border border-white/5"
                  >
                    <div className="p-3 bg-surface-card rounded-xl shadow-sm group-hover:bg-brand-primary group-hover:text-surface-bg transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">Phone</p>
                      <p className="font-bold">09208975952</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/andy-razon-9b9817255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-surface-bg/50 rounded-2xl hover:bg-surface-bg hover:text-brand-primary transition-all group border border-white/5"
                  >
                    <div className="p-3 bg-surface-card rounded-xl shadow-sm group-hover:bg-brand-primary group-hover:text-surface-bg transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">LinkedIn</p>
                      <p className="font-bold truncate max-w-[200px]">andy-razon-9b9817255</p>
                    </div>
                  </a>
                </div>

                <button 
                  onClick={() => setShowContactModal(false)}
                  className="w-full mt-8 bg-brand-primary text-surface-bg py-4 rounded-2xl font-bold hover:bg-brand-secondary transition-all shadow-lg"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certification Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-surface-card rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative border border-white/10"
              >
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 bg-surface-bg/80 backdrop-blur-md rounded-full text-text-primary hover:text-brand-primary transition-colors z-10 shadow-sm border border-white/5"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="aspect-[4/3] sm:aspect-video bg-surface-bg relative group">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.name}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>
                
                <div className="p-6 sm:p-8 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-1">{selectedCert.name}</h3>
                      <p className="text-text-secondary">{selectedCert.issuer} • Issued {selectedCert.date}</p>
                    </div>
                    <a 
                      href={selectedCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-brand-primary text-surface-bg px-6 py-3 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
                    >
                      Open Original <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* College Journey Modal */}
        <AnimatePresence>
          {showJourneyModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowJourneyModal(false)}
              className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative"
              >
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-brand-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-primary text-surface-bg rounded-lg">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">My College Journey</h3>
                  </div>
                  <button 
                    onClick={() => setShowJourneyModal(false)}
                    className="p-2 text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                  <div className="space-y-6 text-text-secondary leading-relaxed">
                    <p>
                      When I began my college journey, I set a clear goal for myself to graduate with Latin honors. I was determined and gave my best effort to achieve it. However, I soon realized the challenges and demands of college life were greater than I had anticipated. During my first year, I received grades that made me ineligible for Latin honors, as our institution required a minimum grade of 2.0 in all subjects. Although it was disappointing, I chose to shift my perspective continuing to do my best while also learning to appreciate the overall college experience.
                    </p>
                    <p>
                      In my second year as an engineering student, I experienced an unexpected milestone when I ranked among the top 10 students in my batch. This achievement made me realize that my efforts were meaningful and that I was capable of excelling despite earlier setbacks. Motivated by this, I continued to strive for academic excellence.
                    </p>

                    <div className="my-8 rounded-2xl overflow-hidden border border-white/10 shadow-sm">
                      <img 
                        src="https://github.com/kyah-Andy/Images_Profile/blob/main/IECEP%20Pic.jpg?raw=true" 
                        alt="PalaIECEPAN 2018 3rd Placer" 
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                      <div className="p-4 bg-surface-bg/50 text-xs text-text-secondary italic text-center">
                        Awarded as 3rd placer in PalaIECEPAN 2018: Battle of InQUIZitive Minds
                      </div>
                    </div>

                    <p>
                      From my second year through my fourth year, I had the opportunity to represent the school as a quiz bee participant. This experience not only strengthened my knowledge and critical thinking skills but also allowed me to contribute to the academic community and represent my institution with pride.
                    </p>
                    <p>
                      My college journey was not easy, but it was fulfilling. I persevered, continued to grow, and ultimately graduated with a strong sense of accomplishment. I am proud to have been one of the 12 students who completed the program in my batch, which originally started with three sections of approximately 40 students each. While many faced challenges along the way, this experience made my achievement even more meaningful.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-surface-bg/50 border-t border-white/5 flex justify-end">
                  <button 
                    onClick={() => setShowJourneyModal(false)}
                    className="px-6 py-2 bg-brand-primary text-surface-bg rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Education Section */}
        <section className="py-20 bg-surface-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Education</h2>
            <div className="bg-surface-card p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col md:flex-row gap-8 items-center">
              <div className="p-4 bg-brand-primary/10 rounded-2xl text-brand-primary border border-brand-primary/20">
                <GraduationCap className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Bachelor of Science in Electronics Engineering (BSECE)</h3>
                <p className="text-brand-primary font-medium mb-2">ICCT Colleges Foundation, Inc. – Cainta Rizal, Philippines</p>
                <p className="text-text-secondary text-sm mb-4">Graduated: Jan 2019</p>
                <button 
                  onClick={() => setShowJourneyModal(true)}
                  className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-semibold text-sm transition-colors group"
                >
                  Read My College Journey <BookOpen className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-bg border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-lg font-bold text-text-primary">ANDY S. RAZON</p>
              <p className="text-text-secondary text-sm">Data Scientist | Data Engineer | BI Analyst</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/andy-razon-9b9817255" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-brand-primary transition-colors"><Github className="w-6 h-6" /></a>
              <a href="mailto:andyrazon3@gmail.com" className="text-text-secondary hover:text-brand-primary transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
            <p className="text-text-secondary text-xs">© 2026 Andy Razon. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
};

export default AndyPortfolio;
