import { AppShell } from "@/components/app/app-shell";
import { HeroHeader } from "@/components/app/hero-header";
import { ModuleCard } from "@/components/app/module-card";
import { SectionContainer } from "@/components/app/section-container";
import { SiteFooter } from "@/components/app/site-footer";
import { SiteHeader } from "@/components/app/site-header";
import { Button, buttonVariants } from "@/components/ui/button";
import buyMeCoffeeButtonUrl from "@/assets/buymecoffee-560x280.png";
import catalogHeaderUrl from "@/assets/catalog-560x280.png";
import { moduleHeroImages } from "@/assets/module/module-hero-images";
import paypalButtonUrl from "@/assets/paypal-560x280.png";
import supportHeaderUrl from "@/assets/support-560x280.png";
import moduleCatalog from "@/data/paintfinity-modules.json";

const paypalDonateUrl = "https://www.paypal.com/donate/?hosted_button_id=RNAQ4X8MUK5A8";
const buyMeCoffeeUrl = "https://buymeacoffee.com/chieflivegaming";
const contactEmail = "chieflivegaming@gmail.com";
const moduleRequestMailto = `mailto:${contactEmail}?subject=Paintfinity%20module%20request`;

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
          tagline="A 3D printed miniature painting station"
          leftRail={
            <div className="flex h-full flex-col gap-4">
              <img
                src={catalogHeaderUrl}
                alt="Catalog"
                className="aspect-2/1 w-full border border-secondary/80 object-contain"
              />
              <div className="flex flex-1 flex-col justify-center gap-4">
                <dl className="grid w-full grid-cols-2 gap-x-4 gap-y-5 border border-primary/50 bg-linear-to-br from-primary/40 via-primary/5 to-secondary/20 p-4 text-center shadow-xs lg:grid-cols-1">
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
                <div className="w-full border border-primary/50 bg-linear-to-br from-primary/40 via-primary/5 to-secondary/20 p-4 text-center shadow-xs">
                  <p className="font-mono text-lg font-semibold uppercase tracking-[0.14em] text-foreground">
                    In development:
                  </p>
                  <p className="mt-3 text-medium leading-relaxed text-muted-foreground">
                    - Airbrush Stand
                  </p>
                  <p className="text-medium leading-relaxed text-muted-foreground">
                    - Multiboard hanging adapter
                  </p>
                </div>
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
                  Paintfinity is 100% free. I made it as my way of sharing my knowledge and passion for miniature painting with others!
                  If you find my system useful, tell a fellow hobbyist about it!
                  <br />
                  <br />
                  If you'd like to support the ongoing development of Paintfinity with a monetary donation, use one of my virtual tip jars below!
                </p>
                <div className="grid justify-items-center gap-3">
                  <a
                    href={paypalDonateUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Support Paintfinity with PayPal"
                    className={buttonVariants({
                      variant: "main",
                      size: "image",
                      className: "w-28 overflow-hidden border-secondary/90 shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30",
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
                      variant: "main",
                      size: "image",
                      className: "w-28 overflow-hidden border-secondary/90 shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30",
                    })}
                  >
                    <img
                      src={buyMeCoffeeButtonUrl}
                      alt=""
                      className="block aspect-2/1 w-full"
                    />
                  </a>
                </div>
                <div className="w-full border border-primary/50 bg-linear-to-br from-primary/40 via-primary/5 to-secondary/20 p-4 text-center shadow-xs">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Have a request for a new module?
                    <br />
                    Contact me here:
                  </p>
                  <p className="mt-2 font-mono text-xs font-semibold text-foreground">
                    {contactEmail}
                  </p>
                  <a
                    href={moduleRequestMailto}
                    className="mt-3 inline-flex"
                    aria-label="Email Chief Live Gaming with a Paintfinity module request"
                  >
                    <Button variant="secondary" size="sm">Contact</Button>
                  </a>
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
                href="https://makerworld.com/en/collections/17272977-paintfinity"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary">MakerWorld Collection</Button>
              </a>
            </>
          }
        >
          <p>
            Hey. I'm Jake. I've been a full time commission miniature painter "professionally" for over a decade
            now. I created Paintfinity as a passion project to share my love for miniature painting and try to make it accessible to more painters. 
            My goal is a true one stop system that covers everything you might need for a variety of painting styles or project sizes. 
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
          
          <p>
            I've organized Paintfinity model sets into themed "modules" for quick navigation.
            My entire module catalog prints with 0 supports and is optimized for a 0.4mm nozzle. Smooth bottom
            NOGRID model variants are included for those who want to opt out of Gridfinity integration.
          </p>
          <p className="text-lg font-bold text-foreground/75">
            Paintfinity is completely free!
            No e-mail lists, no crowdfunding, no roadmaps. The entire system is available to download and use right now!
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
            highlights={module.highlights}
            heroImage={moduleHeroImages[module.slug]}
            makerworldUrl={module.makerworldUrl}
          />
        ))}
      </SectionContainer>
    </AppShell>
  );
}
