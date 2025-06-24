import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const splitSessions = [
  {
    id: 1,
    name: "Dinner at Sushi Tei",
    amount: 450000,
    participants: 4,
    date: "2023-07-15",
    type: "food",
    status: "completed",
  },
  {
    id: 2,
    name: "Grab to Mall",
    amount: 85000,
    participants: 3,
    date: "2023-07-14",
    type: "transport",
    status: "pending",
  },
  {
    id: 3,
    name: "Movie Night Snacks",
    amount: 120000,
    participants: 5,
    date: "2023-07-13",
    type: "entertainment",
    status: "completed",
  },
  {
    id: 4,
    name: "Coffee Meeting",
    amount: 75000,
    participants: 2,
    date: "2023-07-12",
    type: "food",
    status: "completed",
  },
  {
    id: 5,
    name: "Shopping Trip",
    amount: 320000,
    participants: 6,
    date: "2023-07-11",
    type: "shopping",
    status: "completed",
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Recent Split Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {splitSessions.slice(0, 3).map((session) => (
            <div key={session.id} className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium">{session.name}</p>
                <p className="text-xs text-muted-foreground">
                  {session.participants} participants • {session.date}
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">Rp {session.amount.toLocaleString()}</span>
                <div
                  className={`ml-2 h-2 w-2 rounded-full ${
                    session.status === "completed" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4" variant="outline">
          View All Split Sessions
        </Button>
      </CardContent>
    </Card>
  )
}
