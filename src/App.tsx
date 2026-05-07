import { AppShell } from "@/components/app/app-shell";
import { CatalogStats } from "@/components/app/catalog-stats";
import { GifPlayer } from "@/components/app/gif-player";
import { HeroHeader } from "@/components/app/hero-header";
import { ModuleCard } from "@/components/app/module-card";
import { SectionContainer } from "@/components/app/section-container";
import { SiteFooter } from "@/components/app/site-footer";
import { SiteHeader } from "@/components/app/site-header";
import { Button, buttonVariants } from "@/components/ui/button";
import type * as React from "react";
import buyMeCoffeeButtonUrl from "@/assets/buymecoffee-560x280.png";
import { moduleHeroImages } from "@/assets/module/module-hero-images";
import paypalButtonUrl from "@/assets/paypal-560x280.png";
import moduleCatalog from "@/data/paintfinity-modules.json";

const paypalDonateUrl = "https://www.paypal.com/donate/?hosted_button_id=RNAQ4X8MUK5A8";
const buyMeCoffeeUrl = "https://buymeacoffee.com/chieflivegaming";
const contactEmail = "chieflivegaming@gmail.com";
const moduleRequestMailto = `mailto:${contactEmail}?subject=Paintfinity%20module%20request`;
const [contactEmailName, contactEmailDomain] = contactEmail.split("@");

const railPanelClassName = "surface-gradient w-full p-4 text-center";
const supportImageButtonClassName =
  "w-full max-w-28 overflow-hidden border-secondary/90 shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30";

function RailHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="surface-gradient-header flex min-h-15 items-center justify-center border px-4 py-4">
      <h2
        className="relative font-display text-5xl leading-[0.95] tracking-[0.08em] text-foreground/95"
        style={{
          textShadow: "0 4px 0 rgb(0 0 0 / 0.8), -2px 3px 0 rgb(0 0 0 / 0.65)",
        }}
      >
        {children}
      </h2>
    </div>
  );
}

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
            <div className="flex h-full flex-col gap-4">
              <RailHeader>Catalog</RailHeader>
              <div className="flex flex-1 flex-col justify-center gap-4">
                <div className={railPanelClassName}>
                  <CatalogStats totals={moduleCatalog.totals} />
                </div>
                <div className={railPanelClassName}>
                  <p className="type-section-heading">
                    In development:
                  </p>
                  <p className="mt-3 type-body">
                    - Airbrush Stand
                  </p>
                  <p className="type-body">
                    - Multiboard hanging adapter
                  </p>
                </div>
              </div>
            </div>
          }
          rightRail={
            <div className="flex h-full flex-col gap-4">
              <RailHeader>Support</RailHeader>
              <div className="flex flex-1 flex-col justify-center gap-4">
                <div className={railPanelClassName}>
                  <p className="type-body">
                    Paintfinity is 100% free. I made it as my way of sharing my knowledge and passion for miniature painting with others!
                    If you find my system useful, tell a fellow hobbyist about it!
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
                        className: supportImageButtonClassName,
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
                        className: supportImageButtonClassName,
                      })}
                    >
                      <img
                        src={buyMeCoffeeButtonUrl}
                        alt=""
                        className="block aspect-2/1 w-full"
                      />
                    </a>
                  </div>
                </div>
                <div className={railPanelClassName}>
                  <p className="type-body">
                    Have a request for a new module?
                    <br />
                    Contact me here:
                  </p>
                  <p className="mt-2 type-data">
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
                </div>
              </div>
            </div>
          }
        >
          <p>
            Hey. I'm Jake. I've been a full time commission miniature painter "professionally" for over a decade
            now. Paintfinity is a passion project with the goal of making miniature painting more accessible, efficient, and ergonomic.
            There are some common pain points that everybody runs into, especially when you scale up your projects. 
            I try to design models that work together to solve as many of those pain points as possible based on my own experiences with large projects.
          </p>
          <p>
            My system works best when utilized with Gridfinity, but it's not a requirement.
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
          <p className="text-lg font-bold text-foreground/75">
            Paintfinity is completely free!
            No crowdfunding or development roadmaps. No email lists or gated .stls. The whole project is free to download and ready to print right now!
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
