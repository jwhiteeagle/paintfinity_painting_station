import * as React from "react"

type CatalogTotals = {
  modules: number
  uniqueModels: number
  variants: number
  totalModelsAndVariants: number
}

type CatalogStatsProps = {
  totals: CatalogTotals
}

type CatalogStatProps = {
  label: string
  value: React.ReactNode
}

function CatalogStat({ label, value }: CatalogStatProps) {
  return (
    <div>
      <dt className="type-meta font-semibold text-muted-foreground">
        {label}
      </dt>
      <dd className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
        {value}
      </dd>
    </div>
  )
}

export function CatalogStats({ totals }: CatalogStatsProps) {
  return (
    <dl className="grid w-full grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-5 xl:grid-cols-1">
      <CatalogStat label="Paintfinity Modules:" value={totals.modules} />
      <CatalogStat label="Unique Models:" value={totals.uniqueModels} />
      <CatalogStat label="Model Variants:" value={totals.variants} />
      <CatalogStat
        label="Total Model Count:"
        value={totals.totalModelsAndVariants}
      />
    </dl>
  )
}
