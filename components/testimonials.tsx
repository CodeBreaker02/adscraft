"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, FashionBrand",
      image: "/placeholder.svg?height=100&width=100&text=SJ",
      quote:
        "Adscraft has completely transformed our ad creation process. We're creating 5x more content with half the team, and our conversion rates have never been higher.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, TechGadgets",
      image: "/placeholder.svg?height=100&width=100&text=MC",
      quote:
        "The quality of videos we get from Adscraft is incredible. Our customers can't tell they're AI-generated, and we've seen a 40% increase in click-through rates.",
      stars: 5,
    },
    {
      name: "Jessica Williams",
      role: "E-commerce Manager, BeautyStore",
      image: "/placeholder.svg?height=100&width=100&text=JW",
      quote:
        "As a small business, we couldn't afford professional video production. Adscraft lets us create professional-quality videos that compete with the big brands.",
      stars: 4,
    },
    {
      name: "David Rodriguez",
      role: "CMO, FitnessBrand",
      image: "/placeholder.svg?height=100&width=100&text=DR",
      quote:
        "We've cut our ad production time from weeks to hours. The ROI we've seen from Adscraft has been incredible - it's a game-changer for our marketing team.",
      stars: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-teal-400 text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied marketers and creators who've transformed their content strategy
          </p>
        </div>

        <div ref={ref} className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full p-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium">
            Read more customer stories
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
