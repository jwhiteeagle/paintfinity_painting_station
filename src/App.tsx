import { AppShell } from "@/components/app/app-shell"
import { ContentCard } from "@/components/app/content-card"
import { PageHeader } from "@/components/app/page-header"
import { SectionContainer } from "@/components/app/section-container"
import { ThemeToggle } from "@/components/app/theme-toggle"
import { Button } from "@/components/ui/button"

const quickFacts = [
  {
    title: "Developed by a Commission Miniature Painter",
    description:
      "Paintfinity is a 3D printable miniature painting station built from the perspective of repeat hobby use, station setup, and practical workflow.",
  },
  {
    title: "Hosted on MakerWorld",
    description:
      "All Paintfinity models are intended to live on MakerWorld under their respective licenses, making release links and print access easy to keep visible.",
  },
  {
    title: "Built for Gridfinity",
    description:
      "Paintfinity is built to work with Zack Freedman's open source storage system, Gridfinity, while adding a magnetic base approach for flexible station layouts.",
  },
] as const

const modulePlaceholders = [
  {
    title: "Module Showcase Cards",
    description:
      "This section will expand into the product-facing module grid: title, concise description, preview image, and a direct MakerWorld link for each release.",
    actionLabel: "MakerWorld Releases",
    href: "https://makerworld.com/",
  },
  {
    title: "Quick Links",
    description:
      "The earlier Paintfinity showcase used a quick-link block for fast scanning. That pattern still fits the product and can grow into grouped module shortcuts as the catalog fills out.",
    actionLabel: "Jump to Gridfinity",
    href: "https://gridfinity.xyz/",
  },
  {
    title: "Release-Friendly Structure",
    description:
      "The immediate goal is a clear landing page that explains what Paintfinity is, why it is useful, and where each module can be found as assets and product shots are added.",
    actionLabel: "Chief Live Gaming",
    href: "https://chieflivegaming.com/",
  },
] as const

export default function App() {
  return (
    <AppShell
      header={
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Paintfinity
            </p>
            <p className="text-sm text-muted-foreground">
              3D Printable Miniature Painting Station
            </p>
          </div>
          <ThemeToggle />
        </div>
      }
      footer={
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            All Paintfinity models were designed by Jake / Chief Live Gaming and are
            hosted on MakerWorld under their respective licenses.
          </p>
          <p>
            Paintfinity is built to work with Zack Freedman's open source storage
            system, Gridfinity.
          </p>
        </div>
      }
    >
      <SectionContainer width="wide" surface="none">
        <PageHeader
          title="Paintfinity Painting Station"
          description="Developed by a commission miniature painter. A one stop solution for miniature painting hobby station needs, with a landing page structure that can grow around module previews, release links, and product photography."
          actions={
            <div className="flex flex-wrap gap-2">
              <a href="#modules">
                <Button variant="main">Available Modules</Button>
              </a>
              <a href="https://gridfinity.xyz/" target="_blank" rel="noreferrer">
                <Button variant="secondary">Gridfinity</Button>
              </a>
            </div>
          }
        />
      </SectionContainer>

      <SectionContainer width="default" surface="subtle">
        <div className="grid gap-4 md:grid-cols-3">
          {quickFacts.map((fact, index) => (
            <ContentCard
              key={fact.title}
              variant={
                index === 0 ? "text" : index === 1 ? "utility" : "gallery"
              }
              title={fact.title}
            >
              {fact.description}
            </ContentCard>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer width="wide" surface="none" className="scroll-mt-20" id="modules">
        <PageHeader
          title="Available Modules"
          description="This is the product-facing content lane the old showcase was moving toward: cards with a title, short description, preview image space, and a clear link out to MakerWorld as each Paintfinity module is finalized."
        />
      </SectionContainer>

      <SectionContainer width="default" surface="subtle">
        <div className="grid gap-4 lg:grid-cols-3">
          {modulePlaceholders.map((item, index) => (
            <ContentCard
              key={item.title}
              variant={index === 2 ? "cta" : "default"}
              title={item.title}
              contentClassName="space-y-4"
            >
              <div className="aspect-4/3 rounded-lg border border-dashed border-border/80 bg-muted/40" />
              <p>{item.description}</p>
              <div>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <Button variant={index === 2 ? "main" : "outline"}>
                    {item.actionLabel}
                  </Button>
                </a>
              </div>
            </ContentCard>
          ))}
        </div>
      </SectionContainer>
    </AppShell>
  )
}
