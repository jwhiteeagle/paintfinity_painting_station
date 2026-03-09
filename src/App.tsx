import { AppShell } from "@/components/app/app-shell"
import { ContentCard } from "@/components/app/content-card"
import { PageHeader } from "@/components/app/page-header"
import { SectionContainer } from "@/components/app/section-container"
import { ThemeToggle } from "@/components/app/theme-toggle"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <AppShell
      header={
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Paintfinity Painting Station
            </p>
            <p className="text-sm text-muted-foreground">
              UI workspace for station planning, prep flow, and execution rhythm.
            </p>
          </div>
          <ThemeToggle />
        </div>
      }
      footer={
        <p className="text-sm text-muted-foreground">
          Placeholder shell for Paintfinity operations. Replace content slices as features land.
        </p>
      }
    >
      <SectionContainer width="wide" surface="none">
        <PageHeader
          title="Paintfinity Control Surface"
          description="Coordinate painting sessions, track station readiness, and keep repeatable workflows visible."
          actions={
            <div className="flex flex-wrap gap-2">
              <Button variant="main">Start Session</Button>
              <Button variant="secondary">View Queue</Button>
            </div>
          }
        />
      </SectionContainer>

      <SectionContainer width="default" surface="subtle">
        <div className="grid gap-4 md:grid-cols-2">
          <ContentCard variant="text" title="Session Planning">
            Outline upcoming painting sessions with owner, scope, and target completion window.
          </ContentCard>
          <ContentCard variant="utility" title="Palette and Material Prep">
            Track paints, brushes, and consumables so each session starts with complete kit coverage.
          </ContentCard>
          <ContentCard variant="gallery" title="Station Readiness">
            Capture setup checks for lighting, workspace layout, and cleanup status before active work.
          </ContentCard>
          <ContentCard variant="cta" title="Quality and Follow-Up">
            Record post-session notes, blockers, and next actions to improve repeatability over time.
          </ContentCard>
        </div>
      </SectionContainer>
    </AppShell>
  )
}
