"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  BookOpen, 
  Database, 
  Server, 
  Globe, 
  Code2,
  Container,
  Search,
  FileText,
  Users,
  Archive,
  Target,
  AlertTriangle,
  CheckCircle2,
  X,
  Layers,
  Shield,
  Zap,
  Brain
} from "lucide-react"

interface ImageModalProps {
  isOpen: boolean
  imageSrc: string
  imageAlt: string
  imageTitle: string
  onClose: () => void
}

function ImageModal({ isOpen, imageSrc, imageAlt, imageTitle, onClose }: ImageModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-[98vw] max-h-[98vh]" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="bg-white dark:bg-gray-900 rounded-lg p-2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-contain rounded"
            style={{ maxWidth: '95vw', maxHeight: '90vh' }}
          />
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 px-4">
            {imageTitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function BrautiganLibraryPage() {
  const [imageModal, setImageModal] = useState<{
    isOpen: boolean
    imageSrc: string
    imageAlt: string
    imageTitle: string
  }>({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
    imageTitle: ""
  })

  const openImageModal = (imageSrc: string, imageAlt: string, imageTitle: string) => {
    setImageModal({ isOpen: true, imageSrc, imageAlt, imageTitle })
  }

  const closeImageModal = () => {
    setImageModal({ isOpen: false, imageSrc: "", imageAlt: "", imageTitle: "" })
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/90">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Brain className="h-5 w-5 text-primary" />
            <span>Zerayacob Meshesha</span>
          </Link>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]" />
          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                  Full-Stack Development
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Brautigan Library Website
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A sophisticated full-stack digital archive for unpublished manuscripts, featuring the innovative MAYONNAISE classification system, containerized deployment, and modern web architecture
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Layers className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium">Full-Stack</h3>
                  <p className="text-sm text-muted-foreground">Architecture</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Container className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  <h3 className="font-medium">Dockerized</h3>
                  <p className="text-sm text-muted-foreground">Deployment</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Archive className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium">Digital Archive</h3>
                  <p className="text-sm text-muted-foreground">System</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Search className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  <h3 className="font-medium">MAYONNAISE</h3>
                  <p className="text-sm text-muted-foreground">Classification</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="https://github.com/ZMeshCode/Bruatigan-Library-website" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                  <Link href="https://brautigan-library-project.vercel.app/" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                  Project Overview
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Digital Preservation of Literary Heritage</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                      Traditional Archive Limitations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Traditional manuscript archiving systems face significant challenges in the digital age:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Physical storage limitations and accessibility issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Lack of standardized classification systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Difficulty in searching and discovering manuscripts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Risk of deterioration and permanent loss</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-6 w-6 text-indigo-600" />
                      Modern Digital Archive Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      A comprehensive full-stack platform that revolutionizes manuscript preservation and accessibility:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">MAYONNAISE classification system for organized cataloging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Advanced search and discovery capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Secure, scalable PostgreSQL database architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Containerized deployment for global accessibility</span>
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
                  Application Interface
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Digital Archive in Action</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Explore the user interface and features of the Brautigan Library digital archive system
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-2 flex items-center justify-center">
                    <img
                      src="/images/projects/Bruatigan-website-screenshot.png"
                      alt="Brautigan Library homepage showing navigation, search functionality, and manuscript catalog interface"
                      className="rounded-lg shadow-md w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(
                        "/images/projects/Bruatigan-website-screenshot.png",
                        "Brautigan Library homepage showing navigation, search functionality, and manuscript catalog interface",
                        "Library Homepage Interface"
                      )}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Homepage Interface</CardTitle>
                    <CardDescription>
                      Modern, responsive web interface showcasing the Brautigan Library with navigation, search functionality, and access to the digital manuscript catalog.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-2 flex items-center justify-center">
                    <img
                      src="/images/projects/supabase-schema-ahflraylcgzhxciyhsmc.png"
                      alt="Database schema visualization showing normalized table structure and relationships for manuscript storage"
                      className="rounded-lg shadow-md w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(
                        "/images/projects/supabase-schema-ahflraylcgzhxciyhsmc.png",
                        "Database schema visualization showing normalized table structure and relationships for manuscript storage",
                        "Database Architecture Schema"
                      )}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Database Architecture</CardTitle>
                    <CardDescription>
                      Comprehensive database schema showing the normalized table structure, relationships, and data architecture powering the digital manuscript archive system.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Modern Full-Stack Technologies</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-6 w-6 text-purple-600" />
                      Frontend
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Next.js</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">React</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">TypeScript</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Tailwind CSS</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Modern React framework with server-side rendering and responsive design for optimal user experience
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="h-6 w-6 text-indigo-600" />
                      Backend
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Flask</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Python</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">REST API</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">SQLAlchemy</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Robust Python backend with Flask framework providing RESTful APIs and data management
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-6 w-6 text-purple-600" />
                      Database
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">PostgreSQL</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">ACID Compliance</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Indexing</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Relations</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enterprise-grade PostgreSQL database with optimized schemas for manuscript metadata storage
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Container className="h-6 w-6 text-indigo-600" />
                      DevOps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Docker</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Compose</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Nginx</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">CI/CD</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Containerized deployment with Docker for consistent environments and scalable infrastructure
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-6 w-6 text-purple-600" />
                      Classification
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">MAYONNAISE</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Taxonomy</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Metadata</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Search</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Custom MAYONNAISE classification system for systematic organization and discovery of manuscripts
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-indigo-600" />
                      Security & Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Authentication</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Encryption</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Caching</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Optimization</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Secure access controls with performance optimization for fast manuscript discovery and retrieval
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Impact */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                  Project Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Skills Demonstrated & Cultural Preservation</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-6 w-6 text-purple-600" />
                      Technical Skills Demonstrated
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Full-Stack Web Development (Next.js + Flask)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Database Design & PostgreSQL Management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Docker Containerization & DevOps</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">RESTful API Design & Implementation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Modern Frontend Development (React/TypeScript)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Information Architecture & Classification Systems</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Archive className="h-6 w-6 text-indigo-600" />
                      Real-World Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-start gap-2">
                        <BookOpen className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Digital Libraries</span>
                          <p className="text-xs text-muted-foreground">Modern manuscript preservation and access systems</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Academic Research</span>
                          <p className="text-xs text-muted-foreground">Enhanced discovery tools for scholars and researchers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Cultural Preservation</span>
                          <p className="text-xs text-muted-foreground">Digital safeguarding of literary heritage</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Search className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Information Systems</span>
                          <p className="text-xs text-muted-foreground">Advanced cataloging and retrieval platforms</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
              © 2024 Zerayacob Meshesha. Advancing healthcare through AI and data science.
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

      <ImageModal
        isOpen={imageModal.isOpen}
        imageSrc={imageModal.imageSrc}
        imageAlt={imageModal.imageAlt}
        imageTitle={imageModal.imageTitle}
        onClose={closeImageModal}
      />
    </div>
  )
} 