import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Users, CreditCard } from "lucide-react"

const revenueMetrics = [
  {
    title: "Monthly Revenue",
    value: "Rp 45.2M",
    change: "+18.5%",
    icon: DollarSign,
    description: "from premium subscriptions",
  },
  {
    title: "ARPU",
    value: "Rp 15,500",
    change: "+5.2%",
    icon: TrendingUp,
    description: "average revenue per user",
  },
  {
    title: "Premium Users",
    value: "2,847",
    change: "+12.8%",
    icon: Users,
    description: "active premium subscribers",
  },
  {
    title: "Transaction Fees",
    value: "Rp 8.9M",
    change: "+22.1%",
    icon: CreditCard,
    description: "from payment processing",
  },
]

const costBreakdown = [
  { category: "Server & Infrastructure", amount: "Rp 12.5M", percentage: 28 },
  { category: "API Costs (OCR + LLM)", amount: "Rp 8.2M", percentage: 18 },
  { category: "Payment Processing", amount: "Rp 3.1M", percentage: 7 },
  { category: "Development & Maintenance", amount: "Rp 15.8M", percentage: 35 },
  { category: "Marketing & Acquisition", amount: "Rp 5.4M", percentage: 12 },
]

export function RevenueModelAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {revenueMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
              <div className="mt-2 flex items-center text-xs">
                <span className={`font-medium ${metric.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cost Breakdown Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {costBreakdown.map((cost) => (
              <div key={cost.category} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium">{cost.category}</p>
                  <div className="w-full bg-secondary rounded-full h-2 mt-1">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${cost.percentage}%` }} />
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-sm font-medium">{cost.amount}</p>
                  <p className="text-xs text-muted-foreground">{cost.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Net Profit Margin</span>
              <span className="text-lg font-bold text-green-600">24.8%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
