/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const AndyPortfolio = () => {
  const skills = [
    { category: "Cloud & Data Platform", items: ["Azure Storage Account", "Azure Databricks", "Azure SQL", "Azure Data Factory", "Azure Key Vault"] },
    { category: "Analytics & BI", items: ["Power BI", "SQL", "Data Integration (SSIS, SSRS, SSAS)", "ETL Pipelines"] },
    { category: "Programming", items: ["Python", "SQL"] },
    { category: "Professional", items: ["Problem-Solving", "Teamwork", "Prioritization", "Time Management"] }
  ];

  const certifications = [
    { name: "Python Developer Certification", issuer: "FreeCodeCamp", date: "March 16, 2026", icon: <Code2 className="w-6 h-6 text-blue-600" /> },
    { name: "PL-300: Power BI Data Analyst Associate", issuer: "Microsoft", date: "June 26, 2023", icon: <BarChart3 className="w-6 h-6 text-yellow-600" /> },
    { name: "AI-102: Azure AI Engineer Associate", issuer: "Microsoft", date: "December 27, 2024", icon: <Cloud className="w-6 h-6 text-blue-500" /> },
    { name: "AZ-900: Microsoft Azure Fundamentals", issuer: "Microsoft", date: "April 17, 2023", icon: <Cloud className="w-6 h-6 text-blue-400" /> },
    { name: "AI-900: Azure AI Fundamentals", issuer: "Microsoft", date: "April 4, 2024", icon: <Cloud className="w-6 h-6 text-indigo-500" /> }
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
    <div className="min-h-screen bg-slate-50">
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
            <a 
              href="mailto:andyrazon3@gmail.com"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
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
                  Transforming Data into <span className="text-blue-600">Actionable Insights</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  Enthusiastic professional transitioning from Cloud Support Engineering to Data Analytics. 
                  Expertise in Azure Data Platform and Power BI, dedicated to delivering data-driven solutions 
                  that streamline business processes.
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
                    src="/profile.png" 
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
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50"
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
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
                <p className="text-slate-400 max-w-2xl">Showcasing end-to-end data transformation and visualization capabilities.</p>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-400 text-sm font-mono">
                Power BI + Power Query
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://ais-pre-e2efrdcwazehppi3ohxp56-140842260328.asia-southeast1.run.app/pbi-dashboard.png" 
                    alt="Power BI Dashboard" 
                    className="w-full h-auto"
                    onError={(e) => {
                      // Fallback if image doesn't exist yet
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6">Sales Performance Dashboard</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">The Challenge</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Transforming raw Excel sales data into a professional, interactive dashboard for recruiter-level analysis.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Transformations (Power Query)</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Converted OrderDate from text to Date (Eng UK)
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Extracted Year and Month columns
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Split Customer Name into First & Last Name
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Standardized OrderDate to Short Date format
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Cleaned summarization for OrderID, Margin, and Year
                      </li>
                    </ul>
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                    View Project Details <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
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
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50 flex items-start gap-4"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{cert.name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{cert.issuer}</p>
                    <div className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase">
                      {cert.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Education</h2>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                <GraduationCap className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Bachelor of Science in Electronics Engineering (BSECE)</h3>
                <p className="text-blue-600 font-medium mb-2">ICCT Colleges Foundation, Inc. – Cainta Rizal, Philippines</p>
                <p className="text-slate-500 text-sm">Graduated: Jan 2019</p>
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
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
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
