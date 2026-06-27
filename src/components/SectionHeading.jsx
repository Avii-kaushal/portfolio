function SectionHeading({ id, label, title, description }) {
  return (
    <div id={id} className="mb-10 scroll-mt-24 md:mb-12">
      <div className="mb-4 inline-flex items-center rounded-full border border-blue-200/70 bg-blue-50/80 px-3 py-1 text-sm font-semibold tracking-[0.28em] text-blue-700 uppercase backdrop-blur dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-300">
        {label}
      </div>
      {title && (
        <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl dark:text-gray-100">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
