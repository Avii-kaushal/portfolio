function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row dark:text-gray-500">
        <p>&copy; {new Date().getFullYear()} Avishek Kumar. All rights reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer
