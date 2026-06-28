function Footer() {
  return (
    <footer className="border-t border-gray-200 px-2 py-2 dark:border-gray-800 text-sm text-center">
      {/* <div className="mx-auto flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row dark:text-gray-500"> */}
        <p>&copy; {new Date().getFullYear()} Avishek Kumar. All rights reserved.</p>
      {/* </div> */}
    </footer>
  )
}

export default Footer
