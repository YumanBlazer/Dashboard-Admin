import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building, User, Users, Crown } from "lucide-react"

const stakeholders = [
  {
    id: 1,
    name: "Gojek",
    role: "Client",
    type: "External",
    contact: "partnerships@gojek.com",
    lastContact: "2 days ago",
    status: "active",
    icon: Building,
    avatar: "https://logo.clearbit.com/gojek.com",
  },
  {
    id: 2,
    name: "Gojek Partnerships & Innovation Lab",
    role: "Project Sponsor",
    type: "External",
    contact: "innovation@gojek.com",
    lastContact: "1 week ago",
    status: "active",
    icon: Crown,
    avatar: "https://logo.clearbit.com/gojek.com",
  },
  {
    id: 3,
    name: "Muhammad Syauqi Fikri Rais",
    role: "Project Manager",
    type: "Internal",
    contact: "syauqi@team.com",
    lastContact: "Today",
    status: "active",
    icon: User,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Development Team",
    role: "Team Members",
    type: "Internal",
    contact: "team@patungan.com",
    lastContact: "Today",
    status: "active",
    icon: Users,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const recentCommunications = [
  {
    id: 1,
    stakeholder: "Gojek Client",
    subject: "Weekly Progress Report",
    date: "2 days ago",
    type: "Report",
    status: "sent",
  },
  {
    id: 2,
    stakeholder: "Project Sponsor",
    subject: "Budget Review Meeting",
    date: "1 week ago",
    type: "Meeting",
    status: "completed",
  },
  {
    id: 3,
    stakeholder: "Development Team",
    subject: "Sprint Planning",
    date: "Today",
    type: "Meeting",
    status: "ongoing",
  },
  {
    id: 4,
    stakeholder: "Gojek Client",
    subject: "Demo Presentation",
    date: "Next week",
    type: "Presentation",
    status: "scheduled",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-800">Active</Badge>
    case "inactive":
      return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

const getCommStatusBadge = (status: string) => {
  switch (status) {
    case "sent":
      return <Badge className="bg-blue-100 text-blue-800">Sent</Badge>
    case "completed":
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>
    case "ongoing":
      return <Badge className="bg-yellow-100 text-yellow-800">Ongoing</Badge>
    case "scheduled":
      return <Badge className="bg-purple-100 text-purple-800">Scheduled</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

export function StakeholderCommunication() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Key Stakeholders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stakeholders.map((stakeholder) => (
              <div key={stakeholder.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={stakeholder.avatar || "/placeholder.svg"} alt={stakeholder.name} />
                    <AvatarFallback>
                      <stakeholder.icon className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{stakeholder.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {stakeholder.role} • {stakeholder.type}
                    </p>
                    <p className="text-xs text-muted-foreground">Last contact: {stakeholder.lastContact}</p>
                  </div>
                </div>
                {getStatusBadge(stakeholder.status)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Communications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentCommunications.map((comm) => (
              <div key={comm.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{comm.subject}</p>
                  <p className="text-sm text-muted-foreground">
                    {comm.stakeholder} • {comm.type} • {comm.date}
                  </p>
                </div>
                {getCommStatusBadge(comm.status)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
