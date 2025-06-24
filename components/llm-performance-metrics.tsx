import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, Zap, CheckCircle, AlertCircle } from "lucide-react"

const llmMetrics = [
  {
    title: "LLM Usage Rate",
    value: "78.5%",
    description: "of sessions use AI assistance",
    progress: 78.5,
    icon: MessageSquare,
    status: "good",
  },
  {
    title: "Response Speed",
    value: "0.8s",
    description: "average response time",
    progress: 85,
    icon: Zap,
    status: "excellent",
  },
  {
    title: "Accuracy Rate",
    value: "94.2%",
    description: "correct item categorization",
    progress: 94.2,
    icon: CheckCircle,
    status: "good",
  },
  {
    title: "Error Rate",
    value: "2.1%",
    description: "failed LLM requests",
    progress: 2.1,
    icon: AlertCircle,
    status: "warning",
  },
]

export function LLMPerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>LLM Performance Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {llmMetrics.map((metric) => (
            <div key={metric.title} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{metric.title}</span>
                </div>
                <span className="text-sm font-bold">{metric.value}</span>
              </div>
              <Progress
                value={metric.title === "Error Rate" ? 100 - metric.progress : metric.progress}
                className="h-2"
              />
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="text-sm font-medium mb-2">Cost Analysis</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Monthly API Cost</p>
              <p className="font-medium">$247.50</p>
            </div>
            <div>
              <p className="text-muted-foreground">Cost per Session</p>
              <p className="font-medium">$0.08</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
