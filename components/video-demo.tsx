"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export default function VideoDemo() {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const videos = [
    {
      id: 1,
      title: "Fashion Product Showcase",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Fashion+Video",
      category: "Fashion",
    },
    {
      id: 2,
      title: "Beauty Product Tutorial",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Beauty+Video",
      category: "Beauty",
    },
    {
      id: 3,
      title: "Tech Product Review",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Tech+Video",
      category: "Tech",
    },
    {
      id: 4,
      title: "Food Product Demonstration",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Food+Video",
      category: "Food",
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  const handlePlayVideo = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      video.play()
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-teal-400 text-sm font-medium mb-4">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Showcase</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse our gallery of AI-generated videos across different industries
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="aspect-video bg-gray-900 relative">
              <Image
                src={videos[activeIndex].thumbnail || "/placeholder.svg"}
                alt={videos[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-0 hover:bg-white/30"
                  onClick={() => handlePlayVideo(activeIndex)}
                >
                  <Play size={30} className="text-white ml-1" />
                </Button>
              </div>
              <video ref={(el) => (videoRefs.current[activeIndex] = el)} className="hidden" controls>
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4 bg-gray-900/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-teal-400 font-medium">{videos[activeIndex].category}</span>
                  <h3 className="text-lg font-bold">{videos[activeIndex].title}</h3>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-700 hover:bg-white/10"
                    onClick={handlePrev}
                  >
                    <ChevronLeft size={18} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-700 hover:bg-white/10"
                    onClick={handleNext}
                  >
                    <ChevronRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1, y: -5 }}
                transition={{ duration: 0.2 }}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                  index === activeIndex ? "border-teal-500" : "border-transparent"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative aspect-video">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  {index === activeIndex && <div className="absolute inset-0 bg-teal-500/20"></div>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
