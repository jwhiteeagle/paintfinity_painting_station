import { AppShell } from "@/components/app/app-shell";
import { ContentCard } from "@/components/app/content-card";
import { HeroHeader } from "@/components/app/hero-header";
import { ModuleCard } from "@/components/app/module-card";
import { PageHeader } from "@/components/app/page-header";
import { SectionContainer } from "@/components/app/section-container";
import { SiteFooter } from "@/components/app/site-footer";
import { SiteHeader } from "@/components/app/site-header";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <AppShell
      header={<SiteHeader />}
      footer={<SiteFooter />}
      mainClassName="pt-0"
    >
      <SectionContainer width="wide" surface="none" className="pt-0">
        <HeroHeader
          title="Paintfinity"
          tagline="A 3-D printed miniature painting station"
          actions={
            <>
              <a href="#modules">
                <Button variant="main">Available Modules</Button>
              </a>
              <a
                href="https://gridfinity.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary">Gridfinity</Button>
              </a>
            </>
          }
        >
          <p>
            Developed by a commission miniature painter with over a decade of
            experience, Paintfinity is a fully modular hobby station built to
            support large scale projects, improve ergonomics, and speed up your
            painting workflow.
          </p>
          <p>
            Commission painters move thousands of models across the painting
            bench every year. Paintfinity turns that practical bench experience
            into a system that works for hobbyists painting one model or one
            hundred.
          </p>
        </HeroHeader>
      </SectionContainer>

      <SectionContainer width="default" surface="subtle" contentLayout="grid-4">
        <ContentCard variant="default" title="Constantly Expanding">
          This is a passion project grounded in the experience I've built over the
          last decade commission miniature painting full time. I will continue to
          expand the collection of official modules to make the hobby station as
          versatile as possible!
        </ContentCard>
        <ContentCard variant="accent" title="Completely Free. Right now.">
          No kickstarters. No Roadmaps. No waiting. All of my models are FREE TO
          DOWNLOAD and LIVE NOW.
        </ContentCard>
        <ContentCard variant="subtle" title="Modular and Customizable">
          Paintfinity covers most of your mini painting needs. Want more? Mix in
          any other standard Gridfinity compatible models to build a truly unique
          hobby station.
        </ContentCard>
        <ContentCard variant="outlined" title="Built for Gridfinity">
          Paintfinity is built to work with Zack Freedman's open source system,
          Gridfinity. Don't care about Gridfinity? I have smooth bottom variants
          too!
        </ContentCard>
      </SectionContainer>

      <SectionContainer
        width="default"
        surface="none"
        contentLayout="stack"
        className="scroll-mt-20"
        id="modules"
      >
        <PageHeader
          align="center"
          title="Available Modules"
          description="This is the product-facing content lane the old showcase was moving toward: cards with a title, short description, preview image space, and a clear link out to MakerWorld as each Paintfinity module is finalized."
        />
      </SectionContainer>

      <SectionContainer width="wide" surface="subtle" contentLayout="grid-4">
        <ModuleCard title="Mini Painting Handle" />
        <ModuleCard title="Mini Painting Toppers" />
        <ModuleCard title="Bike Grip Mini Painting Handle" />
        <ModuleCard title="Mini Painting Handle Docks and Trays" />
        <ModuleCard title="Ergonomic Brush Grip" />
        <ModuleCard title="Ergonomic Brush Grip Rack" />
        <ModuleCard title="Wall Mount Drilling Guide" />
        <ModuleCard title="Pro Acryl Expert Acrylics Paint Rack" />
        <ModuleCard title="All in One Paint Rack" />
        <ModuleCard title="Brush Rinse Station" />
        <ModuleCard title="Blue Brush Rinse Station Dock" />
        <ModuleCard title="Meeden Dry Palette Dock" />
        <ModuleCard title="Basic Brush Rack" />
        <ModuleCard title="Ink Drybrush Pad Dock" />
        <ModuleCard title="Drybrush Texture Pad Palette" />
        <ModuleCard title="Module Storage Riser" />
      </SectionContainer>
    </AppShell>
  );
}
