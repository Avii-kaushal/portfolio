function Footer() {
  return (
    <footer className="border-t border-gray-200/70 px-6 py-8 dark:border-gray-800/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-[1.5rem] border border-white/70 bg-white/70 px-5 py-4 text-sm text-gray-500 shadow-sm backdrop-blur-xl sm:flex-row dark:border-gray-800/70 dark:bg-gray-900/70 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Avishek Kumar. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, and smooth motion.</p>
      </div>
    </footer>
  )
}

export default Footer
