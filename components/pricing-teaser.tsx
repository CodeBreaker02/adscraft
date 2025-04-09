"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingTeaser() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small businesses",
      price: isAnnual ? 29 : 39,
      features: [
        "10 AI-generated videos per month",
        "720p video quality",
        "Basic editing tools",
        "Standard templates",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing brands and marketers",
      price: isAnnual ? 79 : 99,
      features: [
        "50 AI-generated videos per month",
        "1080p video quality",
        "Advanced editing tools",
        "Premium templates",
        "Priority support",
        "Brand kit integration",
        "Analytics dashboard",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For established brands with high-volume needs",
      price: "Custom",
      features: [
        "Unlimited AI-generated videos",
        "4K video quality",
        "Full editing suite",
        "Custom templates",
        "Dedicated account manager",
        "API access",
        "Advanced analytics",
        "White-label options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-purple-400 text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your video creation needs
          </p>

          <div className="flex items-center justify-center mt-8">
            <div className="bg-gray-900 p-1 rounded-full inline-flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isAnnual ? "bg-gradient-to-r from-teal-500 to-purple-500 text-white" : "text-gray-400"
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual (Save 20%)
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !isAnnual ? "bg-gradient-to-r from-teal-500 to-purple-500 text-white" : "text-gray-400"
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gray-900 border ${
                plan.popular ? "border-purple-500" : "border-gray-800"
              } rounded-xl overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-teal-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  {typeof plan.price === "number" ? (
                    <div className="flex items-end">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold">{plan.price}</div>
                  )}
                  {isAnnual && typeof plan.price === "number" && (
                    <p className="text-sm text-teal-400 mt-1">Billed annually</p>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-teal-400 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white border-0"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-2">Need a custom solution?</p>
          <a href="#" className="text-teal-400 hover:text-teal-300 font-medium">
            Contact our sales team
          </a>
        </div>
      </div>
    </section>
  )
}
