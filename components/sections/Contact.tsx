'use client'

import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-3xl mx-auto px-6 py-20 text-center z-10">
      <h2 className="text-2xl font-semibold mb-4">Контакти</h2>
      <p className="text-gray-400 mb-6">
        Зв'яжись зі мною через будь-який з каналів нижче:
      </p>

      <div className="space-y-2 text-gray-300">
        <p>Email: edic.pirnak@gmail.com</p>
        <p>GitHub: <a href="https://github.com/MrLafLy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">https://github.com/MrLafLy</a></p>
        <p>Discord: mr.lafly</p>
      </div>

      <div className="mt-6">
        <Button className="bg-indigo-600 hover:bg-indigo-500">
          Написати
        </Button>
      </div>
    </section>
  )
}
