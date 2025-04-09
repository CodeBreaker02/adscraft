"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Sparkles, ShieldCheck } from "lucide-react"

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-teal-400" />,
      title: "Fast",
      description:
        "Generate professional videos in minutes, not days. Save time and resources with our AI-powered platform.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-purple-400" />,
      title: "Authentic",
      description: "Create videos that feel genuine and relatable. Our AI understands what makes UGC content convert.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-pink-400" />,
      title: "AI-Powered",
      description:
        "Leverage cutting-edge AI technology to create videos that are optimized for engagement and conversion.",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-pink-400 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your marketing strategy with our powerful AI video platform
          </p>
        </div>

        <div ref={ref} className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-purple-900/10"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 md:p-12 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to revolutionize your ad strategy?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of e-commerce brands already using Adscraft to create high-converting video content at
                scale.
              </p>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg"
                >
                  Start Creating Videos
                </a>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-teal-400 mb-2">10x</div>
                <p className="text-sm text-gray-300">Faster content creation</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
                <p className="text-sm text-gray-300">Higher engagement rates</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-pink-400 mb-2">40%</div>
                <p className="text-sm text-gray-300">Increase in conversions</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-teal-400 mb-2">70%</div>
                <p className="text-sm text-gray-300">Cost reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
