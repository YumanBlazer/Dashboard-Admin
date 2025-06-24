import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp } from "lucide-react"

const sessionMetrics = [
  {
    title: "Average Participants",
    value: "3.8",
    change: "+0.2",
    icon: Users,
    description: "per split session",
  },
  {
    title: "Success Rate",
    value: "96.8%",
    change: "+1.2%",
    icon: TrendingUp,
    description: "completed sessions",
  },
]

export function SplitSessionAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {sessionMetrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">{metric.description}</p>
            <div className="mt-2 flex items-center text-xs">
              <span
                className={`font-medium ${
                  metric.change.startsWith("+")
                    ? "text-green-600"
                    : metric.change.startsWith("-")
                      ? "text-red-600"
                      : "text-red-600"
                }`}
              >
                {metric.change}
              </span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
