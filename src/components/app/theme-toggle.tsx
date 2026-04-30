import { useTheme } from "@/components/app/theme-provider"
import { cn } from "@/lib/utils"

const themeOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="inline-flex rounded-md border border-border bg-background p-0.5 shadow-sm"
      role="group"
      aria-label="Theme selection"
    >
      {themeOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          className={cn(
            "type-label h-7 rounded-sm px-2.5 text-muted-foreground transition-colors hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            theme === option.value && "bg-primary text-primary-foreground shadow-xs"
          )}
          aria-pressed={theme === option.value}
          onClick={() => setTheme(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
