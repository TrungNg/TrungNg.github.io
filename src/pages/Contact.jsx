import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Mail, Github, Linkedin, BookOpen, Globe } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="pt-32 pb-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm open to collaborations, research opportunities, and discussions. 
            Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Card className="max-w-lg mx-auto hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                    <CardTitle className="text-center">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center p-4 rounded-lg bg-slate-100">
                        <Mail className="w-6 h-6 mr-4 text-blue-600" />
                        <div>
                            <p className="font-semibold">Email</p>
                            <a href="mailto:trungnbao@gmail.com" className="text-slate-700 hover:text-blue-600">
                                trungnbao@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center p-4 rounded-lg bg-slate-100">
                        <Globe className="w-6 h-6 mr-4 text-blue-600" />
                        <div>
                            <p className="font-semibold">Location</p>
                            <p className="text-slate-700">Auckland, New Zealand</p>
                        </div>
                    </div>
                    <div className="pt-4 flex justify-center space-x-4">
                        <Button variant="outline" asChild>
                            <a href="https://github.com/TrungNg" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 mr-2" /> GitHub
                            </a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="https://www.linkedin.com/in/baotrung-nguyen-b3252047/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                            </a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="https://scholar.google.com/citations?user=pl8UZzwAAAAJ" target="_blank" rel="noopener noreferrer">
                                <BookOpen className="w-5 h-5 mr-2" /> Google Scholar
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </section>
  )
} 