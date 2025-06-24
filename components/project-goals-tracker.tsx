import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Target, Clock, Users, Zap } from "lucide-react"

const projectGoals = [
  {
    id: 1,
    title: "OCR Accuracy Rate",
    target: "> 90%",
    current: 94.2,
    status: "achieved",
    icon: Target,
    description: "Ekstraksi data item dari struk",
    details: "Target: >90% | Current: 94.2%",
  },
  {
    id: 2,
    title: "LLM Response Time",
    target: "< 2 detik",
    current: 1.2,
    status: "achieved",
    icon: Clock,
    description: "Waktu perhitungan pembagian biaya",
    details: "Target: <2s | Current: 1.2s",
  },
  {
    id: 3,
    title: "Active Users",
    target: "> 20 pengguna",
    current: 47,
    status: "exceeded",
    icon: Users,
    description: "Pengguna aktif per minggu",
    details: "Target: >20 | Current: 47 users",
  },
  {
    id: 4,
    title: "User Interface",
    target: "Intuitif & Mudah",
    current: 4.6,
    status: "achieved",
    icon: Zap,
    description: "Rating kepuasan pengguna",
    details: "Target: >4.0 | Current: 4.6/5.0",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "achieved":
      return <Badge className="bg-green-100 text-green-800">Achieved</Badge>
    case "exceeded":
      return <Badge className="bg-blue-100 text-blue-800">Exceeded</Badge>
    case "in-progress":
      return <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
    case "at-risk":
      return <Badge className="bg-red-100 text-red-800">At Risk</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

const getProgressValue = (goal: any) => {
  switch (goal.id) {
    case 1: // OCR Accuracy
      return Math.min((goal.current / 90) * 100, 100)
    case 2: // LLM Response Time (inverse - lower is better)
      return Math.min(((2 - goal.current) / 2) * 100, 100)
    case 3: // Active Users
      return Math.min((goal.current / 20) * 100, 100)
    case 4: // UI Rating
      return (goal.current / 5) * 100
    default:
      return 0
  }
}

export function ProjectGoalsTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Data Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projectGoals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <goal.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{goal.title}</span>
                </div>
                {getStatusBadge(goal.status)}
              </div>
              <Progress value={getProgressValue(goal)} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{goal.description}</span>
                <span>{goal.details}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Overall Project Health</h4>
          <div className="flex justify-between items-center">
            <span className="text-sm">All goals on track or exceeded</span>
            <Badge className="bg-green-100 text-green-800">Excellent</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
