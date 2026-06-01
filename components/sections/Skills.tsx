'use client'

import { Card, CardContent } from '@/components/ui/card'

const SKILLS = [
  'HTML / CSS',
  'JavaScript',
  'Python',
  'HTTP / Web basics',
  'React',
  'Git & GitHub'
]

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-5xl mx-auto px-6 py-16 z-10">
      <h2 className="text-2xl font-semibold mb-6">Навички</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {SKILLS.map((skill) => (
          <Card key={skill} className="bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.02] transition">
            <CardContent className="p-4 text-center text-gray-200">
              {skill}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
