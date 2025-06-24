import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, Clock, AlertTriangle } from "lucide-react"

const milestones = [
  {
    id: 1,
    name: "Inisiasi dan Perencanaan",
    startDate: "10/03/2025",
    endDate: "20/03/2025",
    status: "completed",
    progress: 100,
    description: "Project charter, requirement analysis",
  },
  {
    id: 2,
    name: "Desain UI/UX",
    startDate: "21/03/2025",
    endDate: "09/04/2025",
    status: "completed",
    progress: 100,
    description: "User interface design, wireframes",
  },
  {
    id: 3,
    name: "Pengembangan OCR dan LLM",
    startDate: "10/04/2025",
    endDate: "15/05/2025",
    status: "in-progress",
    progress: 75,
    description: "API integration, testing accuracy",
  },
  {
    id: 4,
    name: "Pengembangan Backend",
    startDate: "16/05/2025",
    endDate: "30/06/2025",
    status: "pending",
    progress: 0,
    description: "Database, authentication, APIs",
  },
  {
    id: 5,
    name: "Integrasi dan Pengujian",
    startDate: "01/07/2025",
    endDate: "09/07/2025",
    status: "pending",
    progress: 0,
    description: "System integration, QA testing",
  },
  {
    id: 6,
    name: "Evaluasi dan Public Launch",
    startDate: "10/07/2025",
    endDate: "17/07/2025",
    status: "pending",
    progress: 0,
    description: "Beta testing, public release",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>
    case "in-progress":
      return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
    case "pending":
      return <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
    case "delayed":
      return <Badge className="bg-red-100 text-red-800">Delayed</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "in-progress":
      return <Clock className="h-4 w-4 text-blue-500" />
    case "delayed":
      return <AlertTriangle className="h-4 w-4 text-red-500" />
    default:
      return <Calendar className="h-4 w-4 text-gray-500" />
  }
}

export function MilestoneProgress() {
  const completedMilestones = milestones.filter((m) => m.status === "completed").length
  const totalMilestones = milestones.length
  const overallProgress = (completedMilestones / totalMilestones) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Milestone Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Project Progress</span>
              <span className="text-lg font-bold">
                {completedMilestones}/{totalMilestones} Milestones
              </span>
            </div>
            <Progress value={overallProgress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">{overallProgress.toFixed(1)}% complete</p>
          </div>

          {milestones.map((milestone) => (
            <div key={milestone.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(milestone.status)}
                  <span className="text-sm font-medium">{milestone.name}</span>
                </div>
                {getStatusBadge(milestone.status)}
              </div>
              <Progress value={milestone.progress} className="h-1.5" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{milestone.description}</span>
                <span>
                  {milestone.startDate} - {milestone.endDate}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="p-3 bg-green-50 rounded-lg text-center">
            <p className="text-sm font-medium text-green-800">Completed</p>
            <p className="text-lg font-bold text-green-600">{completedMilestones}</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-sm font-medium text-blue-800">In Progress</p>
            <p className="text-lg font-bold text-blue-600">
              {milestones.filter((m) => m.status === "in-progress").length}
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg text-center">
            <p className="text-sm font-medium text-gray-800">Remaining</p>
            <p className="text-lg font-bold text-gray-600">{milestones.filter((m) => m.status === "pending").length}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
