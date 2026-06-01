'use client'

import { Card, CardContent } from '@/components/ui/card'

const PROJECTS = [
  {
    title: 'Portfolio Website',
    description: 'Сучасний сайт-портфоліо з UI у стилі стартапів.'
  },
  {
    title: 'Coming Soon',
    description: 'Нові проєкти в розробці 🚀'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-5xl mx-auto px-6 py-16 z-10">
      <h2 className="text-2xl font-semibold mb-6">Проєкти</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <Card key={project.title} className="bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.02] transition">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
