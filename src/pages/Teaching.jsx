import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Users, GraduationCap } from 'lucide-react'
import { guestLectures, experiences } from '@/data.js'

export default function Teaching() {
  const uoaExperience = experiences.find(exp => exp.organization.includes('University of Auckland'));

  return (
    <section id="teaching" className="pt-32 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Teaching & Supervision</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Committed to fostering the next generation of AI researchers and practitioners 
            through interactive learning and mentorship.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                  Teaching Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  I believe in interactive learning with real-world applications, fostering critical 
                  thinking and practical problem-solving skills through hands-on experience and 
                  collaborative learning. My approach connects theoretical concepts to industry 
                  applications, preparing students for both academic and professional success.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Supervision Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">PhD Students</span>
                    <Badge variant="outline">{uoaExperience.supervision.phd} Students (Gaël Gendron, Minjung Kim)</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">MSc Students</span>
                    <Badge variant="outline">{uoaExperience.supervision.msc} Students</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Undergraduate Students</span>
                    <Badge variant="outline">{uoaExperience.supervision.undergrad} Students</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
        >
            <Card>
            <CardHeader>
                <CardTitle>Teaching Experience</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                <div>
                    <h4 className="font-semibold text-slate-800">Guest Lecturer - University of Auckland</h4>
                    <p className="text-slate-600 text-sm">COMPSCI714: AI Architecture and Design - Master of Artificial Intelligence (2024-2025)</p>
                    <p className="text-slate-600 text-sm">Topic: "Parallel Computing and GPUs"</p>
                </div>
                <Separator />
                <div>
                    <h4 className="font-semibold text-slate-800">Tutor - Victoria University of Wellington</h4>
                    <p className="text-slate-600 text-sm">COMP312: Simulation & Stochastic Models (2018-2019)</p>
                    <p className="text-slate-600 text-sm">COMP307: Introduction to Artificial Intelligence (2018-2019)</p>
                    <p className="text-slate-600 text-sm">~150 students • Excellent student feedback</p>
                </div>
                </div>
            </CardContent>
            </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Guest Lectures</h3>
          <div className="space-y-6">
            {guestLectures.map((lecture, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <CardTitle className="text-xl text-slate-800 mb-2">{lecture.topic}</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600 mb-4">
                    {lecture.course} - {lecture.university} ({lecture.year})
                  </CardDescription>
                  <div className="aspect-w-16 aspect-h-9 bg-slate-200 rounded-lg">
                    <iframe
                      src={lecture.videoUrl}
                      title={lecture.topic}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 