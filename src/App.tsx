import { useEffect } from "react";
import { ContentImage } from "@/components/app/content-image";
import handleViewUrl from "@/assets/handle-view.png";
import brushGripUrl from "@/assets/brush-grip-1.png";
import overviewsUrl from "@/assets/overviews.png";
import { AppShell } from "@/components/app/app-shell";
import { CatalogStats } from "@/components/app/catalog-stats";
import { HeroHeader, HeroRail, HeroRailPanel } from "@/components/app/hero-header";
import { ModuleCard } from "@/components/app/module-card";
import { SectionContainer } from "@/components/app/section-container";
import { SiteFooter } from "@/components/app/site-footer";
import { SiteHeader } from "@/components/app/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TextEmphasis } from "@/components/ui/text-emphasis";
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
  useEffect(() => {
    // Cross-page links arrive before React has mounted the module grid.
    if (window.location.hash === "#modules") {
      document.getElementById("modules")?.scrollIntoView({ block: "start" });
    }
  }, []);

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
              <HeroRail title="Catalog" href="#modules">
                <HeroRailPanel>
                  <CatalogStats totals={moduleCatalog.totals} />
                </HeroRailPanel>
                
              </HeroRail>
              <HeroRail title="Support">
                <HeroRailPanel>
                  <p>                  
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

                <HeroRail title= "Contact">
                <HeroRailPanel>
                  <p>
                    Have a request for a new module? Want to give feedback or report a bug?
                    <br />
                    Contact me here:
                  </p>
                  <p className="mt-2 font-mono text-xs font-semibold text-foreground">
                    {contactEmailName}
                    @{contactEmailDomain}
                  </p>
                  <a
                    href={moduleRequestMailto}
                    className={cn(buttonVariants({ variant: "inverted" }), "mt-3")}
                    aria-label="Email Chief Live Gaming with a Paintfinity module request"
                  >
                    Contact
                  </a>
                </HeroRailPanel>
              </HeroRail>
              </HeroRail>
            </div>
          }
          
          rightRail={
            <div className="layout-stack gap-3 sm:gap-4">
              <HeroRail subtitle="What's Gridfinity?" href="/gridfinity">
                <HeroRailPanel>
                  <div className="space-y-3 sm:space-y-4">
                    <p>
                      My models work alongside <TextEmphasis>Gridfinity</TextEmphasis>, a modular storage system designed by Zack Freedman. Paintfinity is fully compatible under the standard GFU, so you can add any of the countless other useful Gridfinity compatible designs right alongside mine.
                    </p>
                    <p>
                      Don't want to use Gridfinity? No problem, I made flat bottom variants for all my designs too!
                    </p>
                    <div className="flex justify-center items-center flex-wrap gap-3">
                      <a
                        href="/gridfinity"
                        className={cn(
                          buttonVariants({ variant: "inverted" }),
                          "h-auto max-w-full whitespace-normal py-2 text-center"
                        )}
                      >
                        Gridfinity Basics Overview
                      </a>
                    </div>
                  </div>
                </HeroRailPanel>
              </HeroRail>
              <HeroRail title="Ergonomics">
                <HeroRailPanel>
                  <p>
                    After painting commission projects hours a day for over a decade, I started to develop some hand and wrist issues that I couldn't ignore.  
                    <br />
                    <br />
                    I learned the importance of ergonomics and varied movements when painting. Small adjustments and considerations go a long way,  and always make small ergonomic considerations with my designs where possible. 
                  </p>
                  <div className="mt-3 sm:mt-4">
                    <ContentImage
                      src={brushGripUrl}
                      alt="Paintfinity ergonomic brush grip"
                      aspect="wide"
                      maxWidth={220}
                      zoomable
                    />
                  </div>
                </HeroRailPanel>
              </HeroRail>

              {/* Amazon Links is unpublished. Restore this block and its build entry when ready.
              <SectionLabel variant="title" href="/amazonlinks">
                Amazon Links
              </SectionLabel>
              <p className="type-body">Find supplies and accessories for your Paintfinity setup.</p>
              */}
            </div>
          }
        >
          {/* One: introduction */}
          <div className="space-y-3 sm:space-y-4">
            <p>
              Paintfinity is my solo run passion project to make useful 3d printable accessories for miniature painters. My entire system is <TextEmphasis>completely free</TextEmphasis> with no paid content, mailing lists, or subscriptions. I am always expanding the catalog and welcome feedback or requests for new modules!
            </p>
            <p>
              I focus on organization and efficiency with my designs. Everything in Paintfinity is modular, start with something you find useful and expand at any time! It's designed to be highly customizable to your own workflow and painting style.
            </p>
          </div>

          <div className="@container w-full min-w-0">
            <div className="grid grid-cols-1 items-start gap-x-1 gap-y-4 @min-[480px]:grid-cols-2">
              <ContentImage zoomable
                src={handleViewUrl}
                alt="Mini painting handle and accessories"
                aspect="landscape"
                caption="My Mini Painting Handle and accessories"
                maxWidth={800}
              />
              <ContentImage zoomable
                src={overviewsUrl}
                alt="Paintfinity accessories overview"
                aspect="landscape"
                caption="Wide range of accessories for your painting workflow"
                maxWidth={800}
              />
            </div>
          </div>

          {/* Three: batch painting and demo */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-center text-lg font-semibold text-foreground underline underline-offset-4">
              Batch Painting Friendly
            </h4>
            <p>
              A big benefit of Paintfinity is it's scalability. It has storage docks and trays for both painting handles and toppers to keep models protected and your project organized. Swapping models off of one handle or having a dedicated handle under each mini is supported at scale.
            </p>
            
          </div>
        </HeroHeader>
      </SectionContainer>

      <SectionContainer
        variant="moduleGrid"
        id="modules"
        heading={
          <div className="flex flex-col gap-3">
            <h2 className="type-display text-center text-5xl sm:text-5xl">
              Paintfinity Modules
            </h2>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <p>View the full model collection on MakerWorld, or find links to individual modules below</p>
              <a
                href="https://makerworld.com/en/collections/17272977-paintfinity"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "inverted" })}
              >
                MakerWorld Collection
              </a>
            </div>
          </div>
        }
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
