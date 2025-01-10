import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsGrid } from "@/components/projects-grid"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="pt-24">
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}

