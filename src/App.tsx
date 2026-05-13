import { AppShell } from "@/components/app/app-shell";
import { CatalogStats } from "@/components/app/catalog-stats";
import { GifPlayer } from "@/components/app/gif-player";
import { HeroHeader, HeroRail, HeroRailPanel } from "@/components/app/hero-header";
import { ModuleCard } from "@/components/app/module-card";
import { SectionContainer } from "@/components/app/section-container";
import { SiteFooter } from "@/components/app/site-footer";
import { SiteHeader } from "@/components/app/site-header";
import { Button, buttonVariants } from "@/components/ui/button";
import buyMeCoffeeButtonUrl from "@/assets/buymecoffee-560x280.png";
import { moduleHeroImages } from "@/assets/module/module-hero-images";
import paypalButtonUrl from "@/assets/paypal-560x280.png";
import moduleCatalog from "@/data/paintfinity-modules.json";

const paypalDonateUrl = "https://www.paypal.com/donate/?hosted_button_id=RNAQ4X8MUK5A8";
const buyMeCoffeeUrl = "https://buymeacoffee.com/chieflivegaming";
const contactEmail = "chieflivegaming@gmail.com";
const moduleRequestMailto = `mailto:${contactEmail}?subject=Paintfinity%20module%20request`;
const [contactEmailName, contactEmailDomain] = contactEmail.split("@");

export default function App() {
  return (
    <AppShell
      header={<SiteHeader />}
      footer={<SiteFooter />}
    >
      <SectionContainer>
        <HeroHeader
          title="Paintfinity"
          tagline="A 3D printed miniature painting station"
          leftRail={
            <HeroRail title="Catalog">
              <HeroRailPanel>
                <CatalogStats totals={moduleCatalog.totals} />
              </HeroRailPanel>
              <HeroRailPanel>
                <p className="type-meta text-lg font-semibold text-foreground">
                  In development:
                </p>
                <p className="mt-3 type-body">
                  - Airbrush Stand
                </p>
                <p className="type-body">
                  - Multiboard hanging adapter
                </p>
              </HeroRailPanel>
            </HeroRail>
          }
          rightRail={
            <HeroRail title="Support">
              <HeroRailPanel>
                <p className="type-body">
                  If you find Paintfinity useful, please consider telling a fellow hobbyist about it!
                  <br />
                  <br />
                  If you'd like to support the ongoing development of Paintfinity with a monetary donation, use one of my virtual tip jars below!
                </p>
                <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(4.75rem,1fr))] justify-items-center gap-3">
                  <a
                    href={paypalDonateUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Support Paintfinity with PayPal"
                    className={buttonVariants({
                      variant: "image",
                      className:
                        "w-full max-w-24 overflow-hidden border-secondary/90 shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 sm:max-w-28",
                    })}
                  >
                    <img
                      src={paypalButtonUrl}
                      alt=""
                      className="block aspect-2/1 w-full"
                    />
                  </a>
                  <a
                    href={buyMeCoffeeUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Support Paintfinity with Buy Me a Coffee"
                    className={buttonVariants({
                      variant: "image",
                      className:
                        "w-full max-w-24 overflow-hidden border-secondary/90 shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 sm:max-w-28",
                    })}
                  >
                    <img
                      src={buyMeCoffeeButtonUrl}
                      alt=""
                      className="block aspect-2/1 w-full"
                    />
                  </a>
                </div>
              </HeroRailPanel>
              <HeroRailPanel>
                <p className="type-body">
                  Have a request for a new module?
                  Contact me here:
                </p>
                <p className="mt-2 font-mono text-xs font-semibold text-foreground">
                  {contactEmailName}
                  <br />
                  @{contactEmailDomain}
                </p>
                <a
                  href={moduleRequestMailto}
                  className="mt-3 inline-flex"
                  aria-label="Email Chief Live Gaming with a Paintfinity module request"
                >
                  <Button variant="inverted">Contact</Button>
                </a>
              </HeroRailPanel>
            </HeroRail>
          }
        >
          <p>
             Hey, I'm Jake. I've been a full time commission miniature painter for the last 10 years. 
             Paintfinity is my solo run passion project with the goal of bundling up all the little tips, 
             tricks, and optimizations I've picked up over the years into a cohesive painting station.
             I want to help more painters get into the hobby and try to take away some of the intimidation factor 
             that can come with getting started on large armies or collections. 
          </p>
          <p>
            My system works best when utilized with Gridfinity, but it's optional.
            Learn more about Gridfinity and Zach's other projects here:{" "}
            <a
              href="https://gridfinity.xyz/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://gridfinity.xyz/
            </a>
          </p>
          <p className="text-lg font-bold text-foreground/75">
            Paintfinity is completely free!
            No crowdfunding, roadmaps, or gated model files- Everything is free to download and ready to print!
          </p>
        </HeroHeader>
      </SectionContainer>

      <SectionContainer>
        <GifPlayer gifUrl="/embeds/paintfinity-handle-demo-v1.gif" />
      </SectionContainer>

      <SectionContainer
        variant="moduleGrid"
        id="modules"
      >
        {moduleCatalog.modules.map((module) => (
          <ModuleCard
            key={module.slug}
            title={module.displayTitle}
            highlights={module.highlights}
            heroImage={moduleHeroImages[module.slug]}
            makerworldUrl={module.makerworldUrl}
          />
        ))}
      </SectionContainer>
    </AppShell>
  );
}
