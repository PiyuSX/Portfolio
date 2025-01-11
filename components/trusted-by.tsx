import Image from "next/image"

export function TrustedBy() {
  const companies = [
    { name: "Company 1", logo: "/placeholder.svg?height=48&width=96" },
    { name: "Company 2", logo: "/placeholder.svg?height=48&width=96" },
    { name: "Company 3", logo: "/placeholder.svg?height=48&width=96" },
    { name: "Company 4", logo: "/placeholder.svg?height=48&width=96" },
  ]

  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-8 text-center">Trusted By</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {companies.map((company, index) => (
          <div key={index} className="relative w-24 h-12 grayscale hover:grayscale-0 transition-all">
            <Image
              src={company.logo}
              alt={company.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

