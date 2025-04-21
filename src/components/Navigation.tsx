import { ThemeToggle } from "@/components/theme-toggle"

export default function Navigation() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Your existing navigation items */}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Your other navigation items */}
        </div>
      </div>
    </nav>
  )
}