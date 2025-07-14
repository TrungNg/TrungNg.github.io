import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink } from 'lucide-react'
import { publications } from '@/data.js'

export default function Publications() {
  return (
    <section id="publications" className="pt-32 pb-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Publications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Peer-reviewed research contributions in top-tier conferences and journals.
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2 leading-tight">
                        {pub.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-2">{pub.authors}</p>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant={pub.type === 'Conference' ? 'default' : 'secondary'}>
                          {pub.type}
                        </Badge>
                        <span className="text-blue-600 font-medium">{pub.venue}</span>
                        <span className="text-slate-500">({pub.year})</span>
                      </div>
                      {pub.impact && (
                        <p className="text-sm text-green-600 font-medium">{pub.impact}</p>
                      )}
                    </div>
                    {pub.link && (
                      <Button variant="ghost" size="sm" asChild className="mt-2 sm:mt-0">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <Button variant="outline" asChild>
            <a href="https://scholar.google.com/citations?user=pl8UZzwAAAAJ" target="_blank" rel="noopener noreferrer">
              View Full Publication List
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 