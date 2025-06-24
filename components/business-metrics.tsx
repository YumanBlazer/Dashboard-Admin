import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react"

const categoryMetrics = [
  {
    id: 1,
    title: "Food & Beverage",
    subtitle: "Most popular split category",
    icon: TrendingUp,
    status: "Dominant",
    progress: 68,
    totalSessions: 2847,
    totalValue: 1250000000,
    unit: "sessions",
  },
  {
    id: 2,
    title: "Transportation",
    subtitle: "Ride sharing & travel",
    icon: Users,
    status: "Growing",
    progress: 15,
    totalSessions: 627,
    totalValue: 180000000,
    unit: "sessions",
  },
  {
    id: 3,
    title: "Entertainment",
    subtitle: "Movies, games, events",
    icon: DollarSign,
    status: "Stable",
    progress: 12,
    totalSessions: 502,
    totalValue: 95000000,
    unit: "sessions",
  },
]

const statusColors = {
  "On Track": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Behind: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  Ahead: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Dominant: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Growing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Stable: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
}

export function BusinessMetrics() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Category Analysis</h2>
        <Button variant="outline" size="sm">
          View Detailed Report <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categoryMetrics.map((category) => (
          <Card key={category.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{category.title}</CardTitle>
              <category.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{category.subtitle}</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-1 rounded-full ${statusColors[category.status]}`}>{category.status}</span>
                  <span className="text-muted-foreground">
                    {category.totalSessions} {category.unit}
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{ width: `${Math.min(category.progress, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">Rp {(category.totalValue / 1000000).toFixed(0)}M</span>
                  <span className="text-muted-foreground">{category.progress}% of total</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
