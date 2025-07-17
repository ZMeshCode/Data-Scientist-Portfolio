"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  ArrowLeft, 
  Brain, 
  Github, 
  Code2, 
  Database, 
  Zap,
  Users,
  Heart,
  MessageSquare,
  Stethoscope,
  TrendingUp,
  CheckCircle,
  Globe,
  BarChart3
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticleBackground } from "@/components/particle-background"
import { ImageModal } from "@/components/image-modal"

export default function PatientSentimentAnalysisPage() {
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
                  Patient Sentiment Analysis
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  An advanced NLP-powered healthcare analytics tool that analyzes patient reviews and feedback to extract meaningful sentiment insights, helping healthcare providers understand patient experiences and improve service quality.
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="https://github.com/ZMeshCode/Patient-Sentiment-Analysis-Deep-Learning" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <Heart className="h-10 w-10 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-lg mb-2">Patient-Centered</h3>
                <p className="text-sm text-muted-foreground">Focus on understanding patient experiences and emotions</p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <MessageSquare className="h-10 w-10 mx-auto mb-4 text-indigo-600" />
                <h3 className="font-semibold text-lg mb-2">NLP Processing</h3>
                <p className="text-sm text-muted-foreground">Advanced natural language processing for text analysis</p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <TrendingUp className="h-10 w-10 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-lg mb-2">Actionable Insights</h3>
                <p className="text-sm text-muted-foreground">Generate insights to improve healthcare services</p>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Transforming Patient Feedback into Insights</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="h-6 w-6 text-purple-600" />
                      The Healthcare Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Healthcare providers receive vast amounts of patient feedback through reviews, surveys, and comments, but manually analyzing this data is:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Time-consuming and resource-intensive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Subjective and inconsistent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Difficult to scale with growing feedback volume</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Limited ability to identify trends and patterns</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-indigo-600" />
                      AI-Powered Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      This deep learning solution leverages advanced NLP techniques to automatically analyze patient sentiment:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Automated sentiment classification (positive, negative, neutral)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Emotion detection and intensity scoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Topic modeling and keyword extraction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Trend analysis and reporting dashboard</span>
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
                  Analysis Results
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Deep Learning in Action</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Visualization of sentiment analysis results and model performance metrics
                </p>
              </div>

              <div className="flex justify-center">
                <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-lg max-w-2xl w-full">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-2 flex items-center justify-center">
                    <img
                      src="/images/projects/model-performance.png"
                      alt="Model performance dashboard showing sentiment analysis validation metrics, word cloud, and analysis history"
                      className="rounded-lg shadow-md w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(
                        "/images/projects/model-performance.png",
                        "Model performance dashboard showing sentiment analysis validation metrics, word cloud, and analysis history",
                        "Model Performance Dashboard"
                      )}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Model Performance Dashboard</CardTitle>
                    <CardDescription>
                      Comprehensive analytics dashboard displaying sentiment distribution, word cloud visualization, sentiment timeline, and detailed analysis history with model performance validation metrics.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Built With Advanced Technologies</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-purple-600" />
                      Deep Learning & NLP
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          TensorFlow
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          Keras
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          NLTK
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          spaCy
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          BERT
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-6 w-6 text-indigo-600" />
                      Data Processing & Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
                          Python
                        </Badge>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
                          Pandas
                        </Badge>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
                          NumPy
                        </Badge>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
                          Scikit-learn
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                      Visualization & Deployment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          Matplotlib
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          Seaborn
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          Plotly
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                          Jupyter
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features & Impact */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                  Impact & Applications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Real-World Healthcare Impact</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-purple-600" />
                      Key Features Implemented
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">NLP Processing</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Text preprocessing and cleaning</li>
                          <li>• Tokenization and lemmatization</li>
                          <li>• Feature extraction and encoding</li>
                          <li>• Multi-class sentiment classification</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Deep Learning Models</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• LSTM and GRU networks</li>
                          <li>• BERT transformer models</li>
                          <li>• Attention mechanisms</li>
                          <li>• Model ensemble techniques</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-6 w-6 text-indigo-600" />
                      Healthcare Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      This project demonstrates practical applications in healthcare analytics:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-purple-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Patient Experience Monitoring</h4>
                          <p className="text-xs text-muted-foreground">Continuous analysis of patient feedback to identify service improvements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-purple-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Quality Improvement Initiatives</h4>
                          <p className="text-xs text-muted-foreground">Data-driven insights for healthcare quality enhancement programs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-purple-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Predictive Analytics</h4>
                          <p className="text-xs text-muted-foreground">Early identification of potential patient satisfaction issues</p>
                        </div>
                      </div>
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
                Interested in Healthcare Analytics?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                Explore the implementation details and see how deep learning can transform patient feedback into actionable healthcare insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="https://github.com/ZMeshCode/Patient-Sentiment-Analysis-Deep-Learning" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
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