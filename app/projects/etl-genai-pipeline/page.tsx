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
  Database, 
  Zap, 
  FileText, 
  Brain, 
  Code2,
  Settings,
  Upload,
  Search,
  Bot,
  Target,
  AlertTriangle,
  CheckCircle2,
  X,
  Workflow,
  Shield,
  Clock,
  Layers
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

export default function ETLGenAIPipelinePage() {
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
                  AI & Data Engineering
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  ETL Pipeline for GenAI
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A robust, scalable ETL pipeline designed to process diverse unstructured data sources and prepare them for seamless integration with Generative AI applications, particularly RAG systems
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Workflow className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium">Multi-Format</h3>
                  <p className="text-sm text-muted-foreground">Data Processing</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Bot className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  <h3 className="font-medium">RAG Ready</h3>
                  <p className="text-sm text-muted-foreground">AI Integration</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium">Scalable</h3>
                  <p className="text-sm text-muted-foreground">Architecture</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  <h3 className="font-medium">Production</h3>
                  <p className="text-sm text-muted-foreground">Ready</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="https://github.com/ZMeshCode/etl-pipeline-for-genai" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
                <Button variant="outline" className="border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Documentation
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powering AI with Clean, Structured Data</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                      GenAI Data Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Generative AI applications, especially RAG systems, face significant data preprocessing challenges:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Diverse unstructured data formats (PDFs, Word docs, images, web pages)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Complex text extraction and cleaning requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Inconsistent data quality and formatting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Manual preprocessing bottlenecks and scalability issues</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-6 w-6 text-indigo-600" />
                      Automated ETL Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      A comprehensive pipeline that automates data ingestion, transformation, and preparation for AI applications:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Multi-format data ingestion (PDF, DOCX, images, websites)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Intelligent text extraction and preprocessing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Automated chunking and vector preparation for RAG</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Scalable, production-ready architecture</span>
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
                  Pipeline Architecture
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">ETL Pipeline in Action</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Visualization of the automated data processing pipeline and GenAI integration workflow
                </p>
              </div>

              <div className="flex justify-center">
                <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-lg max-w-4xl w-full">
                  <div 
                    className="cursor-pointer transition-transform hover:scale-[1.02]"
                    onClick={() => openImageModal(
                      "/images/projects/etl-architecture.png",
                      "ETL Pipeline Architecture Diagram",
                      "Comprehensive ETL Pipeline Architecture - Data ingestion, transformation, and GenAI integration workflow"
                    )}
                  >
                    <img
                      src="/images/projects/etl-architecture.png"
                      alt="ETL Pipeline Architecture Diagram"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Pipeline Architecture Diagram</CardTitle>
                    <CardDescription>
                      Comprehensive visualization of the ETL pipeline showing data ingestion from multiple sources (PDF, DOCX, HTML, TXT, JSON), 
                      transformation stages with document parsing and chunking, quality validation, and final storage in vector databases for GenAI integration. 
                      The architecture includes Redis queuing, Celery workers, and both structured and unstructured data storage solutions.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Modern Data Engineering Technologies</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-6 w-6 text-purple-600" />
                      Core Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Python</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Apache Airflow</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Pandas</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">NumPy</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Robust Python-based pipeline with workflow orchestration and data manipulation capabilities
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-indigo-600" />
                      Document Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">PyPDF2</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">python-docx</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">BeautifulSoup</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Tesseract OCR</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive text extraction from PDFs, Word documents, web pages, and image-based content
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-purple-600" />
                      AI Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">LangChain</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">OpenAI</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Embeddings</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Vector Stores</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Seamless integration with RAG systems and generative AI applications through proper chunking and embedding
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-6 w-6 text-indigo-600" />
                      Data Storage
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">PostgreSQL</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">MongoDB</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Redis</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">MinIO</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Multi-tier storage architecture supporting structured metadata, document storage, and caching
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-6 w-6 text-purple-600" />
                      Workflow Orchestration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Docker</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Kubernetes</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Celery</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">RabbitMQ</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Containerized deployment with distributed task processing and message queuing for scalability
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-indigo-600" />
                      Quality & Monitoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Great Expectations</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Prometheus</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Grafana</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Logging</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive data quality validation, monitoring, and observability for production environments
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Skills Demonstrated & AI Applications</h2>
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
                        <span className="text-sm">Advanced Data Engineering & Pipeline Architecture</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Multi-Format Document Processing & Text Extraction</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Workflow Orchestration & Automation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">GenAI Integration & RAG System Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Containerization & Scalable Deployment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Data Quality Validation & Monitoring</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bot className="h-6 w-6 text-indigo-600" />
                      Real-World AI Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-start gap-2">
                        <Brain className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">RAG System Foundation</span>
                          <p className="text-xs text-muted-foreground">Data preparation for retrieval-augmented generation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Search className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Enterprise Knowledge Bases</span>
                          <p className="text-xs text-muted-foreground">Automated document ingestion for corporate AI systems</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Content Management</span>
                          <p className="text-xs text-muted-foreground">Intelligent document processing and categorization</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Layers className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Multi-Modal AI Systems</span>
                          <p className="text-xs text-muted-foreground">Data pipelines for diverse AI application needs</p>
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