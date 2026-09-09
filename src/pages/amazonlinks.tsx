import { AppShell } from "@/components/app/app-shell"
import { SectionContainer } from "@/components/app/section-container"
import { SiteFooter } from "@/components/app/site-footer"
import { SiteHeader } from "@/components/app/site-header"
import { buttonVariants } from "@/components/ui/button"

type AmazonItem = {
  name: string
  description: string
  affiliateUrl: string | null
}

// Copy or remove an object to add or remove a row. Use null until a link is ready.
const amazonItems: AmazonItem[] = [
  {
    name: "Example item",
    description: "Replace this with a short description of the item and what you use it for.",
    affiliateUrl: null,
  },
]

const headerClass = "border border-border/60 bg-primary/15 px-3 py-2 text-left font-semibold text-foreground"
const nameClass = "border border-border/60 px-3 py-3 text-left align-top font-semibold text-foreground"
const descriptionClass = "border border-border/60 px-3 py-3 align-top text-muted-foreground"
const linkCellClass = "border border-border/60 px-3 py-3 align-top"
const linkClass = "interactive text-foreground underline underline-offset-4 hover:text-primary"

export default function AmazonLinksPage() {
  return (
    <AppShell header={<SiteHeader />} footer={<SiteFooter />}>
      <SectionContainer variant="content">
        <h1 className="type-display text-4xl sm:text-5xl">Amazon Links</h1>
        <p>Links to supplies and accessories for your painting workspace will be collected here.</p>
        <div className="w-full min-w-0 overflow-x-auto">
          <table className="w-full min-w-140 table-fixed border-collapse text-sm leading-relaxed wrap-anywhere">
            <caption className="sr-only">Painting supplies and Amazon affiliate links</caption>
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/2" />
              <col className="w-1/4" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className={headerClass}>Name</th>
                <th scope="col" className={headerClass}>Description</th>
                <th scope="col" className={headerClass}>Amazon Affiliate Link</th>
              </tr>
            </thead>
            <tbody>
              {amazonItems.map((item) => (
                <tr key={item.name} className="even:bg-primary/5">
                  <th scope="row" className={nameClass}>{item.name}</th>
                  <td className={descriptionClass}>{item.description}</td>
                  <td className={linkCellClass}>
                    {item.affiliateUrl ? (
                      <a
                        href={item.affiliateUrl}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className={linkClass}
                        aria-label={`View ${item.name} on Amazon`}
                      >
                        View on Amazon
                      </a>
                    ) : (
                      <span className="text-muted-foreground">Link coming soon</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/" className={buttonVariants({ variant: "inverted" })}>
            Back to Paintfinity
          </a>
        </div>
      </SectionContainer>
    </AppShell>
  )
}
