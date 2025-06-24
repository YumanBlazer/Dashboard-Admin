import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Users, Zap, Shield } from "lucide-react"

const identifiedRisks = [
  {
    id: 1,
    title: "Keterlambatan Implementasi API",
    category: "Technical",
    probability: "Medium",
    impact: "High",
    status: "monitoring",
    mitigation: "Parallel development, backup API providers",
    icon: Clock,
    description: "Kompleksitas integrasi API OCR dan LLM",
  },
  {
    id: 2,
    title: "Bug LLM Pembagian Kompleks",
    category: "Technical",
    probability: "Medium",
    impact: "Medium",
    status: "mitigated",
    mitigation: "Extensive testing, fallback calculations",
    icon: Zap,
    description: "Error dalam perhitungan split bill kompleks",
  },
  {
    id: 3,
    title: "OCR Accuracy Below 90%",
    category: "Performance",
    probability: "Low",
    impact: "High",
    status: "resolved",
    mitigation: "Model tuning, prompt optimization",
    icon: Shield,
    description: "Akurasi OCR tidak mencapai target",
  },
  {
    id: 4,
    title: "Free Tier Performance Limit",
    category: "Infrastructure",
    probability: "High",
    impact: "Medium",
    status: "active",
    mitigation: "Upgrade plan ready, usage monitoring",
    icon: DollarSign,
    description: "Keterbatasan performa saat beta testing",
  },
  {
    id: 5,
    title: "Team Member Availability",
    category: "Resource",
    probability: "Low",
    impact: "High",
    status: "monitoring",
    mitigation: "Cross-training, documentation",
    icon: Users,
    description: "Anggota tim tidak dapat berkontribusi aktif",
  },
]

const getRiskBadge = (probability: string, impact: string) => {
  const riskLevel = getRiskLevel(probability, impact)
  switch (riskLevel) {
    case "Critical":
      return <Badge className="bg-red-100 text-red-800">Critical</Badge>
    case "High":
      return <Badge className="bg-orange-100 text-orange-800">High</Badge>
    case "Medium":
      return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
    case "Low":
      return <Badge className="bg-green-100 text-green-800">Low</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "resolved":
      return <Badge className="bg-green-100 text-green-800">Resolved</Badge>
    case "mitigated":
      return <Badge className="bg-blue-100 text-blue-800">Mitigated</Badge>
    case "monitoring":
      return <Badge className="bg-yellow-100 text-yellow-800">Monitoring</Badge>
    case "active":
      return <Badge className="bg-red-100 text-red-800">Active</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

const getRiskLevel = (probability: string, impact: string) => {
  if (probability === "High" && impact === "High") return "Critical"
  if ((probability === "High" && impact === "Medium") || (probability === "Medium" && impact === "High")) return "High"
  if (probability === "Medium" && impact === "Medium") return "Medium"
  return "Low"
}

export function RiskManagementDashboard() {
  const activeRisks = identifiedRisks.filter((risk) => risk.status === "active" || risk.status === "monitoring").length
  const resolvedRisks = identifiedRisks.filter((risk) => risk.status === "resolved").length
  const criticalRisks = identifiedRisks.filter(
    (risk) => getRiskLevel(risk.probability, risk.impact) === "Critical",
  ).length

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Management Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 bg-red-50 rounded-lg text-center">
              <p className="text-sm font-medium text-red-800">Active Risks</p>
              <p className="text-lg font-bold text-red-600">{activeRisks}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <p className="text-sm font-medium text-green-800">Resolved</p>
              <p className="text-lg font-bold text-green-600">{resolvedRisks}</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg text-center">
              <p className="text-sm font-medium text-orange-800">Critical</p>
              <p className="text-lg font-bold text-orange-600">{criticalRisks}</p>
            </div>
          </div>

          {identifiedRisks.map((risk) => (
            <div key={risk.id} className="p-4 border rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <risk.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{risk.title}</span>
                  <span className="text-xs text-muted-foreground">({risk.category})</span>
                </div>
                <div className="flex space-x-2">
                  {getRiskBadge(risk.probability, risk.impact)}
                  {getStatusBadge(risk.status)}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{risk.description}</p>
              <div className="flex justify-between text-xs">
                <span>
                  <strong>Probability:</strong> {risk.probability} | <strong>Impact:</strong> {risk.impact}
                </span>
              </div>
              <div className="text-xs">
                <strong>Mitigation:</strong> {risk.mitigation}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
