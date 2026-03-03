import { useTheme } from "@/components/app/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const next = resolvedTheme === "dark" ? "light" : "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
    >
      {resolvedTheme === "dark" ? "Light" : "Dark"}
    </Button>
  )
}