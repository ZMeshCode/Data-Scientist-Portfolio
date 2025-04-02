"use client"

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"

const data = [
  {
    subject: "Deep Learning",
    value: 85,
  },
  {
    subject: "NLP",
    value: 90,
  },
  {
    subject: "Healthcare Analytics",
    value: 95,
  },
  {
    subject: "Computer Vision",
    value: 75,
  },
  {
    subject: "Time Series",
    value: 85,
  },
  {
    subject: "LLM Applications",
    value: 80,
  },
]

export function SkillsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="hsl(var(--muted-foreground)/30)" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="hsl(var(--muted-foreground)/50)" />
        <Radar
          name="Skills"
          dataKey="value"
          stroke="hsl(var(--purple-600))"
          fill="hsl(var(--purple-600))"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

