"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const hourlyUsageData = [
  { hour: "00", sessions: 12 },
  { hour: "01", sessions: 8 },
  { hour: "02", sessions: 5 },
  { hour: "03", sessions: 3 },
  { hour: "04", sessions: 2 },
  { hour: "05", sessions: 4 },
  { hour: "06", sessions: 15 },
  { hour: "07", sessions: 28 },
  { hour: "08", sessions: 45 },
  { hour: "09", sessions: 52 },
  { hour: "10", sessions: 38 },
  { hour: "11", sessions: 65 },
  { hour: "12", sessions: 89 },
  { hour: "13", sessions: 76 },
  { hour: "14", sessions: 42 },
  { hour: "15", sessions: 35 },
  { hour: "16", sessions: 48 },
  { hour: "17", sessions: 67 },
  { hour: "18", sessions: 95 },
  { hour: "19", sessions: 125 },
  { hour: "20", sessions: 98 },
  { hour: "21", sessions: 78 },
  { hour: "22", sessions: 45 },
  { hour: "23", sessions: 25 },
]

export function PeakUsageAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Peak Usage Hours</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hourlyUsageData}>
              <XAxis
                dataKey="hour"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}:00`}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                formatter={(value) => [`${value} sessions`, "Split Sessions"]}
                labelFormatter={(label) => `${label}:00`}
              />
              <Bar dataKey="sessions" fill="#8884d8" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <p className="font-medium">Peak Hour</p>
            <p className="text-muted-foreground">19:00 - 20:00</p>
          </div>
          <div className="text-center">
            <p className="font-medium">Lowest Usage</p>
            <p className="text-muted-foreground">03:00 - 05:00</p>
          </div>
          <div className="text-center">
            <p className="font-medium">Business Hours</p>
            <p className="text-muted-foreground">65% of traffic</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
