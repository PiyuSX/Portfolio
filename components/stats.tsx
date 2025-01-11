"use client"

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { number: 35, label: "Projects" },
    { number: 11, label: "Happy Clients" },
    { number: 5, label: "Certifications" },
    { number: 1, label: "Years of Experience" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const statsElement = document.getElementById('stats-section')
    if (statsElement) observer.observe(statsElement)

    return () => {
      if (statsElement) observer.unobserve(statsElement)
    }
  }, [])

  return (
    <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200 dark:border-gray-800">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold mb-2">
            {isVisible && (
              <CountUp
                end={stat.number}
                duration={5}
                suffix={stat.number === 1 ? "+" : "+"}
              />
            )}
          </div>
          <div className="text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

