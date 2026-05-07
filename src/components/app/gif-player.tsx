import * as React from "react"

const GIF_MAX_WIDTH = 640

type GifPlayerProps = {
  gifUrl: string
}

export function GifPlayer({ gifUrl }: GifPlayerProps) {
  const [playing, setPlaying] = React.useState(false)

  return (
    <button
      type="button"
      onClick={() => setPlaying((p) => !p)}
      aria-label={playing ? "Pause Paintfinity demo" : "Play Paintfinity demo"}
      className="group relative mx-auto block w-full cursor-pointer overflow-hidden rounded-none border border-primary/85 bg-card shadow-lg transition-[max-width,box-shadow] duration-300 ease-out hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      style={{ maxWidth: playing ? GIF_MAX_WIDTH : GIF_MAX_WIDTH * 0.75 }}
    >
      <div className="aspect-4/3">
        {playing ? (
          <img
            src={gifUrl}
            alt="Paintfinity demo reel"
            className="size-full object-cover"
          />
        ) : (
          <div className="size-full bg-muted/35" aria-hidden="true" />
        )}

        {!playing && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 transition-colors group-hover:bg-black/10">
            <p className="type-card-title text-3xl relative">
              15s Demo Reel
            </p>
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/85 shadow-lg shadow-primary/30 transition-transform duration-150 group-hover:scale-110">
              <svg
                className="ml-1 size-7 text-primary-foreground"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent opacity-0 transition-opacity duration-150 group-hover:bg-black/15 group-hover:opacity-100">
            <div className="flex size-16 items-center justify-center rounded-full bg-black/50 shadow-lg">
              <svg
                className="size-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </button>
  )
}
