import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Mail, 
  Github, 
  Linkedin, 
  Globe, 
  BookOpen,
  Award, 
  GraduationCap,
  FileText
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about" className="pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              AI Researcher & 
              <span className="text-blue-600"> Academic</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Postdoctoral researcher specializing in Artificial Intelligence and Machine Learning, 
              with expertise in natural language processing, continual learning, and AI applications 
              for real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="secondary" className="px-3 py-1">
                <GraduationCap className="w-4 h-4 mr-2" />
                PhD in Computer Science
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Award className="w-4 h-4 mr-2" />
                3+ Years Postdoc
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <FileText className="w-4 h-4 mr-2" />
                10+ Publications
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/research">View Research</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  TN
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Trung Bao Nguyen</h3>
                <p className="text-slate-600">AI Researcher</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-slate-600">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">trungnbao@gmail.com</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Globe className="w-4 h-4 mr-3" />
                  <span className="text-sm">Auckland, New Zealand</span>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex justify-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/TrungNg" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/baotrung-nguyen-b3252047/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://scholar.google.com/citations?user=pl8UZzwAAAAJ" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
