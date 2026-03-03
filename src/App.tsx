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
              Bun Boilerplate
            </p>
            <p className="text-sm text-muted-foreground">
              Lightweight SPA starter with canon pattern scaffolding.
            </p>
          </div>
          <ThemeToggle />
        </div>
      }
      footer={
        <p className="text-sm text-muted-foreground">
          PoC starter + pattern baseline. Promote proven patterns to `@jake` registry.
        </p>
      }
    >
      <SectionContainer width="wide" surface="none">
        <PageHeader
          title="Frontend Canon Starter"
          description="App Shell, Page Header, Section patterns, Card variants, and semantic action variants are prewired."
          actions={
            <div className="flex flex-wrap gap-2">
              <Button variant="main">Primary Action</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          }
        />
      </SectionContainer>

      <SectionContainer width="default" surface="subtle">
        <div className="grid gap-4 md:grid-cols-2">
          <ContentCard variant="text" title="Section Pattern">
            Shared spacing, width, and surface rhythm lives in reusable section primitives.
          </ContentCard>
          <ContentCard variant="utility" title="Card Variants">
            Reusable content surfaces cover common contexts without ad-hoc style drift.
          </ContentCard>
          <ContentCard variant="gallery" title="Semantic Actions">
            Button variants encode action hierarchy. Keep action styling semantic, not one-off.
          </ContentCard>
          <ContentCard variant="cta" title="tweakcn Bridge">
            Keep token names stable, swap values per project, and layer custom extras safely.
          </ContentCard>
        </div>
      </SectionContainer>
    </AppShell>
  )
}