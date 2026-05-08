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
      className="inline-flex rounded-none border border-border bg-background p-px shadow-sm sm:p-0.5"
      role="group"
      aria-label="Theme selection"
    >
      {themeOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          className={cn(
            "type-label h-6 rounded-none px-1.5 text-[0.55rem] tracking-[0.08em] text-muted-foreground transition-colors hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-7 sm:px-2.5 sm:text-[0.68rem] sm:tracking-[0.14em]",
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
