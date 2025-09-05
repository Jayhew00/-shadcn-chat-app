"use client"

import { useState } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, MessageCircle, GraduationCap, Award, Briefcase, Calendar, Eye, X, User } from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [expandedJobs, setExpandedJobs] = useState<Record<number, boolean>>({})
  const [showContacts, setShowContacts] = useState(false)
  const [portfolioFilter, setPortfolioFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showAllWebsites, setShowAllWebsites] = useState(false)

  const portfolioProjects = [
    // Printing Designs
    {
      id: 1,
      title: "Restaurant Menu Design",
      category: "Printing Designs",
      image: "/images/websiteprinting_1.png",
      description: "Modern vegetarian cafe menu design with elegant layout and food photography integration.",
    },
    {
      id: 2,
      title: "Food Promotion Banner",
      category: "Printing Designs",
      image: "/images/websiteprinting_2.png",
      description: "Vibrant promotional banner for vegetarian set lunch with bilingual content and appetizing visuals.",
    },
    {
      id: 3,
      title: "Vegan Cake Menu",
      category: "Printing Designs",
      image: "/images/websiteprinting_3.png",
      description: "Creative dessert menu showcasing pure vegan cakes with attractive product presentation.",
    },
    {
      id: 4,
      title: "Corporate Business Cards",
      category: "Printing Designs",
      image: "/images/websiteprinting_4.png",
      description:
        "Professional business card design for Netsentrik with modern green branding and QR code integration.",
    },
    // Social Media Designs
    {
      id: 5,
      title: "Automotive Service Promotion",
      category: "Social Media Designs",
      image: "/images/websitesm_2.png",
      description:
        "Festive Hari Raya promotion for VAG Technik featuring free car checking with engaging mascot design.",
    },
    {
      id: 6,
      title: "Workshop CRM Marketing",
      category: "Social Media Designs",
      image: "/images/websitesm_1.png",
      description:
        "Chinese-language social media campaign for Workshop Hero CRM system targeting automotive businesses.",
    },
    {
      id: 7,
      title: "Vehicle Branding Design",
      category: "Social Media Designs",
      image: "/images/websitesm_2_copy.png",
      description: "Professional vehicle wrap design for BMERC TECHNIK showcasing automotive repair services.",
    },
    {
      id: 8,
      title: "RES FastPass Mortgage Campaign",
      category: "Social Media Designs",
      image: "/images/w1.png",
      description: "Professional mortgage campaign design featuring Winchester Lin as mortgage specialist with compelling call-to-action and solution-focused messaging.",
    },
    {
      id: 9,
      title: "Property Sales Statistics Design",
      category: "Social Media Designs", 
      image: "/images/w2.png",
      description: "Informative social media post highlighting industry statistics about property sales inefficiencies with clear value proposition.",
    },
    {
      id: 10,
      title: "Property Sales Pain Points",
      category: "Social Media Designs",
      image: "/images/w3.png", 
      description: "Emotional marketing design addressing common frustrations in property sales with solution-oriented messaging and professional presentation.",
    },
    {
      id: 11,
      title: "Mortgage Deal Success Story",
      category: "Social Media Designs",
      image: "/images/w4.png",
      description: "Success story design showcasing mortgage specialist credentials and expertise with professional statistics and client testimonial approach.",
    },
    {
      id: 12,
      title: "Customer Journey Visualization",
      category: "Social Media Designs",
      image: "/images/w5.png",
      description: "Problem-solution narrative design illustrating common property transaction challenges and how RES FastPass system provides solutions.",
    },
    // Node JS Projects
    {
      id: 13,
      title: "Personal Portfolio Website",
      category: "Node JS",
      image: "/images/websitereact_1.png",
      description: "Modern React portfolio website with anime-inspired design and comprehensive skills showcase.",
    },
    {
      id: 14,
      title: "Made in Malaysia Platform",
      category: "Node JS",
      image: "/images/websitereact_2.png",
      description:
        "Full-stack React application connecting local manufacturers with admin dashboard and public interface.",
    },
    // Packaging Design
    {
      id: 15,
      title: "Premium Product Packaging Design 1",
      category: "Printing Designs",
      image: "/images/packaging1.png",
      description: "Modern and elegant packaging design for premium consumer products with sophisticated branding elements.",
    },
    {
      id: 16,
      title: "Premium Product Packaging Design 2",
      category: "Printing Designs",
      image: "/images/packaging2.png",
      description: "Creative packaging solution featuring bold colors and contemporary design aesthetics for retail products.",
    },
    {
      id: 17,
      title: "Premium Product Packaging Design 3",
      category: "Printing Designs",
      image: "/images/packaging3.png",
      description: "Minimalist packaging design approach with clean lines and strategic use of white space for luxury appeal.",
    },
    {
      id: 18,
      title: "Premium Product Packaging Design 4",
      category: "Printing Designs",
      image: "/images/packaging4.png",
      description: "Innovative packaging concept combining functionality with aesthetic appeal for consumer product lines.",
    },
    {
      id: 19,
      title: "Premium Product Packaging Design 5",
      category: "Printing Designs",
      image: "/images/packaging5.png",
      description: "Sustainable packaging design featuring eco-friendly materials and environmentally conscious branding.",
    },
    {
      id: 20,
      title: "Premium Product Packaging Design 6",
      category: "Printing Designs",
      image: "/images/packaging6.png",
      description: "Bold and vibrant packaging design targeting younger demographics with dynamic visual elements.",
    },
    {
      id: 21,
      title: "Premium Product Packaging Design 7",
      category: "Printing Designs",
      image: "/images/packaging7.png",
      description: "Professional packaging design for corporate products with emphasis on brand recognition and trust.",
    },
    {
      id: 22,
      title: "Premium Product Packaging Design 8",
      category: "Printing Designs",
      image: "/images/packaging8.png",
      description: "Artistic packaging design featuring unique patterns and textures for specialty product differentiation.",
    },
  ]

  const workExperience = [
    {
      company: "D Brand Maker",
      position: "Digital Marketing Assistant Manager",
      period: "July 2024 - Current",
      description:
        "Lead digital marketing initiatives including website development, social media strategy, and SEO/SEM campaigns. Develop automation applications to streamline operational workflows and enhance productivity. Manage e-commerce platform creation, product catalog management, and provide strategic consultation for online business optimization. Oversee technical support for internship programs and content strategy development for Facebook and XiaoHongShu platforms.",
      current: true,
    },
    {
      company: "Best Denki Malaysia",
      position: "E-commerce Designer & AEO Specialist",
      period: "April 2021 - June 2024",
      description:
        "Managed comprehensive digital marketing operations including social media content creation, print design, and website maintenance. Conducted market research and competitive analysis to inform strategic decisions. Implemented SEO strategies and managed digital advertising campaigns across multiple platforms. Developed automated web scraping solutions for competitor price monitoring and system integration.",
      current: false,
    },
    {
      company: "Kang Yei Design",
      position: "Graphic Designer & Print Production Specialist",
      period: "July 2021 - March 2023",
      description:
        "Executed comprehensive design projects including social media graphics, corporate stationery, brochures, and packaging design. Managed print production workflows and operated industrial printing equipment. Collaborated with clients to deliver creative solutions for various marketing materials and brand identity projects.",
      current: false,
    },
    {
      company: "Easy Jane",
      position: "Marketing & Graphic Design Specialist",
      period: "February 2021 - May 2021",
      description:
        "Developed and executed social media marketing campaigns with focus on Facebook advertising. Created custom apparel designs and managed product photography and inventory systems. Coordinated marketing initiatives to enhance brand visibility and customer engagement.",
      current: false,
    },
    {
      company: "Empty Pictures",
      position: "Social Media Graphic Designer",
      period: "September 2020 - January 2021",
      description:
        "Specialized in creating engaging visual content for social media platforms including Facebook and Instagram. Developed brand-consistent graphics and promotional materials to enhance online presence and audience engagement.",
      current: false,
    },
    {
      company: "SME (Samsung Malaysia Electronic)",
      position: "Brand Promoter",
      period: "January 2018 - March 2018",
      description:
        "Represented Samsung brand at retail locations, providing product demonstrations and customer education. Achieved sales targets through effective product knowledge communication and customer relationship building.",
      current: false,
    },
  ]

  const skills = [
    {
      name: "Graphic Design",
      proficiency: 85,
      description:
        "Crafting compelling visual concepts using Photoshop, Illustrator, and other design tools to create engaging and memorable designs.",
    },
    {
      name: "Video Editing",
      proficiency: 60,
      description:
        "Producing polished video content with CapCut and Premiere Pro, from basic edits to engaging visual storytelling.",
    },
    {
      name: "Photo Editing",
      proficiency: 85,
      description:
        "Transforming photos with precision using Photoshop, from basic touch-ups to advanced compositing and creative effects.",
    },
    {
      name: "Web Development",
      proficiency: 60,
      description:
        "Building responsive and dynamic web applications using HTML, CSS, JavaScript, and Next.js, enhanced with AI tools for efficient development.",
    },
    {
      name: "Microsoft Office",
      proficiency: 70,
      description:
        "Leveraging Excel, Google Sheets, and automation tools for data analysis, reporting, and creating efficient mini-databases.",
    },
    {
      name: "AI Tools",
      proficiency: 80,
      description:
        "Exploring and utilizing AI tools like ComfyUI, Stable Diffusion, Midjourney, and innovative GitHub projects to streamline workflows and enhance productivity.",
    },
  ]

  const tools = [
    { name: "Photoshop", category: "Adobe Creative Suite" },
    { name: "Illustrator", category: "Adobe Creative Suite" },
    { name: "CapCut", category: "Video Editing" },
    { name: "HTML/CSS", category: "Web Development" },
    { name: "JavaScript", category: "Web Development" },
    { name: "Premier Pro", category: "Video Editing" },
    { name: "ComfyUI", category: "AI Tools" },
    { name: "Microsoft Office", category: "Productivity" },
  ]

  const designPhilosophy = [
    "User-Centered Design",
    "Creative Problem Solving",
    "Attention to Detail",
    "Continuous Learning",
  ]

  const languageSkills = [
    { name: "English", proficiency: 85 },
    { name: "Bahasa Melayu", proficiency: 70 },
    { name: "Mandarin", proficiency: 80 },
  ]

  const portfolioFilters = ["All", "Printing Designs", "Social Media Designs", "Node JS"]

  const websites = [
    "aetuned.my",
    "apexle.com.my", 
    "ayamgaramnyonya.com",
    "bmerctechnik.com.my",
    "empressgate.com",
    "m-and-law-partners.com",
    "ngogrocer.com",
    "organicseeds.com.my",
    "universalfirecare.com",
    "vagtechnik.com.my",
    "vegansynergy.com.my",
    "ykconfinement.com",
  ]

  const displayedWebsites = showAllWebsites ? websites : websites.slice(0, 3)

  const filteredProjects =
    portfolioFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === portfolioFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
              src={selectedImage || "/placeholder.svg"}
              alt="Portfolio Preview"
              width={800}
              height={600}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              unoptimized={!selectedImage}
            />
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Desktop Sidebar - Sticky */}
        <div className="w-80 flex-shrink-0">
          <div className="sticky top-0 h-screen overflow-y-auto p-6">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-8">
                  <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-yellow-500/20">
                    <AvatarImage
                      src="/images/me.png"
                      alt="Jay Hew"
                      className="object-cover object-center"
                      style={{ objectPosition: "center 75%" }}
                    />
                    <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-2xl font-bold">
                      JH
                    </AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold text-white mb-2">Jay Hew</h1>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-gray-600">
                    Graphic Designer & Developer
                  </Badge>
                </div>

                <div className="space-y-6 text-left flex-grow">
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">EMAIL</p>
                      <a
                        href="mailto:hewmannxuan@gmail.com"
                        className="text-sm text-white break-all hover:text-yellow-500 transition-colors"
                      >
                        hewmannxuan@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">WHATSAPP</p>
                      <a
                        href="https://wa.me/60143108832"
                        className="text-sm text-white hover:text-yellow-500 transition-colors"
                      >
                        0143108832
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">LOCATION</p>
                      <p className="text-sm text-white">Petaling Jaya, Malaysia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">LANGUAGE SKILLS</p>
                      <div className="mt-2 space-y-3">
                        {languageSkills.map((language, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-white">{language.name}</span>
                              <span className="text-xs text-yellow-500">{language.proficiency}%</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-1.5">
                              <div
                                className="bg-yellow-500 h-1.5 rounded-full transition-all duration-1000"
                                style={{ width: `${language.proficiency}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">PERSONALITY TYPE</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30 text-sm font-bold">
                          INFJ
                        </Badge>
                        <span className="text-xs text-gray-400">The Advocate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Desktop Main Content */}
        <div className="flex-1">
          <div className="p-6 lg:p-8">
            <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm min-h-[calc(100vh-4rem)]">
              <CardContent className="p-6 lg:p-8">
                {/* Desktop Navigation */}
                <nav className="mb-8 overflow-x-auto">
                  <ul className="flex gap-8 text-sm whitespace-nowrap pb-2">
                    {[
                      { key: "about", label: "About" },
                      { key: "resume", label: "Resume" },
                      { key: "experience", label: "Working Experience" },
                      { key: "portfolio", label: "Portfolio" },
                      { key: "contact", label: "Contact" },
                      { key: "goals", label: "Goals" },
                    ].map((tab) => (
                      <li key={tab.key}>
                        <button
                          onClick={() => setActiveTab(tab.key)}
                          className={`font-medium pb-2 transition-colors relative ${
                            activeTab === tab.key ? "text-yellow-500" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {tab.label}
                          {activeTab === tab.key && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Desktop Content */}
                {activeTab === "about" && (
                  <div className="space-y-12">
                    {/* Hero Section */}
                    <div className="text-center lg:text-left py-12 lg:py-20">
                      <p className="text-yellow-500 text-sm font-medium tracking-wider uppercase mb-4">
                        WELCOME TO MY PORTFOLIO
                      </p>
                      <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Think. Make.
                        <br />
                        Explore.
                      </h1>
                      <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                        A creative space where design meets development, curiosity drives innovation, and every project
                        is a chance to explore new possibilities.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                          size="lg"
                          className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3"
                          onClick={() => setActiveTab("resume")}
                        >
                          My Skills
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-8 py-3"
                          onClick={() => setActiveTab("contact")}
                        >
                          Contact Me
                        </Button>
                      </div>
                    </div>

                    {/* The Story Behind My Work */}
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">The Story Behind My Work</h2>
                      <h3 className="text-2xl font-bold text-white mb-6">
                        About Me
                        <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-3"></div>
                      </h3>

                      <div className="space-y-6 text-gray-300 leading-relaxed text-base">
                        <p>
                          I&apos;m a passionate graphic designer with expertise in digital design, branding, and web
                          development. With a strong foundation in design principles and technical skills, I create
                          visually compelling solutions that communicate effectively.
                        </p>

                        <p>
                          My approach combines traditional design techniques with modern digital tools, including
                          AI-assisted workflows to deliver high-quality results efficiently.
                        </p>

                        <p>
                          I&apos;m constantly exploring new design trends and technologies to expand my creative toolkit and
                          bring fresh perspectives to every project.
                        </p>
                      </div>
                    </div>

                    {/* My Design Philosophy */}
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">My Design Philosophy</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {designPhilosophy.map((principle, index) => (
                          <Card
                            key={index}
                            className="bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-colors"
                          >
                            <CardContent className="p-6 text-center">
                              <h4 className="text-white font-semibold">{principle}</h4>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "resume" && (
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                      My Skills
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-3"></div>
                    </h2>

                    <p className="text-gray-300 text-lg mb-8">
                      Here are some of the technologies and tools I work with
                    </p>

                    <div className="space-y-8">
                      {/* Skills Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                          <Card key={index} className="bg-gray-700/30 border-gray-600">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                                <span className="text-yellow-500 font-medium">{skill.proficiency}%</span>
                              </div>
                              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skill.description}</p>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-300">Proficiency</span>
                                  <span className="text-yellow-500">{skill.proficiency}%</span>
                                </div>
                                <div className="w-full bg-gray-600 rounded-full h-2">
                                  <div
                                    className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.proficiency}%` }}
                                  ></div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* Tools I Work With */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Tools I Work With</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {tools.map((tool, index) => (
                            <Card
                              key={index}
                              className="bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-colors"
                            >
                              <CardContent className="p-4 text-center">
                                <h4 className="text-white font-semibold text-sm mb-1">{tool.name}</h4>
                                <p className="text-gray-400 text-xs">{tool.category}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* My Background */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6">My Background</h3>
                        <h4 className="text-xl font-semibold text-white mb-6">Education & Qualifications</h4>

                        <div className="space-y-6">
                          <Card className="bg-gray-700/30 border-gray-600">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <GraduationCap className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start mb-2">
                                    <h5 className="text-lg font-semibold text-white">Diploma in E-commerce</h5>
                                    <span className="text-yellow-500 text-sm">2018 - 2020</span>
                                  </div>
                                  <p className="text-gray-400 text-sm mb-2">Institution Name</p>
                                  <p className="text-gray-300 text-sm leading-relaxed">
                                    Studied e-commerce principles, digital marketing, web development, and online
                                    business strategies. Gained practical experience in creating and managing online
                                    stores and digital marketing campaigns.
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-gray-700/30 border-gray-600">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Award className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start mb-2">
                                    <h5 className="text-lg font-semibold text-white">Professional Certifications</h5>
                                    <span className="text-yellow-500 text-sm">2020 - Present</span>
                                  </div>
                                  <p className="text-gray-400 text-sm mb-2">Various Platforms</p>
                                  <p className="text-gray-300 text-sm leading-relaxed">
                                    Continuously expanding skills through professional development courses in graphic
                                    design, digital marketing, and emerging technologies.
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                      Working Experience
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-3"></div>
                    </h2>

                    <p className="text-gray-300 text-lg mb-8">My professional journey and career progression</p>

                    <div className="space-y-6">
                      {workExperience.map((job, index) => (
                        <Card key={index} className="bg-gray-700/30 border-gray-600">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Briefcase className="w-6 h-6 text-yellow-500" />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h4 className="text-lg font-semibold text-white">{job.company}</h4>
                                    <h5 className="text-yellow-500 font-medium">{job.position}</h5>
                                  </div>
                                  <div className="text-right">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                      <Calendar className="w-4 h-4" />
                                      <span>{job.period}</span>
                                    </div>
                                    {job.current && (
                                      <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30 mt-1">
                                        Current
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                <div className="mt-3">
                                  <p className={`text-gray-300 text-sm leading-relaxed ${!expandedJobs[index] ? 'line-clamp-3' : ''}`}>
                                    {job.description}
                                  </p>
                                  <button 
                                    onClick={() => setExpandedJobs(prev => ({...prev, [index]: !prev[index]}))}
                                    className="text-yellow-500 text-sm mt-1 hover:underline focus:outline-none"
                                  >
                                    {expandedJobs[index] ? 'Show less' : 'Read more'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "portfolio" && (
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                      Portfolio
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-3"></div>
                    </h2>

                    {/* Website Links Section */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4">Websites I've Built</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {displayedWebsites.map((site) => (
                          <li key={site} className="">
                            <a
                              href={`https://${site}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-gray-700/30 border border-gray-600 rounded-lg px-4 py-3 text-yellow-400 hover:bg-yellow-500/20 hover:text-yellow-600 transition-colors text-center text-base font-medium shadow-sm"
                            >
                              {site}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {websites.length > 3 && (
                        <div className="mt-4 text-center">
                          <Button
                            onClick={() => setShowAllWebsites(!showAllWebsites)}
                            variant="outline"
                            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
                          >
                            {showAllWebsites ? `Show Less` : `Show All ${websites.length} Websites`}
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Portfolio Filters */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-4">
                        {portfolioFilters.map((filter) => (
                          <button
                            key={filter}
                            onClick={() => setPortfolioFilter(filter)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              portfolioFilter === filter
                                ? "bg-yellow-600 text-white"
                                : "bg-gray-700/30 text-gray-300 hover:bg-gray-700/50"
                            }`}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredProjects.map((project) => (
                        <Card
                          key={project.id}
                          className="bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-all duration-300 group overflow-hidden"
                        >
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={400}
                                height={192}
                                className="w-full h-48 object-cover"
                                unoptimized={!project.image}
                              />
                              <button
                                onClick={() => setSelectedImage(project.image)}
                                className="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors group"
                              >
                                <Eye className="w-4 h-4 text-white group-hover:text-black" />
                              </button>
                            </div>
                            <div className="p-4">
                              <h4 className="text-white font-semibold mb-2">{project.title}</h4>
                              <p className="text-gray-400 text-sm">{project.description}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "contact" && (
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                      Get In Touch
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-3"></div>
                    </h2>

                    <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Start a Conversation</h3>
                    <h4 className="text-xl font-semibold text-white mb-6">Contact Information</h4>

                    <div className="max-w-2xl space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <a href="mailto:hewmannxuan@gmail.com">
                          <Card className="bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-colors cursor-pointer">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                                  <Mail className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div>
                                  <h4 className="text-white font-semibold mb-1">Email</h4>
                                  <p className="text-gray-400">hewmannxuan@gmail.com</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </a>

                        <a href="https://wa.me/60143108832">
                          <Card className="bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-colors cursor-pointer">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                                  <MessageCircle className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div>
                                  <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                                  <p className="text-gray-400">0143108832</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      </div>

                      <p className="text-gray-300 text-base leading-relaxed">
                        Feel free to reach out for collaborations, project inquiries, or just to say hello. I&apos;m always
                        open to discussing new projects and creative ideas.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "goals" && (
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                      My Goals & Vision
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-3"></div>
                    </h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Future Aspirations</h3>
                        <Card className="bg-gray-700/30 border-gray-600">
                          <CardContent className="p-6">
                            <div className="space-y-6 text-gray-300 leading-relaxed">
                              <p className="text-lg">
                                Beyond my current backend and technical work, I have an ambitious goal to transform
                                myself into a content creator and influencer. This represents a significant personal
                                challenge as I work to overcome my camera shyness and build confidence in front of the
                                lens.
                              </p>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <Card className="bg-gray-600/30 border-gray-500">
                                  <CardContent className="p-4">
                                    <h4 className="text-yellow-500 font-semibold mb-2">Personal Growth</h4>
                                    <p className="text-sm text-gray-300">
                                      Overcoming camera shyness and building confidence to share my expertise and
                                      creative journey with a wider audience.
                                    </p>
                                  </CardContent>
                                </Card>

                                <Card className="bg-gray-600/30 border-gray-500">
                                  <CardContent className="p-4">
                                    <h4 className="text-yellow-500 font-semibold mb-2">Increased Visibility</h4>
                                    <p className="text-sm text-gray-300">
                                      Building a strong online presence to showcase my work, connect with like-minded
                                      professionals, and expand my network.
                                    </p>
                                  </CardContent>
                                </Card>

                                <Card className="bg-gray-600/30 border-gray-500">
                                  <CardContent className="p-4">
                                    <h4 className="text-yellow-500 font-semibold mb-2">Financial Independence</h4>
                                    <p className="text-sm text-gray-300">
                                      Creating additional income streams through content creation to fund my continuous
                                      learning and skill development.
                                    </p>
                                  </CardContent>
                                </Card>

                                <Card className="bg-gray-600/30 border-gray-500">
                                  <CardContent className="p-4">
                                    <h4 className="text-yellow-500 font-semibold mb-2">Continuous Learning</h4>
                                    <p className="text-sm text-gray-300">
                                      Investing in courses, tools, and experiences that will enhance my creative and
                                      technical capabilities.
                                    </p>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Why This Matters</h3>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <p>
                            The digital landscape offers unprecedented opportunities for creative professionals to share
                            their knowledge, build communities, and create sustainable income streams. By stepping out
                            of my comfort zone and embracing content creation, I aim to:
                          </p>

                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Share my design and development journey with others who might benefit from my experiences
                            </li>
                            <li>Build authentic connections with fellow creatives and potential collaborators</li>
                            <li>Create educational content that helps others learn design and development skills</li>
                            <li>
                              Establish multiple revenue streams to support my professional growth and learning goals
                            </li>
                            <li>Challenge myself to grow both personally and professionally</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6">The Path Forward</h3>
                        <Card className="bg-gray-700/30 border-gray-600">
                          <CardContent className="p-6">
                            <p className="text-gray-300 leading-relaxed">
                              This journey represents more than just career advancement—it&apos;s about personal
                              transformation and embracing new challenges. While overcoming camera shyness may seem
                              daunting, I believe that authentic content creation, combined with my technical skills and
                              creative background, can open doors to opportunities I haven&apos;t yet imagined.
                            </p>

                            <p className="text-gray-300 leading-relaxed mt-4">
                              The goal isn&apos;t just to become visible online, but to create meaningful content that adds
                              value to the creative community while building the financial foundation needed to pursue
                              advanced learning opportunities and cutting-edge tools in design and development.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen p-4 space-y-4">
        {/* Mobile Profile Card */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 ring-2 ring-yellow-500/20">
                  <AvatarImage
                    src="/images/me.png"
                    alt="Jay Hew"
                    className="object-cover object-center"
                    style={{ objectPosition: "center 75%" }}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold">
                    JH
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-xl font-bold text-white">Jay Hew</h1>
                  <p className="text-gray-300 text-sm">Graphic Designer & Developer</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                onClick={() => setShowContacts(!showContacts)}
              >
                Show Contacts
              </Button>
            </div>

            {/* Contact Info (collapsible) */}
            {showContacts && (
              <div className="mt-6 pt-6 border-t border-gray-600 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  <a
                    href="mailto:hewmannxuan@gmail.com"
                    className="text-gray-300 text-sm hover:text-yellow-500 transition-colors"
                  >
                    hewmannxuan@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-yellow-500" />
                  <a
                    href="https://wa.me/60143108832"
                    className="text-gray-300 text-sm hover:text-yellow-500 transition-colors"
                  >
                    0143108832
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-300 text-sm">Petaling Jaya, Malaysia</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">LANGUAGES</p>
                    <div className="mt-2 space-y-2">
                      {languageSkills.map((language, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">{language.name}</span>
                            <span className="text-xs text-yellow-500">{language.proficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
                            <div
                              className="bg-yellow-500 h-1 rounded-full"
                              style={{ width: `${language.proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-yellow-500" />
                  <div className="flex items-center gap-2">
                    <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30 text-xs font-bold">
                      INFJ
                    </Badge>
                    <span className="text-xs text-gray-400">The Advocate</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Mobile Main Content */}
        <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
          <CardContent className="p-6">
            {activeTab === "about" && (
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-yellow-500 text-sm font-medium tracking-wider uppercase mb-4">
                    WELCOME TO MY PORTFOLIO
                  </p>
                  <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
                    Think. Make.
                    <br />
                    Explore.
                  </h1>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    A creative space where design meets development, curiosity drives innovation, and every project is a
                    chance to explore new possibilities.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button
                      className="bg-yellow-600 hover:bg-yellow-700 text-white"
                      onClick={() => setActiveTab("resume")}
                    >
                      My Skills
                    </Button>
                    <Button
                      variant="outline"
                      className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
                      onClick={() => setActiveTab("contact")}
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mb-4"></div>
                  <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                    <p>
                      I&apos;m a passionate graphic designer with expertise in digital design, branding, and web development.
                      With a strong foundation in design principles and technical skills, I create visually compelling
                      solutions that communicate effectively.
                    </p>
                    <p>
                      My approach combines traditional design techniques with modern digital tools, including
                      AI-assisted workflows to deliver high-quality results efficiently.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">My Design Philosophy</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {designPhilosophy.map((principle, index) => (
                      <Card key={index} className="bg-gray-700/30 border-gray-600">
                        <CardContent className="p-4 text-center">
                          <h4 className="text-white font-medium text-sm">{principle}</h4>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "resume" && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  My Skills
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-2"></div>
                </h2>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <Card key={index} className="bg-gray-700/30 border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-white font-semibold">{skill.name}</h4>
                          <span className="text-yellow-500 text-sm">{skill.proficiency}%</span>
                        </div>
                        <p className="text-gray-400 text-xs mb-3 leading-relaxed">{skill.description}</p>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div
                            className="bg-yellow-500 h-2 rounded-full"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Working Experience
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-2"></div>
                </h2>

                <div className="space-y-4">
                  {workExperience.map((job, index) => (
                    <Card key={index} className="bg-gray-700/30 border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-4 h-4 text-yellow-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <div className="min-w-0 flex-1">
                                <h4 className="text-white font-semibold text-sm">{job.company}</h4>
                                <h5 className="text-yellow-500 text-xs font-medium">{job.position}</h5>
                              </div>
                              <div className="text-right ml-2 flex-shrink-0">
                                <div className="flex items-center gap-1 text-gray-400 text-xs">
                                  <Calendar className="w-3 h-3" />
                                  <span className="text-xs">{job.period}</span>
                                </div>
                                {job.current && (
                                  <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30 mt-1 text-xs">
                                    Current
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-gray-300 text-xs leading-relaxed">{job.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "portfolio" && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Portfolio
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-2"></div>
                </h2>

                {/* Mobile Website Links Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-3">Websites I've Built</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {displayedWebsites.map((site) => (
                      <a
                        key={site}
                        href={`https://${site}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-700/30 border border-gray-600 rounded-lg px-3 py-2 text-yellow-400 hover:bg-yellow-500/20 hover:text-yellow-600 transition-colors text-center text-sm font-medium"
                      >
                        {site}
                      </a>
                    ))}
                  </div>
                  {websites.length > 3 && (
                    <div className="mt-3 text-center">
                      <Button
                        onClick={() => setShowAllWebsites(!showAllWebsites)}
                        variant="outline"
                        size="sm"
                        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white text-xs"
                      >
                        {showAllWebsites ? `Show Less` : `Show All ${websites.length}`}
                      </Button>
                    </div>
                  )}
                </div>

                {/* Mobile Portfolio Filters */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {portfolioFilters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setPortfolioFilter(filter)}
                        className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                          portfolioFilter === filter
                            ? "bg-yellow-500 text-black font-medium"
                            : "bg-gray-700/30 text-gray-300"
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {filteredProjects.map((project) => (
                    <Card key={project.id} className="bg-gray-700/30 border-gray-600 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={400}
                            height={128}
                            className="w-full h-32 object-cover"
                            unoptimized={!project.image}
                          />
                          <button
                            onClick={() => setSelectedImage(project.image)}
                            className="absolute top-2 right-2 w-6 h-6 bg-black/60 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors group"
                          >
                            <Eye className="w-3 h-3 text-white group-hover:text-black" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                          <p className="text-gray-400 text-xs">{project.category}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Get In Touch
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-2"></div>
                </h2>

                <div className="space-y-4">
                  <a href="mailto:hewmannxuan@gmail.com">
                    <Card className="bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-yellow-500" />
                          <div>
                            <h4 className="text-white font-semibold text-sm">Email</h4>
                            <p className="text-gray-400 text-xs">hewmannxuan@gmail.com</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>

                  <a href="https://wa.me/60143108832">
                    <Card className="bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <MessageCircle className="w-5 h-5 text-yellow-500" />
                          <div>
                            <h4 className="text-white font-semibold text-sm">WhatsApp</h4>
                            <p className="text-gray-400 text-xs">0143108832</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mt-6">
                  Feel free to reach out for collaborations, project inquiries, or just to say hello. I&apos;m always open to
                  discussing new projects and creative ideas.
                </p>
              </div>
            )}

            {activeTab === "goals" && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  My Goals & Vision
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mt-2"></div>
                </h2>

                <div className="space-y-6">
                  <Card className="bg-gray-700/30 border-gray-600">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-white mb-3">Future Aspirations</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        Beyond my current backend and technical work, I aim to transform myself into a content creator
                        and influencer, overcoming my camera shyness to build a stronger online presence.
                      </p>

                      <div className="grid grid-cols-1 gap-3">
                        <div className="bg-gray-600/30 rounded-lg p-3">
                          <h4 className="text-yellow-500 font-semibold text-sm mb-1">Personal Growth</h4>
                          <p className="text-xs text-gray-300">
                            Building confidence to share my expertise with a wider audience.
                          </p>
                        </div>

                        <div className="bg-gray-600/30 rounded-lg p-3">
                          <h4 className="text-yellow-500 font-semibold text-sm mb-1">Increased Visibility</h4>
                          <p className="text-xs text-gray-300">Expanding my network and showcasing my work online.</p>
                        </div>

                        <div className="bg-gray-600/30 rounded-lg p-3">
                          <h4 className="text-yellow-500 font-semibold text-sm mb-1">Financial Independence</h4>
                          <p className="text-xs text-gray-300">Creating income streams to fund continuous learning.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-700/30 border-gray-600">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-white mb-3">The Vision</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        This journey represents personal transformation and embracing new challenges. By creating
                        authentic content and building meaningful connections, I aim to establish multiple revenue
                        streams while adding value to the creative community and supporting my advanced learning goals.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Mobile Bottom Navigation */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm sticky bottom-4">
          <CardContent className="p-4">
            <div className="flex justify-around text-xs">
              {[
                { key: "about", label: "About" },
                { key: "resume", label: "Resume" },
                { key: "experience", label: "Experience" },
                { key: "portfolio", label: "Portfolio" },
                { key: "contact", label: "Contact" },
                { key: "goals", label: "Goals" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`font-medium transition-colors ${
                    activeTab === tab.key ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
