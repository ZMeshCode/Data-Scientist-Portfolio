import { BriefcaseBusiness } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export function ExperienceCard({ title, company, period, description, skills }: ExperienceCardProps) {
  return (
    <Card className="border-purple-200 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        <BriefcaseBusiness className="h-8 w-8 text-purple-600" />
        <div className="grid gap-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {company} | {period}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <Badge
              key={i}
              variant="outline"
              className="bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

