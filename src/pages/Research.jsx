import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { experiences, skills } from '@/data.js'

export default function Research() {
  return (
    <section id="research" className="pt-32 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Research Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Advancing the frontiers of AI through innovative research in machine learning, 
            natural language processing, and real-world applications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-800">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">
                        {exp.organization}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p className="text-sm text-slate-500">{exp.location}</p>
                      <p className="text-sm font-medium text-slate-700">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pl-4">
                    <p className="text-slate-600 mb-2">{exp.description}</p>
                    {exp.supervision && (
                      <p className="text-sm text-slate-500">
                        Supervised {exp.supervision.phd} PhD, {exp.supervision.msc} MSc, and {exp.supervision.undergrad} undergraduate students.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-slate-800">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 