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

const AndyPortfolio = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showJourneyModal, setShowJourneyModal] = useState(false);

  const skills = [
    { category: "Cloud & Data Platform", items: ["Azure Storage Account", "Azure Databricks", "Azure SQL", "Azure Data Factory", "Azure Key Vault"] },
    { category: "Analytics & BI", items: ["Power BI", "SQL", "Excel", "Data Integration (SSIS, SSRS, SSAS)", "ETL Pipelines"] },
    { category: "Programming", items: ["Python", "SQL"] },
    { category: "Professional", items: ["Problem-Solving", "Teamwork", "Prioritization", "Time Management"] }
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
    <div className="min-h-screen bg-blue-50/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-slate-900 tracking-tight">ANDY S. RAZON</span>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-blue-600 transition-colors">Certifications</a>
            </div>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm"
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
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                  Data & BI Analyst
                </span>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                  Hi there! 👋 <span className="text-blue-600">I’m Andy.</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  I started my career in cloud support, where I solved complex technical issues and worked closely with data platforms. 
                  Now, I’m focused on data analytics—using tools like SQL, Python, and Power BI to turn data into meaningful insights.
                  <br /><br />
                  Feel free to explore my projects and see what I’ve been working on!
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-slate-500 text-sm">
                    <MapPin className="w-4 h-4 mr-2" /> Rizal, Philippines
                  </div>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Mail className="w-4 h-4 mr-2" /> andyrazon3@gmail.com
                  </div>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Phone className="w-4 h-4 mr-2" /> 09208975952
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/andy-razon-9b9817255" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-500 text-sm hover:text-blue-600 transition-colors"
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
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
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
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-xl text-green-600">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Power BI Expert</p>
                      <p className="text-lg font-bold text-slate-900">PL-300 Certified</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
              <p className="text-slate-600">A comprehensive toolkit for modern data engineering and business intelligence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-slate-100 bg-blue-50/50"
                >
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">{skillGroup.category}</h3>
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
                <div key={idx} className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center text-slate-500 text-sm bg-white px-3 py-1 rounded-full border border-slate-200">
                      <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 max-w-3xl">{exp.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
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
        <section id="projects" className="py-20 bg-slate-900 text-white">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Python + SQL</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">Telecom Customer Churn Analysis</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    An in-depth analysis of customer behavior to predict and prevent churn. This project involves data cleaning, exploratory data analysis (EDA), and identifying key factors that influence customer retention in the telecommunications sector.
                  </p>
                  <a 
                    href="https://github.com/kyah-Andy/Telecom_Customer_Churn_Analysis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-yellow-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Power BI + Power Query</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">Power BI Superstore Dashboard</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    A comprehensive retail analytics solution visualizing $14.92M in sales. Features advanced data modeling, DAX measures, and interactive visualizations to track performance across regions, segments, and categories.
                  </p>
                  <a 
                    href="https://github.com/kyah-Andy/powerbi-superstore-dashboard" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Azure ADF + Databricks + SQL</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">End-to-End Azure ETL</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    A comprehensive data engineering project implementing a full ETL pipeline. Demonstrates automated data movement, complex transformations, and secure storage using Azure Data Factory, Databricks, and Azure SQL Database.
                  </p>
                  <a 
                    href="https://github.com/kyah-Andy/End-to-End-Azure-ETL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  >
                    View Repository <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedCert(cert)}
                  className="p-6 rounded-2xl border border-slate-100 bg-blue-50/50 flex items-start gap-4 cursor-pointer group transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-blue-50 transition-colors">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{cert.name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <div className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase">
                        {cert.date}
                      </div>
                      <span className="text-[10px] font-semibold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
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
              className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl relative p-8"
              >
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Get in Touch</h3>
                  <p className="text-slate-500">I'm always open to new opportunities and collaborations.</p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="mailto:andyrazon3@gmail.com"
                    className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all group"
                  >
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email</p>
                      <p className="font-bold">andyrazon3@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:09208975952"
                    className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all group"
                  >
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Phone</p>
                      <p className="font-bold">09208975952</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/andy-razon-9b9817255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all group"
                  >
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">LinkedIn</p>
                      <p className="font-bold truncate max-w-[200px]">andy-razon-9b9817255</p>
                    </div>
                  </a>
                </div>

                <button 
                  onClick={() => setShowContactModal(false)}
                  className="w-full mt-8 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
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
                className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative"
              >
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-900 hover:bg-white transition-colors z-10 shadow-sm"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="aspect-[4/3] sm:aspect-video bg-slate-100 relative group">
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
                
                <div className="p-6 sm:p-8 border-t border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{selectedCert.name}</h3>
                      <p className="text-slate-500">{selectedCert.issuer} • Issued {selectedCert.date}</p>
                    </div>
                    <a 
                      href={selectedCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md"
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
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-blue-50/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 text-white rounded-lg">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">My College Journey</h3>
                  </div>
                  <button 
                    onClick={() => setShowJourneyModal(false)}
                    className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                      When I began my college journey, I set a clear goal for myself to graduate with Latin honors. I was determined and gave my best effort to achieve it. However, I soon realized the challenges and demands of college life were greater than I had anticipated. During my first year, I received grades that made me ineligible for Latin honors, as our institution required a minimum grade of 2.0 in all subjects. Although it was disappointing, I chose to shift my perspective continuing to do my best while also learning to appreciate the overall college experience.
                    </p>
                    <p>
                      In my second year as an engineering student, I experienced an unexpected milestone when I ranked among the top 10 students in my batch. This achievement made me realize that my efforts were meaningful and that I was capable of excelling despite earlier setbacks. Motivated by this, I continued to strive for academic excellence.
                    </p>

                    <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                      <img 
                        src="https://github.com/kyah-Andy/Images_Profile/blob/main/IECEP%20Pic.jpg?raw=true" 
                        alt="PalaIECEPAN 2018 3rd Placer" 
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                      <div className="p-4 bg-slate-50 text-xs text-slate-500 italic text-center">
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

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setShowJourneyModal(false)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Education Section */}
        <section className="py-20 bg-blue-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Education</h2>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                <GraduationCap className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Bachelor of Science in Electronics Engineering (BSECE)</h3>
                <p className="text-blue-600 font-medium mb-2">ICCT Colleges Foundation, Inc. – Cainta Rizal, Philippines</p>
                <p className="text-slate-500 text-sm mb-4">Graduated: Jan 2019</p>
                <button 
                  onClick={() => setShowJourneyModal(true)}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group"
                >
                  Read My College Journey <BookOpen className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-lg font-bold text-slate-900">ANDY S. RAZON</p>
              <p className="text-slate-500 text-sm">Data & Business Intelligence Analyst</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/andy-razon-9b9817255" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="mailto:andyrazon3@gmail.com" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
            <p className="text-slate-400 text-xs">© 2026 Andy Razon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AndyPortfolio;
