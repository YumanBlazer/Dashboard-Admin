import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Database, Wifi, Shield } from "lucide-react"

const systemMetrics = [
  {
    component: "API Server",
    status: "healthy",
    uptime: "99.9%",
    responseTime: "120ms",
    icon: Server,
    lastIncident: "None",
  },
  {
    component: "Database",
    status: "healthy",
    uptime: "99.8%",
    responseTime: "45ms",
    icon: Database,
    lastIncident: "2 days ago",
  },
  {
    component: "OCR Service",
    status: "warning",
    uptime: "98.5%",
    responseTime: "1.2s",
    icon: Wifi,
    lastIncident: "6 hours ago",
  },
  {
    component: "Security Layer",
    status: "healthy",
    uptime: "100%",
    responseTime: "25ms",
    icon: Shield,
    lastIncident: "None",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "healthy":
      return "bg-green-500"
    case "warning":
      return "bg-yellow-500"
    case "critical":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "healthy":
      return <Badge className="bg-green-100 text-green-800">Healthy</Badge>
    case "warning":
      return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
    case "critical":
      return <Badge className="bg-red-100 text-red-800">Critical</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

export function SystemHealthMonitor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Health Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {systemMetrics.map((metric) => (
            <div key={metric.component} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <metric.icon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{metric.component}</p>
                  <p className="text-sm text-muted-foreground">
                    Uptime: {metric.uptime} • Response: {metric.responseTime}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusBadge(metric.status)}
                <div className={`h-2 w-2 rounded-full ${getStatusColor(metric.status)}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="text-sm font-medium mb-2">Overall System Status</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm">All systems operational</span>
            <Badge className="bg-green-100 text-green-800">99.3% Uptime</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
