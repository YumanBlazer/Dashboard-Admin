"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users2, DollarSign, BarChart3, Settings, LogOut, Menu, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, description: "Pengguna aktif & statistik utama" },
  { name: "User Management", href: "/users", icon: Users2, description: "CRUD profile pengguna" },
  { name: "Pendapatan", href: "/revenue", icon: DollarSign, description: "Analisis pendapatan platform" },
  {
    name: "Analisis Pengeluaran",
    href: "/spending-analysis",
    icon: BarChart3,
    description: "Kategori split bill populer",
  },
]

const bottomNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Sign Out", href: "/logout", icon: LogOut, isAction: true },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleSignOut = () => {
    // Implement logout logic here
    console.log("Signing out...")
    // You can add actual logout logic like clearing tokens, redirecting, etc.
    if (typeof window !== "undefined") {
      // Example: redirect to login page
      window.location.href = "/login"
    }
  }

  const NavItem = ({ item, isBottom = false }) => (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        {item.isAction ? (
          <button
            onClick={handleSignOut}
            className={cn(
              "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-red-50 hover:text-red-700 w-full text-left",
              "text-slate-600",
              isCollapsed && "justify-center px-2",
            )}
          >
            <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
            {!isCollapsed && <span>{item.name}</span>}
          </button>
        ) : (
          <Link
            href={item.href}
            className={cn(
              "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-slate-100",
              pathname === item.href
                ? "bg-slate-100 text-slate-800 border border-slate-300 shadow-sm"
                : "text-slate-600 hover:text-slate-900",
              isCollapsed && "justify-center px-2",
            )}
          >
            <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        )}
      </TooltipTrigger>
      {isCollapsed && (
        <TooltipContent
          side="right"
          className="flex items-center gap-4 bg-white text-slate-700 border border-slate-200 shadow-lg"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            {item.description && <p className="text-xs text-slate-500">{item.description}</p>}
          </div>
        </TooltipContent>
      )}
    </Tooltip>
  )

  return (
    <TooltipProvider>
      <>
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-slate-200 text-slate-600 hover:text-slate-900"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div
          className={cn(
            "fixed inset-y-0 z-20 flex flex-col bg-white border-r border-slate-200 shadow-sm transition-all duration-300 ease-in-out lg:static",
            isCollapsed ? "w-[72px]" : "w-72",
            isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          )}
        >
          <div className="border-b border-slate-200 bg-white">
            <div className={cn("flex h-16 items-center gap-2 px-4", isCollapsed && "justify-center px-2")}>
              {!isCollapsed && (
                <Link href="/" className="flex items-center font-semibold text-slate-800">
                  <span className="text-lg">Patungan MIS</span>
                </Link>
              )}
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "ml-auto h-8 w-8 text-slate-500 hover:text-slate-700 hover:bg-slate-100",
                  isCollapsed && "ml-0",
                )}
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
                <span className="sr-only">{isCollapsed ? "Expand" : "Collapse"} Sidebar</span>
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto bg-white">
            <nav className="flex-1 space-y-1 px-3 py-4">
              {navigation.map((item) => (
                <div key={item.name} className="group">
                  <NavItem item={item} />
                  {!isCollapsed && item.description && (
                    <p className="text-xs text-slate-400 px-3 mt-1 mb-2">{item.description}</p>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="border-t border-slate-200 p-3 bg-white">
            <nav className="space-y-1">
              {bottomNavigation.map((item) => (
                <NavItem key={item.name} item={item} isBottom />
              ))}
            </nav>
          </div>
        </div>
      </>
    </TooltipProvider>
  )
}
