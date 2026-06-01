'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative max-w-5xl mx-auto text-center pt-24 pb-16 px-6 z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold leading-tight"
      >
        Будую майбутнє через код
      </motion.h1>

      <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
        Я Eduard — студент-програміст, який вивчає та практикує сучасну веб-розробку і створення додатків.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Button className="bg-indigo-600 hover:bg-indigo-500">Мої проєкти</Button>
        <Button variant="outline" className="border-gray-500">Зв'язатися</Button>
      </div>
    </section>
  )
}
