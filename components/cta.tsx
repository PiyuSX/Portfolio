import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready for Some Web Magic? ✨</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Whether it's crafting innovative web solutions or pushing the limits of what's possible, 
        I'm here to make it happen. Open to freelance work, collaborations, or even full-time roles—let's 
        create something extraordinary together!
      </p>
      <Button 
        size="lg" 
        className="gap-2 bg-purple-600 dark:text-white hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700"
      >
        <Sparkles className="h-5 w-5" />
        Let's Make Magic
      </Button>
    </section>
  )
}

