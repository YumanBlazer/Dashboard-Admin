"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const userGrowthData = [
  { month: "Jan", newUsers: 15, activeUsers: 45, retentionRate: 85 },
  { month: "Feb", newUsers: 22, activeUsers: 58, retentionRate: 87 },
  { month: "Mar", newUsers: 35, activeUsers: 72, retentionRate: 89 },
  { month: "Apr", newUsers: 28, activeUsers: 84, retentionRate: 91 },
  { month: "May", newUsers: 42, activeUsers: 95, retentionRate: 88 },
  { month: "Jun", newUsers: 48, activeUsers: 100, retentionRate: 92 },
]

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth Analytics</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowthData}>
              <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip />
              <Line type="monotone" dataKey="newUsers" stroke="#8884d8" strokeWidth={2} name="New Users" />
              <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" strokeWidth={2} name="Active Users" />
              <Line type="monotone" dataKey="retentionRate" stroke="#ffc658" strokeWidth={2} name="Retention %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
