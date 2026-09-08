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
import gridfinityDemoUrl from "@/assets/gridfinity_demo.webp";
import gridfinityBinsDemoUrl from "@/assets/gridfinity_demo_1.webp";
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
            <div className="layout-stack gap-3 sm:gap-4">
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
            </div>
          }
          
          rightRail={
            <HeroRail title="What's Gridfinity?">
              <HeroRailPanel>
                <div className="layout-stack gap-3 sm:gap-4">
                  <p className="type-body">
                    Gridfinity starts with baseplates. They can be printed in any size you need and have optional slots for magnets.I used some hot glue to stick them down to my desktop. Many baseplates connected together can form a large modular grid for organizing your workspace!
                  </p>
                  <img
                    src={gridfinityDemoUrl}
                    alt="Gridfinity baseplate demo"
                    loading="lazy"
                    className="mx-auto block aspect-square w-full max-w-40 border border-primary/50 bg-muted/10 object-contain"
                  />
                  <p className="type-body">
                    The bottoms of all my modules have spots for magnets to be embedded. This allows you to securely move things around within your baseplate grid. If you have a large batch painting project, you can move entire squads of minis on trays and keep them safe and organized at the same time!
                  </p>
                  <img
                    src={gridfinityBinsDemoUrl}
                    alt="Gridfinity bins and baseplate demo"
                    loading="lazy"
                    className="mx-auto block aspect-square w-full max-w-40 border border-primary/50 bg-muted/10 object-contain"
                  />
                  <p className="type-body">
                    Learn more about Gridfinity and Zack's other projects here:{" "}
                    <a
                      href="https://gridfinity.xyz/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4"
                    >
                      https://gridfinity.xyz/
                    </a>
                  </p>
                </div>
              </HeroRailPanel>
            </HeroRail>
          }
        >
          <p>
             Paintfinity is my solo run passion project I started to try to make useful 3d printable accessories for miniature painters. My entire system is 100% free with no paid content, mailing lists, or subscriptions. I am always expanding the catalog of modules and welcome any feedback or requests for new modules!
          </p>
          <p>  
             I try to focus on organization and efficiency with my designs. Everything in Paintfinity is modular, start with something you find useful and expand at any time.
          </p>
          <p>
             My models were designed from the start to work alongside Gridfinity, a modular storage system designed by Zack Freedman. All of my designs also have flat bottom variants for those who prefer not to use Gridfinity. 
          </p>
          <p>
             A big benefit of my system is it's scalability. Utilizing my weighted painting handles and their magnetized toppers allow batch painting to be done with ease. I have docks for both handles and toppers, as well as trays with carrying handles for moving entire squads of minis around your workspace while keeping them safe and organized.  
          </p>
          
          <GifPlayer gifUrl="/embeds/paintfinity-handle-demo-v1.gif" />
        </HeroHeader>
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
