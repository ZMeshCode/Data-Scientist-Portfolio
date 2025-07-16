"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  ArrowLeft, 
  Brain, 
  Github, 
  ExternalLink, 
  Code2, 
  Database, 
  Zap,
  Users,
  Clock,
  FileText,
  Bot,
  Sparkles,
  CheckCircle,
  Globe
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ParticleBackground } from "@/components/particle-background"
import { PrivateRepoModal } from "@/components/private-repo-modal"
import { ImageModal } from "@/components/image-modal"

export default function LLMLegalAnalyzerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageModal, setImageModal] = useState<{
    isOpen: boolean
    imageSrc: string
    imageAlt: string
    title: string
  }>({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
    title: ""
  })

  const openImageModal = (imageSrc: string, imageAlt: string, title: string) => {
    setImageModal({
      isOpen: true,
      imageSrc,
      imageAlt,
      title
    })
  }

  const closeImageModal = () => {
    setImageModal(prev => ({ ...prev, isOpen: false }))
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/90">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Brain className="h-5 w-5 text-primary" />
            <span>Zerayacob Meshesha</span>
          </Link>
          <Button
            asChild
            variant="outline"
            className="border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden">
          <ParticleBackground />
          <div className="container mx-auto max-w-7xl px-4 md:px-6 space-y-10 relative z-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                Featured Project
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  LLM Legal Analyzer Tool
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A modern AI-powered tool that revolutionizes legal document analysis, enabling legal professionals to reduce document reading time by up to 80% through intelligent summarization and information extraction.
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Button>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <Clock className="h-10 w-10 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-lg mb-2">80% Time Reduction</h3>
                <p className="text-sm text-muted-foreground">Dramatically reduce document reading and analysis time</p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <Brain className="h-10 w-10 mx-auto mb-4 text-indigo-600" />
                <h3 className="font-semibold text-lg mb-2">AI-Powered Analysis</h3>
                <p className="text-sm text-muted-foreground">Advanced LLM technology for intelligent document processing</p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <Sparkles className="h-10 w-10 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-lg mb-2">Smart Insights</h3>
                <p className="text-sm text-muted-foreground">Extract key information and generate actionable summaries</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]" />
        </section>

        {/* Project Overview */}
        <section id="overview" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                  Project Overview
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Revolutionizing Legal Document Analysis</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bot className="h-6 w-6 text-purple-600" />
                      The Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Legal professionals spend countless hours reading through lengthy documents, contracts, and case files. This manual process is:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Time-consuming and inefficient</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Prone to human error and oversight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Expensive in terms of billable hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Difficult to scale with increasing caseloads</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-indigo-600" />
                      Our Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      The LLM Legal Analyzer Tool leverages cutting-edge AI technology to transform legal document analysis:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Automated document summarization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Key information extraction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Risk assessment and analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Intuitive modern interface</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                  Screenshots
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">See It In Action</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Screenshots from the actual legal document analysis interface showing the tool in use
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-2 flex items-center justify-center">
                    <img
                      src="/images/projects/llm-overview.png"
                      alt="Legal document analysis overview showing executive summary and key aspects"
                      className="rounded-lg shadow-md w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(
                        "/images/projects/llm-overview.png",
                        "Legal document analysis overview showing executive summary and key aspects",
                        "Document Analysis Overview"
                      )}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Document Analysis Overview</CardTitle>
                    <CardDescription>
                      Executive summary interface showing legal document breakdown with key aspects, parties involved, cause of action, and comprehensive case details including jurisdiction and timeline.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-2 flex items-center justify-center">
                    <img
                      src="/images/projects/llm-overview-2.png"
                      alt="Risk assessment and compliance analysis with detailed recommendations"
                      className="rounded-lg shadow-md w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(
                        "/images/projects/llm-overview-2.png",
                        "Risk assessment and compliance analysis with detailed recommendations",
                        "Risk Assessment & Compliance Analysis"
                      )}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Risk Assessment & Compliance Analysis</CardTitle>
                    <CardDescription>
                      Advanced risk assessment interface displaying detailed compliance checks, severity levels, recommendations, and timeline events with comprehensive legal document analysis and actionable insights.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                  Technology Stack
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Built With Modern Technologies</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-purple-600" />
                      AI & Machine Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          OpenAI GPT-4
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          LangChain
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          Hugging Face
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          spaCy
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-6 w-6 text-indigo-600" />
                      Backend Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
                          Python
                        </Badge>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
                          FastAPI
                        </Badge>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
                          PyPDF2
                        </Badge>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
                          Pydantic
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-6 w-6 text-purple-600" />
                      Frontend Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          React
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          TypeScript
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          Tailwind CSS
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          Axios
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Collaboration */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                  Skills & Collaboration
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Development Expertise</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-purple-600" />
                      Key Skills Demonstrated
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">AI & Machine Learning</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Large Language Model Integration</li>
                          <li>• Natural Language Processing</li>
                          <li>• Document Processing</li>
                          <li>• Prompt Engineering</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Software Development</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• API Development</li>
                          <li>• Full-Stack Architecture</li>
                          <li>• Data Processing Pipelines</li>
                          <li>• Error Handling & Validation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-6 w-6 text-indigo-600" />
                      Team Collaboration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      This project was built in collaboration with my talented frontend developer friend:
                    </p>
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800/30">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                          TN
                        </div>
                        <div>
                          <h4 className="font-semibold">Tushar Nandwani</h4>
                          <p className="text-sm text-muted-foreground">Frontend Developer</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">
                        Tushar brought exceptional frontend expertise to create an intuitive and modern user interface, focusing on user experience and responsive design principles.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Interested in Learning More?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                Explore the source code, documentation, and see how we're revolutionizing legal document analysis with AI.
              </p>
                             <div className="flex flex-col sm:flex-row gap-3 justify-center">
                 <Button
                   onClick={() => setIsModalOpen(true)}
                   className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                 >
                   <Github className="mr-2 h-4 w-4" />
                   View on GitHub
                 </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-background/50 border-t border-purple-200 dark:border-purple-800/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Zerayacob Meshesha. Built with passion for AI and legal innovation.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm hover:text-purple-600 transition-colors">
                Portfolio
              </Link>
              <Link href="https://github.com/ZMeshCode" target="_blank" className="text-sm hover:text-purple-600 transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Private Repository Modal */}
      <PrivateRepoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle="LLM Legal Analyzer Tool"
      />

      {/* Image Enlargement Modal */}
      <ImageModal
        isOpen={imageModal.isOpen}
        onClose={closeImageModal}
        imageSrc={imageModal.imageSrc}
        imageAlt={imageModal.imageAlt}
        title={imageModal.title}
      />
    </div>
  )
} 