export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600 opacity-30 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[140px] rounded-full" />
    </div>
  )
}
