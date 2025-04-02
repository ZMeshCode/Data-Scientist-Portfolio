import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code,
  Database,
  Github,
  LineChart,
  Mail,
  MapPin,
  Microscope,
  Stethoscope,
  Brain,
  BarChart3,
  Activity,
  Scale,
  Bot,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { SkillsChart } from "@/components/skills-chart"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedCounter } from "@/components/animated-counter"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/90">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Brain className="h-5 w-5 text-primary" />
            <span>Zerayacob Meshesha</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Link href="#contact">Connect With Me</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden">
          <ParticleBackground />
          <div className="container mx-auto max-w-7xl px-4 md:px-6 space-y-10 relative z-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Healthcare + Data Science + AI</div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Zerayacob Meshesha
                </h1>
                <div className="h-12">
                  <TypewriterEffect words={["Data Scientist", "ML Engineer", "AI Specialist"]} />
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Transforming healthcare and financial data into actionable insights through AI and machine learning
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                >
                  <Link href="https://github.com/ZMeshCode" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <Microscope className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <h3 className="font-medium">Healthcare</h3>
                <p className="text-sm text-muted-foreground">Background</p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <Brain className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                <h3 className="font-medium">AI & ML</h3>
                <p className="text-sm text-muted-foreground">Expertise</p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <Database className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <h3 className="font-medium">Data Analysis</h3>
                <p className="text-sm text-muted-foreground">Specialty</p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <Bot className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                <h3 className="font-medium">LLM Applications</h3>
                <p className="text-sm text-muted-foreground">Innovation</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]" />
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Bridging Healthcare & Data Science
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  I'm a data scientist with a background in public health and machine learning, passionate about using AI to drive impactful solutions. At the MCA Clinical Research Lab at USC, I worked on data-driven healthcare research, refining my analytical and problem-solving skills. My experience spans predictive modeling, deep learning, and AI applications, with projects in influenza prediction, COVID-19 anomaly detection, patient sentiment analysis, and sports analytics.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  I specialize in building scalable data pipelines, recommendation systems, and AI-driven automation. Proficient in Python, SQL, TensorFlow, and machine learning frameworks, I enjoy tackling complex problems with data-driven solutions.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <Link href="https://github.com/ZMeshCode" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <Link href="https://www.linkedin.com/in/zerayacob-meshesha" target="_blank" rel="noopener noreferrer">
                      <BriefcaseBusiness className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6">
                    <img
                      src="/images/graduation.png"
                      alt="Zerayacob Meshesha"
                      className="aspect-square rounded-lg object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]" />
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                Featured Projects
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Data Science Portfolio</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Showcasing my work in healthcare analytics, financial prediction, and AI applications
                </p>
              </div>
            </div>

            <div className="grid gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Patient Sentiment Analysis"
                repoUrl="https://github.com/ZMeshCode/Patient-Sentiment-Analysis-Deep-Learning"
                description="An NLP-based project analyzing patient reviews to extract sentiment and insights from healthcare data. Helps healthcare providers understand patient experiences and improve service quality."
                tags={["NLP", "Healthcare", "Python", "Sentiment Analysis"]}
                imageUrl="/images/projects/patient-sentiment.jpg"
                icon={<Stethoscope className="h-10 w-10 text-purple-600" />}
              />
              <ProjectCard
                title="Influenza Analysis & Prediction"
                repoUrl="https://github.com/ZMeshCode/Influenza_Project"
                description="A data-driven analysis and forecasting model for influenza trends using historical data. Helps healthcare organizations prepare for seasonal outbreaks and allocate resources effectively."
                tags={["Time Series", "Forecasting", "Healthcare", "Python"]}
                imageUrl="/images/projects/influenza.jpg"
                icon={<Activity className="h-10 w-10 text-indigo-600" />}
              />
              <ProjectCard
                title="Stock Price Prediction"
                repoUrl="https://github.com/ZMeshCode/Stock-Prediction"
                description="A machine learning model that predicts stock prices by combining sentiment analysis from financial news and social media with technical and fundamental financial indicators."
                tags={["ML", "Finance", "NLP", "Time Series"]}
                imageUrl="/images/projects/stock-price.jpg"
                icon={<BarChart3 className="h-10 w-10 text-purple-600" />}
              />
              <ProjectCard
                title="Sports Database"
                repoUrl="https://github.com/ZMeshCode/Sports-Database"
                description="A relational database designed to store and analyze sports-related data, featuring player and team statistics, historical performance tracking, and SQL-based data retrieval and analytics."
                tags={["SQL", "Database Design", "Data Analytics", "Sports"]}
                imageUrl="/images/projects/sports-db.jpg"
                icon={<Database className="h-10 w-10 text-indigo-600" />}
              />
              <ProjectCard
                title="LLM Legal Analyzer Tool"
                description="An AI-powered legal analysis tool leveraging Large Language Models to analyze legal documents for key insights and compliance, provide summarization and legal risk assessment."
                tags={["LLM", "NLP", "Clinical Research", "AI"]}
                imageUrl="/images/projects/legal-llm.jpg"
                icon={<Scale className="h-10 w-10 text-purple-600" />}
              />
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                Technical Expertise
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Skills & Technologies</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  My technical skills and areas of expertise in data science and AI
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl pt-12">
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger
                    value="technical"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-50"
                  >
                    Programming & Tools
                  </TabsTrigger>
                  <TabsTrigger
                    value="data"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-50"
                  >
                    Data Science & AI
                  </TabsTrigger>
                  <TabsTrigger
                    value="domain"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-50"
                  >
                    Domain Knowledge
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="technical" className="pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Code className="h-5 w-5 text-purple-600" />
                          Programming Languages
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Python</span>
                            <span className="text-sm text-muted-foreground">95%</span>
                          </div>
                          <Progress
                            value={95}
                            className="h-2 bg-purple-100 dark:bg-purple-900/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">SQL</span>
                            <span className="text-sm text-muted-foreground">90%</span>
                          </div>
                          <Progress
                            value={90}
                            className="h-2 bg-purple-100 dark:bg-purple-900/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">R</span>
                            <span className="text-sm text-muted-foreground">75%</span>
                          </div>
                          <Progress
                            value={75}
                            className="h-2 bg-purple-100 dark:bg-purple-900/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">SAS</span>
                            <span className="text-sm text-muted-foreground">60%</span>
                          </div>
                          <Progress
                            value={60}
                            className="h-2 bg-purple-100 dark:bg-purple-900/20"
                          />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Database className="h-5 w-5 text-indigo-600" />
                          Tools & Frameworks
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">PyTorch</span>
                            <span className="text-sm text-muted-foreground">90%</span>
                          </div>
                          <Progress
                            value={90}
                            className="h-2 bg-purple-100 dark:bg-purple-900/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">TensorFlow</span>
                            <span className="text-sm text-muted-foreground">85%</span>
                          </div>
                          <Progress
                            value={85}
                            className="h-2 bg-purple-100 dark:bg-purple-900/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Scikit-learn</span>
                            <span className="text-sm text-muted-foreground">95%</span>
                          </div>
                          <Progress
                            value={95}
                            className="h-2 bg-purple-100 dark:bg-purple-900/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Pandas/NumPy</span>
                            <span className="text-sm text-muted-foreground">95%</span>
                          </div>
                          <Progress
                            value={95}
                            className="h-2 bg-purple-100 dark:bg-purple-900/20"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="data" className="pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Brain className="h-5 w-5 text-purple-600" />
                          Machine Learning & AI
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <SkillsChart />
                      </CardContent>
                    </Card>
                    <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <LineChart className="h-5 w-5 text-indigo-600" />
                          Data Engineering & Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-purple-600" />
                          <span>Data Cleaning & Preprocessing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-indigo-600" />
                          <span>ETL Pipeline Development</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-purple-600" />
                          <span>Statistical Analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-indigo-600" />
                          <span>Data Visualization (Matplotlib, Seaborn)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-purple-600" />
                          <span>Feature Engineering</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-indigo-600" />
                          <span>Model Evaluation & Deployment</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="domain" className="pt-6">
                  <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Stethoscope className="h-5 w-5 text-purple-600" />
                        Domain Expertise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-purple-600" />
                            <span>Healthcare Analytics</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-indigo-600" />
                            <span>Public Health</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-purple-600" />
                            <span>Medical Data Analysis</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-indigo-600" />
                            <span>Epidemiology</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-purple-600" />
                            <span>Financial Analysis</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-indigo-600" />
                            <span>Clinical Research</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-purple-600" />
                            <span>Sports Analytics</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-indigo-600" />
                            <span>LLM Applications</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="education" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]" />
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                Academic Background
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Education</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  My academic journey and qualifications
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl pt-12">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600 to-indigo-600"></div>

                <div className="space-y-12">
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <CardTitle>Master of Science in Information Management (Data Science)</CardTitle>
                        <CardDescription>University of Washington | 2024 - 2025</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Specialized in Data Science with a focus on machine learning, natural language processing, and
                          healthcare analytics. Completed capstone project on predictive modeling for patient outcomes
                          using electronic health records.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <Badge
                            variant="outline"
                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30"
                          >
                            Machine Learning
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300 dark:hover:bg-indigo-900/30"
                          >
                            Data Science
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30"
                          >
                            Healthcare Analytics
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <CardTitle>Bachelor's in Public Health (Pre-Med)</CardTitle>
                        <CardDescription>La Sierra University | 2018 - 2021</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Completed a comprehensive program in Public Health with a Pre-Med focus, gaining strong
                          foundations in epidemiology, biostatistics, and healthcare systems. Conducted research on
                          community health interventions and disease prevention strategies.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <Badge
                            variant="outline"
                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30"
                          >
                            Public Health
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300 dark:hover:bg-indigo-900/30"
                          >
                            Pre-Med
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30"
                          >
                            Epidemiology
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg">
                      <Award className="h-6 w-6" />
                    </div>
                    <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <CardTitle>Certifications & Additional Education</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[200px] pr-4">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium">IBM Data Science, AI, & Dev</h4>
                              <p className="text-sm text-muted-foreground">Coursera | 2025</p>
                            </div>
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                Get In Touch
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Connect With Me</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Interested in working together or have a question? Let's connect!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2">
              <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-purple-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <Button asChild>
                      <Link
                        href="mailto:zmeshesha1@gmail.com"
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" /> zmeshesha1@gmail.com
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                    <span>Los Angeles, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-purple-600" />
                    <a
                      href="https://github.com/ZMeshCode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 transition-colors"
                    >
                      github.com/ZMeshCode
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="h-5 w-5 text-indigo-600" />
                    <a
                      href="https://www.linkedin.com/in/zerayacob-meshesha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 transition-colors"
                    >
                      linkedin.com/in/zerayacob-meshesha
                    </a>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium mb-3">Connect on Social Media</h4>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                      >
                        <Link href="https://github.com/ZMeshCode" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                      >
                        <Link href="https://www.linkedin.com/in/zerayacob-meshesha" target="_blank" rel="noopener noreferrer">
                          <BriefcaseBusiness className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                      >
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-indigo-600" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4">
          <p className="text-sm text-muted-foreground">© 2025 Zerayacob Meshesha. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

