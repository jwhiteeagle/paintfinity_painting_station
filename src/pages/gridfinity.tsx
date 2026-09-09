import { AppShell } from "@/components/app/app-shell"
import { ContentImage } from "@/components/app/content-image"
import { SectionContainer } from "@/components/app/section-container"
import { SiteFooter } from "@/components/app/site-footer"
import { SiteHeader } from "@/components/app/site-header"
import { buttonVariants } from "@/components/ui/button"
import gridfinityDemoUrl from "@/assets/gridfinity_demo.webp"
import gridfinityBinsDemoUrl from "@/assets/gridfinity_demo_1.webp"
import { TextEmphasis } from "@/components/ui/text-emphasis"

export default function GridfinityPage() {
  return (
    <AppShell header={<SiteHeader />} footer={<SiteFooter />}>
      <SectionContainer variant="content">
        <h1 className="type-display text-4xl sm:text-5xl">What's Gridfinity?</h1>
        <p>
          Gridfinity starts with baseplates. They can be printed in any size you need and have optional slots for magnets.
          I used some hot glue to stick them down to my desktop. Many baseplates connected together can form a large modular grid for organizing your workspace!
        </p>
        <div className="mx-auto grid w-full max-w-116 grid-cols-1 items-start gap-6 sm:grid-cols-2">
          <ContentImage zoomable
            src={gridfinityDemoUrl}
            alt="Gridfinity baseplate demo"
            caption="Baseplates form a grid, magents are optional."
            maxWidth={220}
          />
          <ContentImage zoomable
            src={gridfinityBinsDemoUrl}
            alt="Gridfinity bins and baseplate demo"
            caption="Modules fit securely on baseplates with magnets."
            maxWidth={220}
          />
        </div>
        <p className="text-center">
          The bottoms of all my modules have spots for magnets to be embedded. This allows you to securely move things around within your baseplate grid.
          If you have a large batch painting project, you can move entire squads of minis on trays and keep them safe and organized at the same time!
        </p>
        <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-center text-lg font-semibold text-foreground underline underline-offset-4">
                      Getting Started with Gridfinity
                    </h4>
                    </div>
        <p className="text-center">
          Learn more about Gridfinity and Zack's other projects here:{" "}
          <a href="https://gridfinity.xyz/" target="_blank" rel="noreferrer" className="underline underline-offset-4">
            https://gridfinity.xyz/
          </a>
        </p>
        <p className="text-center">
          An easy to use parametric web tool for generating 3d printable files for Gridfinity baseplates, basic bins, and other Gridfinity components:{" "}
          <a href="https://gridfinitygenerator.com/en" target="_blank" rel="noreferrer" className="underline underline-offset-4">
            https://gridfinitygenerator.com/en
          </a>
        </p>
          <p className="text-center">
          An easy to use parametric web tool for generating 3d printable files for Gridfinity baseplates, basic bins, and other Gridfinity components:{" "}
          <a href="https://gridfinitygenerator.com/en" target="_blank" rel="noreferrer" className="underline underline-offset-4">
            https://gridfinitygenerator.com/en
          </a>
        </p>
          <p className="text-center">
          <TextEmphasis>Gridfinity Extended</TextEmphasis> Gridfinity Extended OpenSCAD implementation of Gridfinity with lots of excellent features, all credit to it's creator <TextEmphasis>ostat</TextEmphasis>:{" "}
          <a href="https://makerworld.com/en/models/481168-gridfinity-extended#profileId-1037829" target="_blank" rel="noreferrer" className="underline underline-offset-4">
            https://makerworld.com/en/models/481168-gridfinity-extended#profileId-1037829
          </a>
        </p>
        <div className="flex justify-center items-center flex-wrap gap-3">
          <a href="/" className={buttonVariants({ variant: "inverted" })}>
            View Paintfinity Modules
          </a>
        </div>

                     
      </SectionContainer>
    </AppShell>
  )
}
