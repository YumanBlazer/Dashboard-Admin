import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
const ocrMetrics = [
  { id: 1, metric: "OCR Accuracy Rate", value: "94.2%", status: "good" },
  { id: 2, metric: "Manual Input Required", value: "5.8%", status: "warning" },
  { id: 3, metric: "Processing Speed", value: "1.2s", status: "good" },
  { id: 4, metric: "Failed Scans", value: "2.1%", status: "good" },
]

export function QuickBillPay() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>OCR Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {ocrMetrics.map((metric) => (
            <div key={metric.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{metric.metric}</p>
                <p className="text-sm text-muted-foreground">Last 24 hours</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold">{metric.value}</span>
                <div
                  className={`h-2 w-2 rounded-full ${
                    metric.status === "good"
                      ? "bg-green-500"
                      : metric.status === "warning"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
