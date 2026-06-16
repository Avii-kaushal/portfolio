function SectionHeading({ id, label, title, description }) {
  return (
    <div id={id} className="mb-10 scroll-mt-24 md:mb-12">
      <p className="mb-2 text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-gray-100">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
