import { ProjectGoalsTracker } from "@/components/project-goals-tracker"
import { SplitSessionAnalytics } from "@/components/split-session-analytics"
import { UserGrowthChart } from "@/components/user-growth-chart"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patungan MIS Dashboard</h1>
          <p className="text-muted-foreground">Management Information System for Split Bill Application</p>
        </div>
      </div>

      {/* Project Goals and User Growth side by side */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-1">
          <ProjectGoalsTracker />
        </div>
        <div className="md:col-span-1 space-y-6">
          <UserGrowthChart />
          <SplitSessionAnalytics />
        </div>
      </div>
    </div>
  )
}
