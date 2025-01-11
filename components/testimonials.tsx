import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Nitish R.",
      role: "Freelance Client",
      image: "/placeholder.jpg",
      text: "Excellent communication, quick turnaround, and outstanding results. I'm 100% satisfied with the service provided. Highly recommended!",
    },
    {
      name: "Pramanand C.",
      role: "Senior Developer",
      image: "/placeholder.jpg",
      text: "Piyush has been an invaluable asset to our team. He consistently demonstrated proficiency in developing web applications from scratch to production.",
    },
  ]

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Words of Appreciation 💭</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

