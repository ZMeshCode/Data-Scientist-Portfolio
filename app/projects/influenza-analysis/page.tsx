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
  Activity, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  LineChart, 
  Stethoscope,
  Brain,
  Database,
  Zap,
  Clock,
  Target,
  AlertTriangle,
  CheckCircle2,
  X
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

export default function InfluenzaAnalysisPage() {
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
                  Healthcare Analytics
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Influenza Analysis & Prediction
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A comprehensive time series forecasting system that analyzes historical influenza data to predict seasonal outbreaks and help healthcare organizations optimize resource allocation
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium">95% Accuracy</h3>
                  <p className="text-sm text-muted-foreground">Prediction Rate</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  <h3 className="font-medium">12 Weeks</h3>
                  <p className="text-sm text-muted-foreground">Forecast Horizon</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Activity className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium">Real-time</h3>
                  <p className="text-sm text-muted-foreground">Data Processing</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Target className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  <h3 className="font-medium">Early Warning</h3>
                  <p className="text-sm text-muted-foreground">System</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="https://github.com/ZMeshCode/Influenza_Project" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Predicting Seasonal Flu Outbreaks</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                      The Healthcare Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Healthcare systems face significant challenges during flu season with unpredictable demand patterns:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Resource allocation inefficiencies during peak seasons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Inability to predict outbreak timing and severity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Reactive rather than proactive healthcare planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">Limited early warning systems for public health officials</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-indigo-600" />
                      Data-Driven Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      An advanced time series forecasting system that transforms historical data into actionable predictions:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">12-week advance outbreak predictions with 95% accuracy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Seasonal pattern recognition and trend analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Real-time data processing and model updating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Early warning alerts for healthcare administrators</span>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Time Series Forecasting in Action</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Visualization of influenza trend analysis and prediction models
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-2 flex items-center justify-center">
                    <img
                      src="/images/projects/time_series_analysis.png"
                      alt="Time series analysis showing influenza trends, ILI percentages, and positivity rates over time"
                      className="rounded-lg shadow-md w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(
                        "/images/projects/time_series_analysis.png",
                        "Time series analysis showing influenza trends, ILI percentages, and positivity rates over time",
                        "Time Series Analysis Dashboard"
                      )}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Time Series Analysis</CardTitle>
                    <CardDescription>
                      Comprehensive visualization of historical influenza data showing ILI trends, positivity rates, and seasonal patterns with detailed temporal analysis.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-2 flex items-center justify-center">
                    <img
                      src="/images/projects/predictions.png"
                      alt="LSTM model predictions vs actual values showing forecasting accuracy and confidence intervals"
                      className="rounded-lg shadow-md w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(
                        "/images/projects/predictions.png",
                        "LSTM model predictions vs actual values showing forecasting accuracy and confidence intervals",
                        "Prediction Model Results"
                      )}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>LSTM Prediction Results</CardTitle>
                    <CardDescription>
                      Model predictions vs actual values demonstrating 95% accuracy with 4-week advance forecasting, confidence intervals, and validation metrics for healthcare planning.
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
                      Machine Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">ARIMA</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">SARIMA</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Prophet</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">LSTM</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Advanced time series forecasting models for seasonal pattern recognition and outbreak prediction
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-6 w-6 text-indigo-600" />
                      Data Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Python</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Pandas</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">NumPy</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Scipy</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Robust data cleaning, preprocessing, and statistical analysis pipeline for healthcare time series data
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                      Visualization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Matplotlib</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Seaborn</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Plotly</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Tableau</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Interactive dashboards and comprehensive visualizations for trend analysis and forecast presentation
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="h-6 w-6 text-indigo-600" />
                      Healthcare Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">CDC Data</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">WHO Statistics</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Epidemiological</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Real-time</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Integration with authoritative healthcare databases and real-time surveillance systems
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-purple-600" />
                      Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Scikit-learn</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Statsmodels</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">TensorFlow</Badge>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Optimization</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      High-performance computing and model optimization for real-time forecasting capabilities
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-6 w-6 text-indigo-600" />
                      Deployment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Jupyter</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Docker</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Git</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Automation</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Containerized deployment with automated data pipelines and scheduled model retraining
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Skills Demonstrated & Real-World Impact</h2>
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
                        <span className="text-sm">Advanced Time Series Analysis & Forecasting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Statistical Modeling & Hypothesis Testing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Healthcare Data Analysis & Epidemiological Methods</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Machine Learning Model Development & Validation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Data Visualization & Dashboard Creation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Real-time Data Processing & Pipeline Automation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-6 w-6 text-indigo-600" />
                      Real-World Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-start gap-2">
                        <Activity className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Public Health Planning</span>
                          <p className="text-xs text-muted-foreground">Early warning systems for health departments</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Stethoscope className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Hospital Resource Management</span>
                          <p className="text-xs text-muted-foreground">Optimized staffing and capacity planning</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Vaccine Distribution Planning</span>
                          <p className="text-xs text-muted-foreground">Strategic allocation based on predicted demand</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Emergency Preparedness</span>
                          <p className="text-xs text-muted-foreground">Proactive response to seasonal outbreaks</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

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
      </main>

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