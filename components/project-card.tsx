import Link from "next/link"
import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  repoUrl?: string
  projectUrl?: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  icon?: ReactNode
}

export function ProjectCard({ title, description, tags, imageUrl, icon, repoUrl, projectUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-500"
        />
        <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          {icon}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1 group-hover:text-purple-600 transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-1 border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
          asChild
        >
          <Link 
            href={projectUrl || repoUrl || "#"} 
            target={projectUrl ? "_self" : "_blank"} 
            rel={projectUrl ? undefined : "noopener noreferrer"}
          >
            View Project Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

