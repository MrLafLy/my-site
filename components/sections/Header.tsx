export default function Header() {
  return (
    <header className="relative max-w-6xl mx-auto flex justify-between items-center p-6 z-10">
      <h1 className="font-bold text-lg tracking-wide">Eduard.dev</h1>
      <nav className="flex gap-6 text-gray-300 text-sm">
        <a href="#about" className="hover:text-white transition">Про мене</a>
        <a href="#skills" className="hover:text-white transition">Навички</a>
        <a href="#projects" className="hover:text-white transition">Проєкти</a>
        <a href="#contact" className="hover:text-white transition">Контакти</a>
      </nav>
    </header>
  )
}
