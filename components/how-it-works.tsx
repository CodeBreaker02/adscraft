"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Sparkles, Share2 } from "lucide-react"

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10 text-teal-400" />,
      title: "Prompt",
      description:
        "Describe your product and target audience. Our AI understands your brand voice and marketing goals.",
      image: "/placeholder.svg?height=300&width=400&text=Prompt",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-purple-400" />,
      title: "Generate",
      description: "Our AI creates multiple variations of engaging UGC-style videos optimized for conversion.",
      image: "/placeholder.svg?height=300&width=400&text=Generate",
    },
    {
      icon: <Share2 className="w-10 h-10 text-pink-400" />,
      title: "Share",
      description: "Download your videos or publish directly to your marketing channels with one click.",
      image: "/placeholder.svg?height=300&width=400&text=Share",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-purple-400 text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create professional UGC videos in just three simple steps
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-8rem)] bg-gradient-to-b from-teal-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-700 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 mb-6">{step.description}</p>
                <div className="relative rounded-lg overflow-hidden w-full">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 w-8 h-8 rounded-full bg-gray-800 border-4 border-black flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
