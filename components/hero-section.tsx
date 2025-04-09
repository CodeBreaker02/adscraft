"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent"></div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-teal-400 text-sm font-medium mb-6">
              The Future of Ad Creation is Here
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI-crafted UGC & product videos
            </span>{" "}
            that convert.
            <br />
            Create scroll-stopping ads in minutes, not days.
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your marketing with AI-powered video generation. Authentic, engaging, and designed to drive
            conversions for your e-commerce brand.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="w-full sm:w-auto bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white text-lg py-6 px-8 rounded-lg border-0">
              Get Started Free
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto text-white border-gray-700 hover:bg-white/10 hover:text-white text-lg py-6 px-8 rounded-lg flex items-center gap-2"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <Play size={20} className="text-teal-400" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Adscraft Platform"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
              <button
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play size={30} className="text-white ml-1" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-sm text-gray-400 mr-4">Trusted by innovative brands:</p>
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=30&width=120&text=BRAND${i}`}
                alt={`Brand ${i}`}
                width={120}
                height={30}
                className="opacity-50 hover:opacity-80 transition-opacity"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden">
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <X size={20} />
            </button>
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <p className="text-gray-400">Demo video would play here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
