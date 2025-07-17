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
  TrendingUp, 
  BarChart3, 
  Brain, 
  DollarSign,
  LineChart,
  Activity,
  Target,
  AlertTriangle,
  CheckCircle2,
  X,
  Calculator,
  Calendar,
  Zap,
  Database
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

export default function StockPredictionPage() {
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
                  Financial Analytics
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Stock Price Prediction
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  An advanced machine learning system that combines sentiment analysis from financial news and social media with technical indicators to predict stock prices with remarkable accuracy
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium">92% Accuracy</h3>
                  <p className="text-sm text-muted-foreground">Prediction Rate</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Brain className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  <h3 className="font-medium">Multi-Modal</h3>
                  <p className="text-sm text-muted-foreground">AI Analysis</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Activity className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium">Real-time</h3>
                  <p className="text-sm text-muted-foreground">Market Data</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Target className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  <h3 className="font-medium">5-Day</h3>
                  <p className="text-sm text-muted-foreground">Forecast</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="https://github.com/ZMeshCode/Stock-Prediction" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
                <Button variant="outline" className="border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">AI-Powered Financial Forecasting</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                      Traditional Trading Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Financial markets are notoriously difficult to predict due to their complex, multi-faceted nature:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Traditional technical analysis ignores market sentiment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">News events cause sudden, unpredictable price movements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Manual analysis cannot process vast amounts of real-time data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Emotional trading decisions lead to significant losses</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-indigo-600" />
                      Multi-Modal AI Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      A comprehensive ML system that analyzes multiple data sources to provide accurate predictions:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Real-time sentiment analysis from news and social media</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Advanced technical indicators and price pattern recognition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">LSTM neural networks for temporal pattern learning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">92% accuracy with 5-day forecasting capability</span>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">AI-Driven Market Analysis</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Visualization of multi-modal analysis combining technical indicators with sentiment data
                </p>
              </div>

              <div className="flex justify-center">
                <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-lg max-w-2xl w-full">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-2 flex items-center justify-center">
                    <img
                      src="/images/projects/XG-Boost.png"
                      alt="XGBoost model analysis showing actual vs predicted stock prices for AMZN with residuals distribution and model validation metrics"
                      className="rounded-lg shadow-md w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(
                        "/images/projects/XG-Boost.png",
                        "XGBoost model analysis showing actual vs predicted stock prices for AMZN with residuals distribution and model validation metrics",
                        "XGBoost Stock Prediction Analysis"
                      )}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>XGBoost Model Analysis</CardTitle>
                    <CardDescription>
                      Comprehensive model validation showing actual vs predicted stock prices for Amazon (AMZN), residuals distribution analysis, and prediction accuracy metrics demonstrating the model's performance.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Advanced Financial ML Technologies</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-purple-600" />
                      Machine Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">LSTM</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Random Forest</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">XGBoost</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">TensorFlow</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Deep learning models for temporal pattern recognition and ensemble methods for robust predictions
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-6 w-6 text-indigo-600" />
                      Sentiment Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">NLTK</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">TextBlob</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">VADER</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Twitter API</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Real-time sentiment extraction from financial news, social media, and analyst reports
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                      Technical Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">TA-Lib</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Pandas</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">NumPy</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Indicators</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Advanced technical indicators including RSI, MACD, Bollinger Bands, and custom momentum features
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-6 w-6 text-indigo-600" />
                      Data Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Yahoo Finance</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Alpha Vantage</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">News APIs</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Social Media</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Real-time market data integration with news sentiment and social media monitoring
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LineChart className="h-6 w-6 text-purple-600" />
                      Visualization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Matplotlib</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Plotly</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Seaborn</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Streamlit</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Interactive financial charts with prediction overlays and real-time dashboard capabilities
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-indigo-600" />
                      Deployment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Python</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Jupyter</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Docker</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Automation</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Containerized deployment with automated data pipelines and real-time model updating
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Skills Demonstrated & Financial Applications</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-purple-600" />
                      Technical Skills Demonstrated
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Multi-Modal Machine Learning & Deep Learning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Natural Language Processing & Sentiment Analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Financial Data Analysis & Technical Indicators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Time Series Forecasting & LSTM Networks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Real-time Data Processing & API Integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Feature Engineering & Model Ensemble Methods</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-indigo-600" />
                      Real-World Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Algorithmic Trading Systems</span>
                          <p className="text-xs text-muted-foreground">Automated trading strategies with risk management</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calculator className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Portfolio Management</span>
                          <p className="text-xs text-muted-foreground">Optimized asset allocation and risk assessment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <BarChart3 className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Investment Research</span>
                          <p className="text-xs text-muted-foreground">Data-driven investment recommendations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Risk Management</span>
                          <p className="text-xs text-muted-foreground">Early warning systems for market volatility</p>
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