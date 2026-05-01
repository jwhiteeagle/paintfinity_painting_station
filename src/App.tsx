import { AppShell } from "@/components/app/app-shell";
import { HeroHeader } from "@/components/app/hero-header";
import { ModuleCard } from "@/components/app/module-card";
import { SectionContainer } from "@/components/app/section-container";
import { SiteFooter } from "@/components/app/site-footer";
import { SiteHeader } from "@/components/app/site-header";
import { Button } from "@/components/ui/button";
import buyMeCoffeeButtonUrl from "@/assets/buymecoffee-560x280.png";
import catalogHeaderUrl from "@/assets/catalog-560x280.png";
import paypalButtonUrl from "@/assets/paypal-560x280.png";
import supportHeaderUrl from "@/assets/support-560x280.png";
import moduleCatalog from "@/data/paintfinity-modules.json";

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
          leftRail={
            <div className="flex h-full flex-col gap-4">
              <img
                src={catalogHeaderUrl}
                alt="Catalog"
                className="aspect-2/1 w-full border border-secondary/80 object-contain"
              />
              <div className="flex flex-1 items-center">
                <dl className="grid w-full grid-cols-2 gap-x-4 gap-y-5 text-center lg:grid-cols-1">
                  <div>
                    <dt className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Paintfinity Modules:
                    </dt>
                    <dd className="font-mono text-3xl font-semibold text-foreground">
                      {moduleCatalog.totals.modules}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Unique Models:
                    </dt>
                    <dd className="font-mono text-3xl font-semibold text-foreground">
                      {moduleCatalog.totals.uniqueModels}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Model Variants:
                    </dt>
                    <dd className="font-mono text-3xl font-semibold text-foreground">
                      {moduleCatalog.totals.variants}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Total Model Count:
                    </dt>
                    <dd className="font-mono text-3xl font-semibold text-foreground">
                      {moduleCatalog.totals.totalModelsAndVariants}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          }
          rightRail={
            <div className="flex h-full flex-col gap-4">
              <img
                src={supportHeaderUrl}
                alt="Support"
                className="aspect-2/1 w-full border border-secondary/80 object-contain"
              />
              <div className="flex flex-1 flex-col justify-center gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Paintfinity is 100% free. I develop it solo as my way of sharing my knowledge and passion for miniature painting with others!
                  If you find my system useful, tell a fellow hobbyist about it!
                  <br />
                  <br />
                  If you'd like to support the ongoing development of Paintfinity, use one of my virtual tip jars below!
                </p>
                <div className="grid justify-items-center gap-3">
                  <Button
                    type="button"
                    variant="main"
                    aria-label="Support Paintfinity with PayPal"
                    className="h-auto w-full max-w-28 border-secondary/90 p-0.5"
                  >
                    <img
                      src={paypalButtonUrl}
                      alt=""
                      className="aspect-2/1 w-full object-contain"
                    />
                  </Button>
                  <Button
                    type="button"
                    variant="main"
                    aria-label="Support Paintfinity with Buy Me a Coffee"
                    className="h-auto w-full max-w-28 border-secondary/90 p-0.5"
                  >
                    <img
                      src={buyMeCoffeeButtonUrl}
                      alt=""
                      className="aspect-2/1 w-full object-contain"
                    />
                  </Button>
                </div>
              </div>
            </div>
          }
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
            Hey. It's me, Jake. I've been a full time commission miniature painter "professionally" for over a decade
            now. I created Paintfinity as a passion project to streamline the mini painting process in the best way I could. My system works
            best when utilized with Gridfinity, but it's not a requirement.
          </p>
          <p>
            Learn more about Gridfinity here:{" "}
            <a
              href="https://gridfinity.xyz/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://gridfinity.xyz/
            </a>
          </p>
          <p>
            I wanted to make a true one stop system that covers everything that might be useful to a variety of painting styles. A 
            lot of the really well designed 3d printed mini painting stations just aren't meant for batch painting. I wanted to make something
            that I could use whether painting a display piece, an army, or a giant dragon queen lizard-copter.
          </p>
          <p>
            Paintfinity models are organized into `modules` for quick navigation.
            All modules have both P1S and A1 Mini sized print plates. The entire module catalog prints with 0 supports. Smooth bottom
            NOGRID variants are included for those who want to opt out of Gridfinity integration.
          </p>
            <p>
            Paintfinity is completely free!
            No e-mail lists, no crowdfunding, no roadmaps. The entire system is available to download and use right now.
          </p>
        </HeroHeader>
      </SectionContainer>

      <SectionContainer
        width="wide"
        surface="subtle"
        contentLayout="grid-4"
        className="scroll-mt-20"
        id="modules"
      >
        {moduleCatalog.modules.map((module) => (
          <ModuleCard
            key={module.slug}
            title={module.displayTitle}
            tagline={module.tagline}
            heroImage={module.heroImage}
            makerworldUrl={module.makerworldUrl}
          />
        ))}
      </SectionContainer>
    </AppShell>
  );
}
