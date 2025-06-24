import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"

const budgetCategories = [
  {
    category: "API OCR & LLM",
    budgeted: 500000,
    spent: 247500,
    type: "Non-Recurring",
    status: "on-track",
    description: "Biaya langganan API",
  },
  {
    category: "Desain UI/UX",
    budgeted: 1000000,
    spent: 1000000,
    type: "Non-Recurring",
    status: "completed",
    description: "Desain tampilan antarmuka",
  },
  {
    category: "Testing & Development",
    budgeted: 300000,
    spent: 185000,
    type: "Non-Recurring",
    status: "on-track",
    description: "Pengujian & tools development",
  },
  {
    category: "Cloud Hosting & Database",
    budgeted: 500000,
    spent: 450000,
    type: "Monthly Recurring",
    status: "on-track",
    description: "Hosting web & database (per bulan)",
  },
  {
    category: "Monitoring Services",
    budgeted: 500000,
    spent: 380000,
    type: "Monthly Recurring",
    status: "under-budget",
    description: "Pemantauan server & logging",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "on-track":
      return <TrendingUp className="h-4 w-4 text-blue-500" />
    case "under-budget":
      return <DollarSign className="h-4 w-4 text-green-500" />
    case "over-budget":
      return <AlertCircle className="h-4 w-4 text-red-500" />
    default:
      return <DollarSign className="h-4 w-4 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "text-green-600"
    case "on-track":
      return "text-blue-600"
    case "under-budget":
      return "text-green-600"
    case "over-budget":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

export function BudgetCostTracker() {
  const totalBudgeted = budgetCategories.reduce((sum, cat) => sum + cat.budgeted, 0)
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0)
  const budgetUtilization = (totalSpent / totalBudgeted) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget & Cost Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Total Budget Utilization</span>
              <span className="text-lg font-bold">
                Rp {totalSpent.toLocaleString()} / Rp {totalBudgeted.toLocaleString()}
              </span>
            </div>
            <Progress value={budgetUtilization} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">{budgetUtilization.toFixed(1)}% utilized</p>
          </div>

          {budgetCategories.map((budget, index) => {
            const utilization = (budget.spent / budget.budgeted) * 100
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(budget.status)}
                    <span className="text-sm font-medium">{budget.category}</span>
                    <span className="text-xs text-muted-foreground">({budget.type})</span>
                  </div>
                  <span className={`text-sm font-medium ${getStatusColor(budget.status)}`}>
                    {budget.status.replace("-", " ").toUpperCase()}
                  </span>
                </div>
                <Progress value={Math.min(utilization, 100)} className="h-1.5" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{budget.description}</span>
                  <span>
                    Rp {budget.spent.toLocaleString()} / Rp {budget.budgeted.toLocaleString()} ({utilization.toFixed(1)}
                    %)
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="text-sm font-medium text-green-800">Savings</p>
            <p className="text-lg font-bold text-green-600">Rp {(totalBudgeted - totalSpent).toLocaleString()}</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm font-medium text-blue-800">Monthly Burn Rate</p>
            <p className="text-lg font-bold text-blue-600">Rp 830K</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
