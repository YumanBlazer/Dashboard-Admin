"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, Plus, Send, CreditCard, MoreHorizontal } from "lucide-react"

const initialMetrics = [
  { name: "Active Sessions", value: 1247 },
  { name: "Total Users", value: 8934 },
  { name: "Daily Splits", value: 342 },
]

export function AccountsOverview() {
  const [metrics, setMetrics] = useState(initialMetrics)
  const totalValue = metrics.reduce((sum, metric) => sum + metric.value, 0)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Split Bill Overview</CardTitle>
        <Wallet className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{totalValue.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">Total platform activity</p>
        <div className="mt-4 space-y-2">
          {metrics.map((metric) => (
            <div key={metric.name} className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{metric.name}</span>
              <span className="text-sm font-medium">{metric.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" /> Export Data
          </Button>
          <Button size="sm">
            <Send className="mr-2 h-4 w-4" /> Generate Report
          </Button>
          <Button size="sm">
            <CreditCard className="mr-2 h-4 w-4" /> View Details
          </Button>
          <Button size="sm" variant="outline">
            <MoreHorizontal className="mr-2 h-4 w-4" /> More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
