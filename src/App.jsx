import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-white text-gray-600 antialiased dark:bg-gray-950 dark:text-gray-400">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  )
}

export default App
