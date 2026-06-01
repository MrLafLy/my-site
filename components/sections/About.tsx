'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  return (
    <section id="about" className="relative max-w-5xl mx-auto px-6 py-16 z-10">
      <h2 className="text-2xl font-semibold mb-6">Про мене</h2>
      <Card className="bg-white/5 border border-white/10 backdrop-blur-xl">
        <CardContent className="p-6 text-gray-300">
          Я студент, який активно вивчає програмування та будує власні проєкти.
          Моя мета — стати full-stack розробником і працювати над реальними продуктами.
        </CardContent>
      </Card>
    </section>
  )
}
