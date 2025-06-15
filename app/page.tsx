"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, MessageCircle, GraduationCap, Award, Briefcase, Calendar, Eye, X, User } from "lucide-react"

// Portfolio component
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [expandedJobs, setExpandedJobs] = useState<Record<number, boolean>>({})
  const [showContacts, setShowContacts] = useState(false)
  const [portfolioFilter, setPortfolioFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Portfolio projects data
  const portfolioProjects = [
    {
      id: 1,
      title: "Restaurant Menu Design",
      category: "Printing Designs",
      image: "/images/websiteprinting_1.png",
      description: "Modern vegetarian cafe menu design with elegant layout and food photography integration.",
    },
    // Add other projects here
  ]

  // Work experience data
  const workExperience = [
    {
      company: "D Brand Maker",
      position: "Digital Marketing Assistant Manager",
      period: "July 2024 - Current",
      description: "Lead digital marketing initiatives including website development, social media strategy, and SEO/SEM campaigns.",
      current: true,
    },
    // Add other work experiences here
  ]

  // Skills data
  const skills = [
    {
      name: "Graphic Design",
      proficiency: 85,
      description: "Crafting compelling visual concepts using Photoshop, Illustrator, and other design tools.",
    },
    // Add other skills here
  ]

  // Language skills
  const languageSkills = [
    { name: "English", proficiency: 85 },
    { name: "Bahasa Melayu", proficiency: 70 },
    { name: "Mandarin", proficiency: 80 },
  ]

  // Filter projects based on selected filter
  const filteredProjects = portfolioFilter === "All"
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === portfolioFilter)

  return (
    <div className="min-h-screen w-full bg-gray-900">
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-yellow-500 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={selectedImage}
              alt="Portfolio Preview"
              width={800}
              height={600}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              unoptimized={true}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 px-2">My Portfolio</h1>
        
        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 z-40">
          <div className="flex justify-around p-2">
            {['about', 'portfolio', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab ? 'text-yellow-500' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Add your portfolio content here */}
        <div className="pb-24 md:pb-8">
          {/* Your existing content */}
        </div>
      </div>
    </div>
  )
}
